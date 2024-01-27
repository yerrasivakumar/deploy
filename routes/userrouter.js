const express = require('express');
const userController = require('../controllers/usercontrollers');
const router = express.Router();


router.post('/userregistration', userController.UserRegistration);
router.post('/userLogin', userController.userLogin);
router.get('/userAll', userController.getAll);
router.get('/userOne/:id', userController.getoneUser);
module.exports = router;