
# Image Processing API

## Overview
An image processing API to resize an image using Node.js and Sharp. 

## Description
To resize an image visit 'http://localhost:3000/api/resize?filename=your_filename&width=width_you_want&height=height_you_want'. The API resizes the image using the sharp module, saves it to disk in thumbnail folder, and display it in the browser with the size set via URL parameters. If the same image is accessed later the API retrieves it from the disk.

## Usage
To start the server run the `npm run start` command from the terminal. Then visit 'http://localhost:3000/api/resize?filename=your_filename&width=width_you_want&height=height_you_want' from your browser.
### Other Commands
- prettier: `npm run prettier`
- eslint: `npm run lint`
- build: `npm run build`
- build then test: `npm run test`


## Resources

- ['ts-node' is not recognized as an internal or external command, operable program or batch file](https://stackoverflow.com/questions/44764004/ts-node-is-not-recognized-as-an-internal-or-external-command-operable-program)

- [Configuring nodemon with TypeScript](https://blog.logrocket.com/configuring-nodemon-with-typescript/)

- [node.js TypeError: path must be absolute or specify root to res.sendFile "failed to parse JSON"](https://stackoverflow.com/questions/26079611/node-js-typeerror-path-must-be-absolute-or-specify-root-to-res-sendfile-failed)

- [How to check if a file exists in Node.js](https://flaviocopes.com/how-to-check-if-file-exists-node/)

- [Linting in TypeScript using ESLint and Prettier](https://blog.logrocket.com/linting-typescript-using-eslint-and-prettier/)

- [Node.js Image Optimization with sharp in 5 minutes!](https://www.youtube.com/watch?v=2uqdstsb8WI)

## Author
- Shorouk Elkhateeb
