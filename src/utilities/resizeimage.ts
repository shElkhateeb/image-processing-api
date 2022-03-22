import express from 'express';
import sharp from "sharp";
import { promises as fsPromises } from 'fs';

const resizeImage = (req: express.Request, res: express.Response, next: Function): void=>{
    const filename = (req.query.filename as unknown) as string;
    const width = (req.query.width as unknown) as number;
    const height = (req.query.height as unknown) as number;
    console.log(filename);
    // if resized image not found in thumbnail folder
    // resize image
    // save image in thumbnail folder
    
    next();
}

export default resizeImage;