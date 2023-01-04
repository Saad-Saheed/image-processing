"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./routes"));
var app = (0, express_1.default)();
exports.app = app;
var port = 3000;
// configure my routes
app.use('/api', routes_1.default);
// create server
app.listen(port, function () {
    console.log("Listen on http://localhost:".concat(port));
});
