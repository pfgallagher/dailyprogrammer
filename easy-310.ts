const randomIndex = (max: number): number => Math.floor(Math.random() * max);

const randomIndexWithExclusion = (max: number, exclusion: number): number => {
	let randomIdx = randomIndex(max);
	while (randomIdx === exclusion) {
		randomIdx = randomIndex(max);
	}
	return randomIdx;
};

const randomStudent = (studentArr: string[], curStudentIdx: number): string =>
	studentArr[randomIndexWithExclusion(studentArr.length, curStudentIdx)];

const seatingLotto = (students: string, n: number): string =>
	students
		.split(";")
		.map((student, i, arr) => {
			const otherStudents: string[] = [];
			while (otherStudents.length < n) {
				const rdmStudent = randomStudent(arr, i);
				if (!otherStudents.includes(rdmStudent)) {
					otherStudents.push(rdmStudent);
				}
			}
			return `${student} > ${otherStudents.join("; ")}`;
		})
		.join("\n");

console.log(
	seatingLotto(
		"Rebbeca Gann;Latosha Caraveo;Jim Bench;Carmelina Biles;Oda Wilhite;Arletha Eason",
		3,
	),
	"\n",
);
console.log(
	seatingLotto(
		"Rebbeca Gann;Latosha Caraveo;Jim Bench;Carmelina Biles;Oda Wilhite;Arletha Eason;Theresa Kaczorowski;Jane Cover;Melissa Wise;Jaime Plascencia;Sacha Pontes;Tarah Mccubbin;Pei Rall;Dixie Rosenblatt;Rosana Tavera;Ethyl Kingsley;Lesia Westray;Vina Goodpasture;Drema Radke;Grace Merritt;Lashay Mendenhall;Magali Samms;Tiffaney Thiry;Rikki Buckelew;Iris Tait;Janette Huskins;Donovan Tabor;Jeremy Montilla;Sena Sapien;Jennell Stiefel",
		15,
	),
);
