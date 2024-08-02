const express = require('express');
const { loginUser,registerUser, currentUser } = require('../controllers/userController');
const router = express.Router();
const {validateToken}= require('../middlewares/validateToken')


router.post('/login',loginUser);
router.post('/register',registerUser);
router.get('/current',validateToken,currentUser);
module.exports = router;