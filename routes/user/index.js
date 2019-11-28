var express = require('express');
var router = express.Router();

const {users, logout, register, authentication} = require('./controller');

router.get('/', users);
router.get('/logout', logout);
router.post('/authentication', authentication);
router.post('/register', register);

module.exports = router;