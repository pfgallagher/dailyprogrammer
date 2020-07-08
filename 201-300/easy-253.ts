interface IInputObj {
	interestRatePercent: number;
	annualLoanAmountInDollars: number;
	startAge: number;
	clawbackBalanceTrigger: number;
	royaltyRateUnder65Percent: number;
	royaltyRateOver65Percent: number;
	incomeStreamInThousands: string;
}

const ULI = ({
	annualLoanAmountInDollars,
	clawbackBalanceTrigger,
	incomeStreamInThousands,
	interestRatePercent,
	royaltyRateOver65Percent,
	royaltyRateUnder65Percent,
	startAge,
}: IInputObj): string => {
	const [royaltyRateOver65, royaltyRateUnder65, interestRate] = [
		royaltyRateOver65Percent,
		royaltyRateUnder65Percent,
		interestRatePercent,
	].map(rate => rate / 100);
	const incomeStream = incomeStreamInThousands.split(" ").map((income, i) => ({
		age: startAge + i,
		income: parseInt(income, 10) * 1000,
	}));
	let repaymentsFromIncome = 0;
	let repaymentsFromClawback = 0;
	let totalBalance = 0;
	let totalLoansTaken = 0;
	const applyAnnualLoanAndInterest = () => {
		totalLoansTaken += annualLoanAmountInDollars;
		totalBalance *= 1 + interestRate;
		totalBalance += annualLoanAmountInDollars;
	};
	for (const { age, income } of incomeStream) {
		applyAnnualLoanAndInterest();
		const royaltyRate = age < 65 ? royaltyRateUnder65 : royaltyRateOver65;
		const royalty = income * royaltyRate;
		const clawback =
			totalBalance >= clawbackBalanceTrigger
				? royaltyRate * annualLoanAmountInDollars
				: 0;
		repaymentsFromIncome += royalty;
		repaymentsFromClawback += clawback;
		totalBalance -= royalty + clawback;
	}
	const inThousands = (dollars: number): string =>
		`$${(dollars / 1000).toFixed(2)}`;
	return `(In Thousands)\nOverall Loans Taken: ${inThousands(
		totalLoansTaken,
	)}\nRepayments from Income: ${inThousands(
		repaymentsFromIncome,
	)}\nRepayments from Benefit Clawbacks: ${inThousands(
		repaymentsFromClawback,
	)}\nEnding Balance with Interest: ${inThousands(totalBalance)}\n`;
};

console.log(
	ULI({
		annualLoanAmountInDollars: 15000,
		clawbackBalanceTrigger: 100000,
		incomeStreamInThousands:
			"0 0 20 20 20 20 20 20 20 20 20 20 30 30 30 30 30 30 30 30 30 30 40 40 40 40 40 40 40 40 40 40 50 50 50 50 50 50 50 50 50 50 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0",
		interestRatePercent: 2,
		royaltyRateOver65Percent: 40,
		royaltyRateUnder65Percent: 20,
		startAge: 18,
	}),
);
// (In Thousands)
// Overall Loans Taken: $1080.00
// Repayments from Income: $280.00
// Repayments from Benefit Clawbacks: $270.00
// Ending Balance with Interest: $1169.09

console.log(
	ULI({
		annualLoanAmountInDollars: 15000,
		clawbackBalanceTrigger: 100000,
		incomeStreamInThousands:
			"0 0 30 30 30 30 30 30 30 30 30 30 40 40 40 40 40 40 40 40 40 40 50 50 50 50 50 50 50 50 50 50 60 60 60 60 60 60 60 60 60 60 100 120 140 160 200 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10",
		interestRatePercent: 2,
		royaltyRateOver65Percent: 40,
		royaltyRateUnder65Percent: 20,
		startAge: 18,
	}),
);
// (In Thousands)
// Overall Loans Taken: $1005.00
// Repayments from Income: $584.00
// Repayments from Benefit Clawbacks: $237.00
// Ending Balance with Interest: $509.49
