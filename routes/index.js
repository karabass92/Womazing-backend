const Router = require('express');
const router = Router();
const productRouter = require('./productRouter');
const feedBackRouter = require('./feedBackRouter');


router.use('/product', productRouter);
router.use('/feedback', feedBackRouter);


module.exports = router;