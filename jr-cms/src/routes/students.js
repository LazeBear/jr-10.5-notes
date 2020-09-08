const express = require('express');

const {
  getAllStudent,
  getStudent,
  addStudent,
  deleteStudent,
  updateStudent,
  addCourse,
  removeCourse
} = require('../controllers/students');

const router = express.Router();

router.get('/', getAllStudent);
router.get('/:id', getStudent);
router.post('/', addStudent);
router.put('/:id', updateStudent);
router.delete('/:id', deleteStudent);

// PUT
router.post('/:id/courses/:code', addCourse);
router.delete('/:id/courses/:code', removeCourse);

module.exports = router;
