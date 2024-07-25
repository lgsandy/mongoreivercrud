const express = require('express');
const timeLogRoutes = require('./timeLogRoutes');

const router = express.Router();

router.use('/timelog', timeLogRoutes);

module.exports = router;