var markupGenerator = function (paragraphEntry) {
    return "<!DOCTYPE html>\n<html>\n\t<head>\n\t\t<title></title>\n\t</head>\n\n\t<body>\n\t\t<p>" + paragraphEntry + "</p>\n\t</body>\n</html>";
};
console.log(markupGenerator("This is my paragraph entry"));
