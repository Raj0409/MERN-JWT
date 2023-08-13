const express = require('express');
const { getUser, createUser, updateUser, deleteUser, SearchUser, loginUser } = require('../controllers/userController');
const router = express.Router();
const {protect} = require('../middleware/authMiddlware')

router.post('/login',loginUser);

router.get('/getMe', protect, getUser)

router.post('/',createUser)

router.put('/:id',updateUser)

router.delete('/:id',deleteUser)

router.get('/:id',SearchUser)

module.exports = router