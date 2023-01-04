import path from 'path';
import sharp from 'sharp';
import { promises as fsPromise } from 'fs';
import { params } from '../http/controllers/imageController';

// check if file exists in the folder
const fileExist = async (file: string): Promise<boolean> => {
  await fsPromise.access(path.resolve(file));
  return true;
};

// resize the image
const resize = async (option: params): Promise<string> => {
  const thumb_file = path.resolve(
    option.thumb_path,
    `${option.filename}_${option.width}x${option.height}.jpg`
  );

  try {
    // if the image exist in the public/images/thumbnail, then return the old image
    await fileExist(thumb_file);
    return thumb_file;
  } catch (error) {
    // if the image does not exist in the public/images/thumbnail then process the image
    await sharp(path.resolve(option.full_path, `${option.filename}.jpg`))
      .resize(
        parseInt(option.width as string),
        parseInt(option.height as string)
      )
      .jpeg({ mozjpeg: true })
      .toFile(thumb_file);
  }

  return thumb_file;
};

// validate width and height
const validateSize = (width: unknown, height: unknown): boolean => {
  if (isNaN(width as number) || isNaN(height as number)) {
    return false;
  }
  return true;
};

// create thumbnail directory if not exists
const createThumbnailFolder = async (thumb_path: string): Promise<boolean> => {
  try {
    await fsPromise.access(thumb_path);
    return true;
  } catch (err) {
    await fsPromise.mkdir(thumb_path, { recursive: true });
    return true;
  }
};

export { resize, createThumbnailFolder, fileExist, validateSize };
