
const router = require('express').Router();
const { QuotesController } = require('../controllers');

router.get('/', QuotesController.index);
router.get('/all', QuotesController.get);
router.post('/', QuotesController.add);

module.exports = router;