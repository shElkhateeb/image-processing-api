'use strict';
var __importDefault =
	(this && this.__importDefault) ||
	function (mod) {
		return mod && mod.__esModule ? mod : { default: mod };
	};
Object.defineProperty(exports, '__esModule', { value: true });
var express_1 = __importDefault(require('express'));
var path_1 = __importDefault(require('path'));
var resizeimage_1 = __importDefault(require('../../utilities/resizeimage'));
// create router
var resizeImg = express_1.default.Router();
resizeImg.get('/', function (req, res) {
	var filename = req.query.filename;
	var width = req.query.width;
	var height = req.query.height;
	var resizedImagePath = 'thumbnail/' + filename + width + '&' + height + '.jpg';
	// resize image
	(0, resizeimage_1.default)(filename, width, height, resizedImagePath);
	// send resized image to the browser
	res.sendFile(path_1.default.resolve(resizedImagePath));
});
exports.default = resizeImg;
