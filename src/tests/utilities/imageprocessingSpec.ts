import path from 'path';
import { params } from '../../http/controllers/imageController';
import {
  resize,
  createThumbnailFolder,
  fileExist,
  validateSize,
} from '../../utilities/imageprocessing';

const options: params = {
  full_path: 'public/images/full/',
  thumb_path: 'public/images/thumbnail/',
  filename: 'santamonica',
  width: 98,
  height: 56,
};

describe('Images processing utilities test', () => {
  it('must validate the width and height entered by user', () => {
    expect(validateSize(options.width, options.height)).toBeTrue();
  });

  const test_file = path.resolve(options.full_path, `${options.filename}.jpg`);

  it('filename entered by user must exist in public/images/full', async () => {
    const isExists = await fileExist(test_file);
    expect(isExists).toBeTrue();
  });

  it("must create a thumbnail path, if it doesn't exist in public/images/thumbnail", async () => {
    const isCreated = await createThumbnailFolder(options.thumb_path);
    expect(isCreated).toBeTrue();
  });

  it('must resize the image (i.e None duplicate) with the values provided in the options object', async () => {
    const isResized = await resize(options);
    expect(isResized).toBeTruthy();
  });
});
