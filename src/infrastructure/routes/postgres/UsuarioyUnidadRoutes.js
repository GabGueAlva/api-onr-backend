const express = require('express')
const UsuarioUnidadController = require('../../controllers/postgres/UsuarioyUnitController')
const router = express.Router()

router.post('/relationUU/create', UsuarioUnidadController.create)
router.get('/relationUU/getAll', UsuarioUnidadController.getAll)
router.delete('/relationUU/delete/:usuarioId/:unidadId', UsuarioUnidadController.delete)

module.exports = router;