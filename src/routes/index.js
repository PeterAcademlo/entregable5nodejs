const express = require('express');
const routerUser = require('./user.router');
const router = express.Router();

//colocar rutas aqui 
router.use('/users', routerUser)



module.exports = router;