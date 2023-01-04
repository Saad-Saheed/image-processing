import express from 'express';
import path from 'path';
import {
  resize,
  fileExist,
  validateSize,
  createThumbnailFolder,
} from '../../utilities/imageprocessing';

export interface params {
  full_path: string;
  thumb_path: string;
  filename: string;
  width: unknown;
  height: unknown;
}

// if filename is not exist it return 422 else it return 200
// if width or height is not supplied or invalid it will return 200 but it will not resize the image
//it will only display the image in it original formart
export const processImage = async (
  req: express.Request,
  res: express.Response
) => {
  const options: params = {
    full_path: 'public/images/full/',
    thumb_path: 'public/images/thumbnail/',
    filename: req.query.filename as string,
    width: req.query.width as unknown as number,
    height: req.query.height as unknown as number,
  };

  try {
    // check if image name exist in the public/images/full.
    await fileExist(path.resolve(options.full_path, `${options.filename}.jpg`));
    // validate the provided width and height
    if (validateSize(options.width as string, options.height as string)) {
      // create thumbnail directory if not exists
      await createThumbnailFolder(options.thumb_path);
      // then resize the image with the provided width and height
      const thumb_file = await resize(options);
      res.sendFile(thumb_file);
    } else {
      // process file with width and height
      return res.sendFile(
        path.resolve('public/images/full/', `${options.filename}.jpg`)
      );
    }
  } catch (error) {
    return res.status(422).send(error);
  }
};
