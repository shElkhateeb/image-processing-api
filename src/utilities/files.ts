import { promises as fsPromises } from 'fs';

// function to check if a file exists
async function exists(path: string): Promise<boolean> {
	try {
		await fsPromises.access(path);
		return true;
	} catch {
		return false;
	}
}

export default exists;
