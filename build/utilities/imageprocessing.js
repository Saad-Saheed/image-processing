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
exports.validateSize = exports.fileExist = exports.createThumbnailFolder = exports.resize = void 0;
var path_1 = __importDefault(require("path"));
var sharp_1 = __importDefault(require("sharp"));
var fs_1 = require("fs");
// check if file exists in the folder
var fileExist = function (file) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fs_1.promises.access(path_1.default.resolve(file))];
            case 1:
                _a.sent();
                return [2 /*return*/, true];
        }
    });
}); };
exports.fileExist = fileExist;
// resize the image
var resize = function (option) { return __awaiter(void 0, void 0, void 0, function () {
    var thumb_file, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                thumb_file = path_1.default.resolve(option.thumb_path, "".concat(option.filename, "_").concat(option.width, "x").concat(option.height, ".jpg"));
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 5]);
                // if the image exist in the public/images/thumbnail, then return the old image
                return [4 /*yield*/, fileExist(thumb_file)];
            case 2:
                // if the image exist in the public/images/thumbnail, then return the old image
                _a.sent();
                return [2 /*return*/, thumb_file];
            case 3:
                error_1 = _a.sent();
                // if the image does not exist in the public/images/thumbnail then process the image
                return [4 /*yield*/, (0, sharp_1.default)(path_1.default.resolve(option.full_path, "".concat(option.filename, ".jpg")))
                        .resize(parseInt(option.width), parseInt(option.height))
                        .jpeg({ mozjpeg: true })
                        .toFile(thumb_file)];
            case 4:
                // if the image does not exist in the public/images/thumbnail then process the image
                _a.sent();
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/, thumb_file];
        }
    });
}); };
exports.resize = resize;
// validate width and height
var validateSize = function (width, height) {
    if (isNaN(width) || isNaN(height)) {
        return false;
    }
    return true;
};
exports.validateSize = validateSize;
// create thumbnail directory if not exists
var createThumbnailFolder = function (thumb_path) { return __awaiter(void 0, void 0, void 0, function () {
    var err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 4]);
                return [4 /*yield*/, fs_1.promises.access(thumb_path)];
            case 1:
                _a.sent();
                return [2 /*return*/, true];
            case 2:
                err_1 = _a.sent();
                return [4 /*yield*/, fs_1.promises.mkdir(thumb_path, { recursive: true })];
            case 3:
                _a.sent();
                return [2 /*return*/, true];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.createThumbnailFolder = createThumbnailFolder;
