
# Image Processing API

## Overview
This is a Node.js project to resize an image using Sharp.

## Description
To resize an image visit 'http://localhost:3000/api/resize?filename=your_filename&width=width_you_want&height=height_you_want'. The resized image is displayed in the browser with the size set via URL parameters. Rather than needing to resize and upload multiple copies of the same image to be used throughout your site, the API will handle resizing and serving stored images for you.

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

## Author
- Shorouk Elkhateeb
