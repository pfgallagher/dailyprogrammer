const axios = require("axios");
const cheerio = require("cheerio");

const getBook = async url => {
	try {
		const { data } = await axios.get(url);
		const $ = cheerio.load(data);
		return [
			...$(".book")
				.children()
				.not("center, .toc")
				.text(),
		].filter(el => /\w/g.test(el)).length;
	} catch (error) {
		console.log(error);
	}
};

(async () => {
	console.log(
		await getBook("http://www.gutenberg.org/files/1661/1661-h/1661-h.htm"),
	);
})();
