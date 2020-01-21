const gradeAssignments = (gradingInput: string): void => {
	const [classInfo, ...students] = gradingInput.split("\n");
	const [numStudents, numAssignments] = classInfo
		.split(" ")
		.map(num => parseInt(num, 10));
	const studentAverages: Array<[string, number]> = students
		.filter(student => student)
		.map(student => {
			const [name, ...scores] = student.split(" ");
			const studentAverage =
				scores.reduce((a, c) => a + parseInt(c, 10), 0) / numAssignments;
			return [name, studentAverage];
		});
	const classAverage =
		studentAverages.reduce((a, c) => a + c[1], 0) / numStudents;
	studentAverages.unshift(["", classAverage]);
	studentAverages.forEach(studentAverage => {
		const [student, average] = studentAverage;
		console.log(student, average.toFixed(2));
	});
};

console.log(
	gradeAssignments(
		"3 5\nJON 19 14 15 15 16\nJEREMY 15 11 10 15 16\nJESSE 19 17 20 19 18",
	),
);
// 15.93
// JON 15.80
// JEREMY 13.40
// JESSE 18.60

console.log(
	gradeAssignments(
		"10 10\nABIGAIL 11 3 5 20 4 2 8 17 4 5\nALEXANDER 2 12 20 0 6 10 3 4 9 7\nAVA 11 15 2 19 14 5 16 18 15 19\nETHAN 6 12 0 0 5 11 0 11 12 15\nISABELLA 16 0 10 7 20 20 7 2 0 1\nJACOB 2 14 17 7 1 11 16 14 14 7\nJAYDEN 10 10 3 16 15 16 8 17 15 3\nMADISON 10 11 19 4 12 15 7 4 18 13\nSOPHIA 5 17 14 7 1 17 18 8 1 2\nWILLIAM 12 12 19 9 4 3 0 4 13 14\n",
	),
);
// 9.50
// ABIGAIL 7.90
// ALEXANDER 7.30
// AVA 13.40
// ETHAN 7.20
// ISABELLA 8.30
// JACOB 10.30
// JAYDEN 11.30
// MADISON 11.30
// SOPHIA 9.00
// WILLIAM 9.00
