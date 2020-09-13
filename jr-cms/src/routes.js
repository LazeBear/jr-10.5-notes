const express = require('express');

const studentRoute = require('./routes/students');
const courseRoute = require('./routes/courses');
const userRoute = require('./routes/users');
const authRoute = require('./routes/auth');

const authGuard = require('./middleware/authGuard');

const router = express.Router();

router.use('/students', authGuard, studentRoute);
router.use('/courses', courseRoute);
router.use('/users', userRoute);
router.use('/auth', authRoute);

module.exports = router;
