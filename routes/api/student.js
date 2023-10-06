const path = require('path');
const express = require('express');

const StudentController = require(path.join(__dirname, '..', '..', 'controllers', 'studentController.js'));
const router = express.Router();


router.route('/student')
    .get(StudentController.getAllStudents)
    .post(StudentController.createNewStudent)
    .put(StudentController.updateStudent)
    .delete(StudentController.deleteStudent);

router.route('/student/:id').get(StudentController.getStudent);

module.exports = router;