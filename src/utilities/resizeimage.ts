import express from 'express';
import path from 'path';
import sharp from 'sharp';
import { promises as fsPromises } from 'fs';

const resizeImage = async (
  filename: string,
  width: number,
  height: number,
  imgPath: string
): Promise<void> => {
  console.log(filename);
  // check if resized image not found in thumbnail folder
  if (await exists(path.resolve(imgPath))) {
      console.log('found');
    return;
  } else {
    // open image file
    console.log('processing image');
    try {
      const originalImage = fsPromises.readFile(
        path.resolve('Images/' + filename + '.jpg')
      );
      console.log(originalImage);
    } catch (err) {
      console.log(err);
    }
    // resize image
    
    // save image in thumbnail folder
  }
};

// function to check if a file exists
async function exists(path: string) {
  try {
    await fsPromises.access(path);
    return true;
  } catch {
    return false;
  }
}

export default resizeImage;
