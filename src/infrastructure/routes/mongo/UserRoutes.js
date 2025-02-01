const express = require('express')
const UsuarioController = require('../../controllers/mongo/UserController')

const router = express.Router();

router.get('/v2/getAllUsers', UsuarioController.getAll)
router.get('/v2/getUserById/:id', UsuarioController.getById)
router.post('/v2/createUsers', UsuarioController.create)
router.put('/v2/updateUsers/:id', UsuarioController.update)
router.delete('/v2/deleteUsers/:id', UsuarioController.delete)

module.exports = router;