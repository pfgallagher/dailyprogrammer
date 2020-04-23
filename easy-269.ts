const basicFormatter = (input: string): string => {
	let depth = 0;
	return input
		.replace(/[·»]/g, "")
		.split("\n")
		.filter(line => line)
		.map(line => {
			if (/^NEXT|^ENDIF/.test(line)) {
				depth--;
			}
			const indentedLine = `${"····".repeat(depth)}${line}`;
			if (/^FOR|^IF/.test(line)) {
				depth++;
			}
			return indentedLine;
		})
		.join("\n");
};

console.log(
	basicFormatter(
		'····\nVAR I\n·FOR I=1 TO 31\n»»»»IF !(I MOD 3) THEN\n··PRINT "FIZZ"\n··»»ENDIF\n»»»»····IF !(I MOD 5) THEN\n»»»»··PRINT "BUZZ"\n··»»»»»»ENDIF\n»»»»IF (I MOD 3) && (I MOD 5) THEN\n······PRINT "FIZZBUZZ"\n··»»ENDIF\n»»»»·NEXT',
	),
);
// VAR I
// FOR I=1 TO 31
// ····IF !(I MOD 3) THEN
// ········PRINT "FIZZ"
// ····ENDIF
// ····IF !(I MOD 5) THEN
// ········PRINT "BUZZ"
// ····ENDIF
// ····IF (I MOD 3) && (I MOD 5) THEN
// ········PRINT "FIZZBUZZ"
// ····ENDIF
// NEXT
