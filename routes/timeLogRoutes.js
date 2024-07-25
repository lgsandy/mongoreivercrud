const express = require('express');
const timeLogController = require('../controllers/timeLogController');

const router = express.Router();

router.get('/', timeLogController.getTimeogs);
router.get('/only', timeLogController.getRequiredTlogs);


module.exports = router;
