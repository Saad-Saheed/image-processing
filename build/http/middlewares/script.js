"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkTypescriptJasmine = exports.checkPrettier = exports.checkEslint = void 0;
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
function checkTypescriptJasmine(req, res, next) {
    (0, child_process_1.exec)('npm run test', function (error) {
        if (error) {
            console.error('typescript and Jasmine failed');
            next("exec error: ".concat(error));
        }
        else {
            console.info('typescript and Jasmine passed');
            next();
        }
    });
}
exports.checkTypescriptJasmine = checkTypescriptJasmine;
