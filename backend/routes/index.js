const express = require('express')
const router = express.Router();
const verifyToken = require('../middlewares/auth');
const registerController = require('../controllers/RegisterController');
const loginController = require('../controllers/LoginController');
const userController = require('../controllers/UserController');
const { validateRegister, validateLogin } = require('../utils/validators/auth');
const { validatorUser } = require('../utils/validators/user');


//define route for register
router.post('/register', validateRegister, registerController.register);

//define route for login
router.post('/login', validateLogin, loginController.login);

//define route for user
router.get('/admin/users', verifyToken, userController.findUsers);

//define route for user create
router.post('/admin/users', verifyToken, validatorUser, userController.createUser);

//define route for user by id
router.get('/admin/users/:id', verifyToken, userController.findUserById);

//define route for user update
router.put('/admin/users/:id', verifyToken, validatorUser, userController.updateUser);

//define route for user delete
router.delete('/admin/users/:id', verifyToken, userController.deleteUser);

//export router
module.exports = router