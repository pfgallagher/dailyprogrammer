var templateToDateString = function (template) {
    var cur = new Date();
    var templateReplacements = {
        "%H": function () {
            var hrs = cur.getHours();
            return hrs > 12 ? hrs - 12 : !hrs ? 12 : hrs;
        },
        "%M": function () { return cur.getMonth() + 1; },
        "%c": function () { return (cur.getHours() < 12 ? "AM" : "PM"); },
        "%d": function () { return cur.getDate(); },
        "%h": function () { return cur.getHours(); },
        "%l": function () { return cur.getMilliseconds(); },
        "%m": function () { return cur.getMinutes(); },
        "%s": function () { return cur.getSeconds(); },
        "%y": function () { return cur.getFullYear(); }
    };
    return template.replace(/%[lsmhHcdMy]/g, function (match) { return "" + templateReplacements[match](); });
};
console.log(templateToDateString("%s.%l"));
console.log(templateToDateString("%s:%m:%h %M/%d/%y"));
console.log(templateToDateString("The minute is %m! The hour is %h."));
