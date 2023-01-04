"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkTypescript = exports.checkPrettier = exports.checkEslint = void 0;
var child_process_1 = require("child_process");
function checkPrettier(req, res, next) {
    (0, child_process_1.exec)('npm run prettier', function (error) {
        if (error) {
            console.error('Prettier failed');
            next("exec error: ".concat(error));
        }
        else {
            console.info('Prettier passed');
            next();
        }
    });
}
exports.checkPrettier = checkPrettier;
function checkEslint(req, res, next) {
    (0, child_process_1.exec)('npm run lint', function (error) {
        if (error) {
            console.error('Eslint failed');
            next("exec error: ".concat(error));
        }
        else {
            console.info('eslint passed');
            next();
        }
    });
}
exports.checkEslint = checkEslint;
function checkTypescript(req, res, next) {
    (0, child_process_1.exec)('npm run build', function (error) {
        if (error) {
            console.error('typescript failed');
            next("exec error: ".concat(error));
        }
        else {
            console.info('typescript passed');
            next();
        }
    });
}
exports.checkTypescript = checkTypescript;
