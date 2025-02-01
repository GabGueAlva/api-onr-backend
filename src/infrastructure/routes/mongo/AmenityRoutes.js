const express = require('express')
const AmenityController = require('../../controllers/mongo/AmenityController')

const router = express.Router();

router.get('/v2/getAllAmenity', AmenityController.getAll)
router.get('/v2/getAmenityById/:id', AmenityController.getById)
router.post('/v2/createAmenity', AmenityController.create)
router.put('/v2/updateAmenity/:id', AmenityController.update)
router.delete('/v2/deleteAmenity/:id', AmenityController.delete)

module.exports = router;