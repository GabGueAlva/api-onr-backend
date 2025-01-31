const express = require('express')
const AsociacionController = require('../controllers/AsociacionController')

const router = express.Router();

router.get('/getAllAssociation', AsociacionController.getAll)
router.get('/getAssociationById/:id', AsociacionController.getById)
router.post('/createAssociation', AsociacionController.create)
router.put('/updateAssociation/:id', AsociacionController.update)
router.delete('/deleteAssociation/:id', AsociacionController.delete)

module.exports = router;