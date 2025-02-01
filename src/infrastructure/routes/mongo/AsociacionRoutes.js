const express = require('express')
const AsociacionController = require('../../controllers/mongo/AsociacionController')

const router = express.Router();

router.get('/v2/getAllAssociation', AsociacionController.getAll)
router.get('/v2/getAssociationById/:id', AsociacionController.getById)
router.post('/v2/createAssociation', AsociacionController.create)
router.put('/v2/updateAssociation/:id', AsociacionController.update)
router.delete('/v2/deleteAssociation/:id', AsociacionController.delete)

module.exports = router;