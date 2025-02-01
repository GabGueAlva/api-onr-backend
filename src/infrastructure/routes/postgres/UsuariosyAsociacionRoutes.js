const express = require('express')
const UsuarioAsociacionController = require('../../controllers/postgres/UsuarioyAsociacionController')
const router = express.Router()

router.post('/relationUA/create', UsuarioAsociacionController.create)
router.get('/relationUA/getAll', UsuarioAsociacionController.getAll)
router.delete('/relationUA/delete/:usuarioId/:asociacionId', UsuarioAsociacionController.delete)

module.exports = router;