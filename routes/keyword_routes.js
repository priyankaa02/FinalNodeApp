var express = require('express');
var router = express.Router();
const config = require('../config.js');
let middleware = require('../middleware');

var keyword_controller = require('../controllers/keyword_controller');

router.post('/add_keyword', [middleware.checkToken,keyword_controller.saveKeyword]);
router.post('/search',[keyword_controller.search])
module.exports = router;
