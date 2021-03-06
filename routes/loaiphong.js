var loaiphongController = require('../controllers/loaiphong.controller');
var express = require('express');
var router = express.Router();
const authMiddleware = require('../middleware/auth.midddleware');
router.get('/list',authMiddleware.LoginRequire, loaiphongController.getListLP);
router.get('/add',authMiddleware.LoginRequire, loaiphongController.getAddLP);
router.post('/add',authMiddleware.LoginRequire, loaiphongController.postAddLP);
router.get('/edit:id',authMiddleware.LoginRequire, loaiphongController.getEditLP);
router.post('/edit:id',authMiddleware.LoginRequire, loaiphongController.postEditLP);
router.get('/delete:id',authMiddleware.LoginRequire, loaiphongController.getDeleteLP);
router.post('/delete:id',authMiddleware.LoginRequire, loaiphongController.postDeleteLP);
module.exports = router;