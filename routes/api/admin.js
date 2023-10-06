const path = require('path');
const express = require('express');

const AdminController = require(path.join(__dirname, '..', '..', 'controllers', 'adminController.js'));
const router = express.Router();


router.route('/admin')
    .get(AdminController.getAllAdmins)
    .post(AdminController.createNewAdmin)
    .put(AdminController.updateAdmin)
    .delete(AdminController.deleteAdmin);

router.route('/admin/:id').get(AdminController.getAdmin);

module.exports = router;