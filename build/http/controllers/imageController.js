"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.processImage = void 0;
var path_1 = __importDefault(require("path"));
var imageprocessing_1 = require("../../utilities/imageprocessing");
// if filename is not exist it return 422 else it return 200
// if width or height is not supplied or invalid it will return 200 but it will not resize the image
//it will only display the image in it original formart
var processImage = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var options, thumb_file, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                options = {
                    full_path: 'public/images/full/',
                    thumb_path: 'public/images/thumbnail/',
                    filename: req.query.filename,
                    width: req.query.width,
                    height: req.query.height,
                };
                _a.label = 1;
            case 1:
                _a.trys.push([1, 7, , 8]);
                // check if image name exist in the public/images/full.
                return [4 /*yield*/, (0, imageprocessing_1.fileExist)(path_1.default.resolve(options.full_path, "".concat(options.filename, ".jpg")))];
            case 2:
                // check if image name exist in the public/images/full.
                _a.sent();
                if (!(0, imageprocessing_1.validateSize)(options.width, options.height)) return [3 /*break*/, 5];
                // create thumbnail directory if not exists
                return [4 /*yield*/, (0, imageprocessing_1.createThumbnailFolder)(options.thumb_path)];
            case 3:
                // create thumbnail directory if not exists
                _a.sent();
                return [4 /*yield*/, (0, imageprocessing_1.resize)(options)];
            case 4:
                thumb_file = _a.sent();
                res.sendFile(thumb_file);
                return [3 /*break*/, 6];
            case 5: 
            // process file with width and height
            return [2 /*return*/, res.sendFile(path_1.default.resolve('public/images/full/', "".concat(options.filename, ".jpg")))];
            case 6: return [3 /*break*/, 8];
            case 7:
                error_1 = _a.sent();
                return [2 /*return*/, res.status(422).send(error_1)];
            case 8: return [2 /*return*/];
        }
    });
}); };
exports.processImage = processImage;
