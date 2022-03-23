'use strict';
var __importDefault =
	(this && this.__importDefault) ||
	function (mod) {
		return mod && mod.__esModule ? mod : { default: mod };
	};
Object.defineProperty(exports, '__esModule', { value: true });
var express_1 = __importDefault(require('express'));
var path_1 = __importDefault(require('path'));
// create router
var resizeImg = express_1.default.Router();
resizeImg.get('/', function (req, res) {
	console.log(req.query.width + 'resize');
	// if resized image not found in thumbnail folder
	// resize image
	// save image in thumbnail folder
	// send resized image to the browser
	res.sendFile(path_1.default.resolve('images/fjord.jpg'));
});
exports.default = resizeImg;
