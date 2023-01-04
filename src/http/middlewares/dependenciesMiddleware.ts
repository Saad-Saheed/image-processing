import { exec } from 'child_process';
import express from 'express';
import { NextFunction } from 'express';

function checkPrettier(
  req: express.Request,
  res: express.Response,
  next: NextFunction
): void {
  exec('npm run prettier', (error) => {
    if (error) {
      console.error('Prettier failed');
      next(`exec error: ${error}`);
    } else {
      console.info('Prettier passed');
      next();
    }
  });
}

function checkEslint(
  req: express.Request,
  res: express.Response,
  next: NextFunction
): void {
  exec('npm run lint', (error) => {
    if (error) {
      console.error('Eslint failed');
      next(`exec error: ${error}`);
    } else {
      console.info('eslint passed');
      next();
    }
  });
}

function checkTypescript(
  req: express.Request,
  res: express.Response,
  next: NextFunction
): void {
  exec('npm run build', (error) => {
    if (error) {
      console.error('typescript failed');
      next(`exec error: ${error}`);
    } else {
      console.info('typescript passed');
      next();
    }
  });
}

export { checkEslint, checkPrettier, checkTypescript };
