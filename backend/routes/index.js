const express = require("express");
const router = express.Router();
const { Register } = require('../controllers/RegisterController');
const loginController = require('../controllers/LoginController');
const { validateRegister } = require('../utils/validators/auth');
const { validateLogin } = require('../utils/validators/auth');

router.post('/register', validateRegister, Register);
router.post('/login', validateLogin, loginController.login);

module.exports = router;
