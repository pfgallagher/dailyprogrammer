enum Note {
	c = "C",
	cSharp = "C#",
	d = "D",
	dSharp = "D#",
	e = "E",
	f = "F",
	fSharp = "F#",
	g = "G",
	gSharp = "G#",
	a = "A",
	aSharp = "A#",
	b = "b",
}

enum Solfege {
	do = "Do",
	re = "Re",
	mi = "Mi",
	fa = "Fa",
	so = "So",
	la = "La",
	ti = "Ti",
}

const chromaticScale: { [note in Note]: Note } = {
	[Note.c]: Note.cSharp,
	[Note.cSharp]: Note.d,
	[Note.d]: Note.dSharp,
	[Note.dSharp]: Note.e,
	[Note.e]: Note.f,
	[Note.f]: Note.fSharp,
	[Note.fSharp]: Note.g,
	[Note.g]: Note.gSharp,
	[Note.gSharp]: Note.a,
	[Note.a]: Note.aSharp,
	[Note.aSharp]: Note.b,
	[Note.b]: Note.c,
};

const noteNSemitonesFromNote = (note: Note, n: number): Note => {
	let currentNote = note;
	for (let i = 0; i < n; i++) {
		currentNote = chromaticScale[currentNote];
	}
	return currentNote;
};

const majorScaleFromNote = (note: Note): Note[] =>
	[0, 2, 4, 5, 7, 9, 11].map(n => noteNSemitonesFromNote(note, n));

const mapNotesToSolfege = (notes: Note[]): { note: Note; solfege: Solfege }[] =>
	Object.values(Solfege).map((solfege, i) => ({
		solfege,
		note: notes[i],
	}));

const noteFromScaleAndSolfege = (
	scale: Note,
	targetSolfege: Solfege,
): Note | undefined =>
	mapNotesToSolfege(majorScaleFromNote(scale)).find(
		({ solfege }) => solfege === targetSolfege,
	)?.note;

[
	noteFromScaleAndSolfege(Note.c, Solfege.do) === Note.c,
	noteFromScaleAndSolfege(Note.c, Solfege.re) === Note.d,
	noteFromScaleAndSolfege(Note.c, Solfege.mi) === Note.e,
	noteFromScaleAndSolfege(Note.d, Solfege.mi) === Note.fSharp,
	noteFromScaleAndSolfege(Note.aSharp, Solfege.fa) === Note.dSharp,
].forEach((test, i) => {
	console.assert(test, i.toString());
});
