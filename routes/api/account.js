const path = require('path');
const express = require('express');

const accountController = require(path.join(__dirname, '..', '..', 'controllers', 'accountController.js'));
const router = express.Router();


router.route('/accounts')
    .get(accountController.getAccount);


module.exports = router;