const express = require("express");
const router = express.Router();
const { Register } = require('../controllers/RegisterController');
const { validateRegister } = require('../utils/validators/auth');

router.post('/register', validateRegister, Register);

module.exports = router;
