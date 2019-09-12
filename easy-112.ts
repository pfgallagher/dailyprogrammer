const validateURL = (url: string): { [key: string]: string } | string => {
	const [scheme, ...queryStrings] = url.split(/[?&]/g);
	return /[^\w0-9-.~%:/?=+&#]/gi.test(url) ||
		!/[a-z]+[a-z0-9+.-]*:\/\/.*/.test(scheme)
		? "The given URL is invalid"
		: Object.fromEntries(
				queryStrings.map(queryString => queryString.split("=")),
		  );
};

console.log(
	validateURL(
		"http://en.wikipedia.org/w/index.php?title=Main_Page&action=edit",
	),
); // {title: "Main_Page", action: "edit"}
console.log(validateURL("http://en.wikipedia.org/w/index.php?title=Main_Page")); // {title: "Main_Page"}
console.log(
	validateURL(
		"http://en.wikipedia.org/w/index.php?title=Special:UserLogin&returnto=Main+Page",
	),
); // {title: 'Special:UserLogin', returnto: 'Main+Page'}
console.log(
	validateURL(
		"http://en.wikipedia.org/w/index.php?title= hello world!&action=é",
	),
); // -> The given URL is invalid
