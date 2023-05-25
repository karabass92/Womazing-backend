const Router = require('express');
const router = Router();
const feedBackController = require('../controllers/feedBackController');


router.post('/', feedBackController.create);


module.exports = router;