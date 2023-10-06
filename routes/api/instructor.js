const path = require('path');
const express = require('express');

const InstructorController = require(path.join(__dirname, '..', '..', 'controllers', 'instructorController.js'));
const router = express.Router();


router.route('/instructor')
    .get(InstructorController.getAllInstructors)
    .post(InstructorController.createNewInstructor)
    .put(InstructorController.updateInstructor)
    .delete(InstructorController.deleteInstructor);

router.route('/instructor/:id').get(InstructorController.getInstructor);

module.exports = router;