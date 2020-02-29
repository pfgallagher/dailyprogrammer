"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
exports.__esModule = true;
var fs_1 = require("fs");
var jsonSearch = function (input, searchTerm) {
    if (searchTerm === void 0) { searchTerm = "dailyprogrammer"; }
    if (typeof input === "string") {
        input = JSON.parse(input);
    }
    var path = [];
    for (var key in input) {
        if (input.hasOwnProperty(key)) {
            var value = input[key];
            if (value === searchTerm) {
                path.push(key);
            }
            else if (typeof value === "object") {
                var next = jsonSearch(value, searchTerm);
                if (next.length) {
                    if (Array.isArray(next)) {
                        path.push(key);
                        path = path.concat(next);
                    }
                    else {
                        path.push(key, next);
                    }
                }
            }
        }
    }
    return path.join(" -> ");
};
console.log(jsonSearch('{"name":"William Shakespeare","wife":{"birthYear":1555,"deathYear":"Fun fact, she\'s a vampire","name":"Anne Hathaway","dead":false},"favoriteWebsites":["dailysonneter","dailyprogrammer","vine (he\'s way into 6-second cat videos)"],"dead":true,"birthYear":1564,"facebookProfile":null,"selectedWorks":[{"written":1606,"name":"The Tragedy of Macbeth","isItAwesome":true},{"written":1608,"name":"Coriolanus","isItAwesome":"It\'s alright, but kinda fascist-y"}],"deathYear":1616}'));
console.log(jsonSearch('{"dlpgcack":false,"indwqahe":null,"caki":{"vvczskh":null,"tczqyzn":false,"qymizftua":"jfx","cyd":{"qembsejm":[null,"dailyprogrammer",null],"qtcgujuki":79,"ptlwe":"lrvogzcpw","jivdwnqi":null,"nzjlfax":"xaiuf","cqajfbn":true},"kbttv":"dapsvkdnxm","gcfv":43.25503357696589},"cfqnknrm":null,"dtqx":"psuyc","zkhreog":[null,{"txrhgu":false,"qkhe":false,"oqlzgmtmx":"xndcy","khuwjmktox":48,"yoe":true,"xode":"hzxfgvw","cgsciipn":20.075297532268902},"hducqtvon",false,[null,76.8463226047357,"qctvnvo",null],[null,{"nlp":false,"xebvtnvwbb":null,"uhfikxc":null,"eekejwjbe":false,"jmrkaqky":null,"oeyystp":false},[null,10,"nyzfhaps",71,null],40,null,13.737832677566875],[true,80,20,{"weynlgnfro":40.25989193717965,"ggsirrt":17,"ztvbcpsba":12,"mljfh":false,"lihndukg":"bzebyljg","pllpche":null},null,[true,false,52.532666161803895,"mkmqrhg","kgdqstfn",null,"szse"],null,{"qkhfufrgac":"vpmiicarn","hguztz":"ocbmzpzon","wprnlua":null}],{"drnj":[null,false],"jkjzvjuiw":false,"oupsmgjd":false,"kcwjy":null}]}'));
// caki -> cyd -> qembsejm -> 1
(function () { return __awaiter(_this, void 0, void 0, function () {
    var test3, test4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fs_1.promises.readFile("./easy-230-data-1.json", "utf-8")];
            case 1:
                test3 = _a.sent();
                console.log(jsonSearch(test3));
                return [4 /*yield*/, fs_1.promises.readFile("./easy-230-data-2.json", "utf-8")];
            case 2:
                test4 = _a.sent();
                console.log(jsonSearch(test4));
                return [2 /*return*/];
        }
    });
}); })();
