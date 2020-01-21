const markupGenerator = (paragraphEntry: string): string => 
`<!DOCTYPE html>
<html>
	<head>
		<title></title>
	</head>

	<body>
		<p>${paragraphEntry}</p>
	</body>
</html>`;

console.log(markupGenerator("This is my paragraph entry"));
