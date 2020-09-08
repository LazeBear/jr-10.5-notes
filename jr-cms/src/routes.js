const express = require('express');

const studentRoute = require('./routes/students');
const courseRoute = require('./routes/courses');

const router = express.Router();

router.use('/students', studentRoute);
router.use('/courses', courseRoute);

module.exports = router;
