var express = require('express')
var router = express.Router()

var multer  = require('multer')
var upload = multer({ dest: './public/uploads/' })


var controller=require('../controllers/user.controller');

var middleware=require('../middlewares/auth.middlewares');



router.get('/',middleware.checkLogin, controller.index);
router.get('/search',controller.search);

router.get('/create', controller.create)

router.get('/:id', controller.viewUser)

router.post('/create', upload.single('avatar'), controller.postCreate)

module.exports=router;