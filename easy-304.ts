type Journals = {
	account: number;
	period: string;
	debit: number;
	credit: number;
}[];

type Accounts = {
	account: number;
	label: string;
}[];

interface FormattedAccount {
	account?: number | string;
	description: string;
	debit: number;
	credit: number;
	balance: number;
}

class Accounting {
	private journals: Journals;
	private accounts: Accounts;
	private headers = "ACCOUNT;DESCRIPTION;DEBIT;CREDIT;BALANCE;";
	constructor(journals: string, accounts: string) {
		this.journals = this.parseJournals(journals);
		this.accounts = this.parseAccounts(accounts);
	}

	/*
		I'm only going to support CSV formatting, since the process of getting the
		text formatting to look nice seems unproductively arduous.
	*/
	public query = (
		startAccount: string,
		endAccount: string,
		startPeriod: string,
		endPeriod: string,
	): string =>
		this.CSVOutput(
			this.joinAndFormatAccounts(
				this.filterByDate(
					this.filterByAccount(this.journals, startAccount, endAccount),
					startPeriod,
					endPeriod,
				),
			),
		);

	private calcTotals = (
		formattedAccounts: FormattedAccount[],
	): [number, number, number] =>
		formattedAccounts.reduce(
			(
				[curDebit, curCredit, curBalance],
				{ debit: newDebit, credit: newCredit, balance: newBalance },
			) => [
				curDebit + newDebit,
				curCredit + newCredit,
				curBalance + newBalance,
			],
			[0, 0, 0],
		);

	private CSVOutput = (accounts: FormattedAccount[]): string =>
		`${this.headers}\n${accounts
			.map(account => this.CSVFromFormattedAccount(account))
			.join("\n")}\n${this.CSVFromTotals(this.calcTotals(accounts))}`;

	private CSVFromFormattedAccount = ({
		account,
		description,
		debit,
		credit,
		balance,
	}: FormattedAccount): string =>
		[account, description, debit, credit, balance].join(";");

	private CSVFromTotals = ([debit, credit, balance]: [
		number,
		number,
		number,
	]): string =>
		this.CSVFromFormattedAccount({
			account: "TOTAL",
			description: "",
			debit,
			credit,
			balance,
		});

	private joinAndFormatAccounts = (journals: Journals): FormattedAccount[] => {
		const accounts = new Map<number, FormattedAccount>();
		journals.forEach(
			({ account: newAccount, debit: newDebit, credit: newCredit }) => {
				if (accounts.has(newAccount)) {
					const {
						description,
						debit: curDebit,
						credit: curCredit,
					} = accounts.get(newAccount) as FormattedAccount;
					const debit = curDebit + newDebit;
					const credit = curCredit + newCredit;
					const balance = debit - credit;
					accounts.set(newAccount, {
						description,
						debit,
						credit,
						balance,
					});
				} else {
					accounts.set(newAccount, {
						description:
							this.accounts.find(({ account }) => account === newAccount)
								?.label || "",
						debit: newDebit,
						credit: newCredit,
						balance: newDebit - newCredit,
					});
				}
			},
		);
		return [...accounts.entries()]
			.map(([account, rest]) => ({
				account,
				...rest,
			}))
			.sort(({ account: acctA }, { account: acctB }) =>
				acctA < acctB ? -1 : 1,
			);
	};

	private parseJournals = (journals: string) =>
		journals
			.split("\n")
			.map(entry => entry.split(";"))
			.map(([account, period, debit, credit]) => ({
				account: parseInt(account, 10),
				period,
				debit: parseInt(debit, 10),
				credit: parseInt(credit, 10),
			}));

	private parseAccounts = (accounts: string) =>
		accounts
			.split("\n")
			.map(entry => entry.split(";"))
			.map(([account, label]) => ({
				account: parseInt(account, 10),
				label,
			}));

	private getAccountNumbers = (journals: Journals) =>
		journals.map(({ account }) => account);

	private getPeriods = (journals: Journals) =>
		journals.map(({ period }) => period);

	private filterByAccount = (
		journals: Journals,
		startStr: string,
		endStr: string,
	): Journals => {
		const accountNumbers = this.getAccountNumbers(journals);
		const start =
			journals.find(({ account }) => account.toString().startsWith(startStr))
				?.account || Math.min(...accountNumbers);
		const end =
			journals.find(({ account }) => account.toString().startsWith(endStr))
				?.account || Math.max(...accountNumbers);
		return journals.filter(({ account }) => account >= start && account <= end);
	};

	private filterByDate = (
		journals: Journals,
		startStr: string,
		endStr: string,
	): Journals => {
		const periods = this.getPeriods(journals);
		let start = periods.indexOf(startStr);
		if (start < 0) {
			start = 0;
		}
		let end = periods.lastIndexOf(endStr);
		if (end < 0) {
			end = periods.length - 1;
		}
		return journals.slice(start, end + 1);
	};
}

const test = new Accounting(
	"1000;JAN-16;100000;0;\n3000;JAN-16;0;100000;\n7140;JAN-16;36000;0;\n1000;JAN-16;0;36000;\n1100;FEB-16;80000;0;\n1000;FEB-16;0;60000;\n2000;FEB-16;0;20000;\n1110;FEB-16;17600;0;\n2010;FEB-16;0;17600;\n1000;MAR-16;28500;0;\n4000;MAR-16;0;28500;\n2010;MAR-16;17600;0;\n1000;MAR-16;0;17600;\n5000;APR-16;19100;0;\n1000;APR-16;0;19100;\n1000;APR-16;32900;0;\n1020;APR-16;21200;0;\n4000;APR-16;0;54100;\n1000;MAY-16;15300;0;\n1020;MAY-16;0;15300;\n1000;MAY-16;4000;0;\n4090;MAY-16;0;4000;\n1110;JUN-16;5200;0;\n2010;JUN-16;0;5200;\n5100;JUN-16;19100;0;\n1000;JUN-16;0;19100;\n4120;JUN-16;5000;0;\n1000;JUN-16;0;5000;\n7160;JUL-16;2470;0;\n2010;JUL-16;0;2470;\n5500;JUL-16;3470;0;\n1000;JUL-16;0;3470;",
	"1000;Cash;\n1020;Account Receivables;\n1100;Lab Equipment;\n1110;Office Supplies;\n2000;Notes Payables;\n2010;Account Payables;\n2110;Utilities Payables;\n3000;Common Stock;\n4000;Commercial Revenue;\n4090;Unearned Revenue;\n4120;Dividends;\n5000;Direct Labor;\n5100;Consultants;\n5500;Misc Costs;\n7140;Rent;\n7160;Telephone;\n9090;Dividends;",
);

console.log(test.query("*", "2", "*", "FEB-16"), "\n");
// ACCOUNT;DESCRIPTION;DEBIT;CREDIT;BALANCE;
// 1000;Cash;100000;96000;4000;
// 1100;Lab Equipment;80000;0;80000;
// 1110;Office Supplies;17600;0;17600;
// 2000;Notes Payables;0;20000;-20000;
// TOTAL;;197600;116000;81600;
console.log(test.query("40", "*", "MAR-16", "*"));
// ACCOUNT;DESCRIPTION;DEBIT;CREDIT;BALANCE;
// 4000;Commercial Revenue;0;82600;-82600;
// 4090;Unearned Revenue;0;4000;-4000;
// 4120;Dividends;5000;0;5000;
// 5000;Direct Labor;19100;0;19100;
// 5100;Consultants;19100;0;19100;
// 5500;Misc Costs;3470;0;3470;
// 7160;Telephone;2470;0;2470;
// TOTAL;;49140;86600;-37460;
