const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getUsers, registerSupportUser } = require('../controllers/userController');
const auth = require('../middlewares/auth');
const { isAdmin } = require('../middlewares/roles');

router.post('/register', registerUser);
router.post('/registerSupport', auth, isAdmin, registerSupportUser);
router.post('/login', loginUser);
router.get('/', auth, isAdmin, getUsers);

module.exports = router;

