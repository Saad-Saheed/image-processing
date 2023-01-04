"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dependenciesMiddleware_1 = require("../http/middlewares/dependenciesMiddleware");
var imageController_1 = require("../http/controllers/imageController");
var dependenciesMiddlewaers = [dependenciesMiddleware_1.checkPrettier, dependenciesMiddleware_1.checkEslint, dependenciesMiddleware_1.checkTypescript];
var routes = express_1.default.Router();
routes.get('/dependences/testing', dependenciesMiddlewaers, function (req, res) {
    res.status(200).send('Success: All dependencies works Fine.');
});
routes.get('/image/process', imageController_1.processImage);
exports.default = routes;
