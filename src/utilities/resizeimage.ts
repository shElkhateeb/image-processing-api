import sharp from 'sharp';
import { promises as fsPromises } from 'fs';

const imageNotFoundPath = 'images/not_found.jpg';
const incorrectParamPath = 'images/incorrect_param.jpg';

const resizeImage = async (
	filename: string,
	width: string,
	height: string
): Promise<string> => {
	const inputPath = 'images/' + filename + '.jpg';
	let outputPath = 'thumbnail/' + filename + width + '&' + height + '.jpg';
	// check if resized image is found in thumbnail folder
	if (await exists(outputPath)) {
		return outputPath;
		// if image not found in thumbnail folder
		// check if the original image exists in the images folder
	} else if (await exists(inputPath)) {
		// resize image
		try {
			await sharp(inputPath)
				.resize(parseInt(width), parseInt(height))
				// save image in thumbnail folder
				.toFile(outputPath);
		} catch (error) {
			console.log(error);
			outputPath = incorrectParamPath;
		}
	} else {
		// assign output path to not found image
		outputPath = imageNotFoundPath;
	}
	return outputPath;
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
