const express = require('express')
const UsuarioController = require('../controllers/UserController')

const router = express.Router();

router.get('/getAllUsers', UsuarioController.getAll)
router.get('/getUserById/:id', UsuarioController.getById)
router.post('/createUsers', UsuarioController.create)
router.put('/updateUsers/:id', UsuarioController.update)
router.delete('/deleteUsers/:id', UsuarioController.delete)

module.exports = router;