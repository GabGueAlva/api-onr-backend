const express = require('express')
const UnitController = require('../../controllers/mongo/UnitController')

const router = express.Router();

router.get('/v2/getAllUnit', UnitController.getAll)
router.get('/v2/getUnitById/:id', UnitController.getById)
router.post('/v2/createUnit', UnitController.create)
router.put('/v2/updateUnit/:id', UnitController.update)
router.delete('/v2/deleteUnit/:id', UnitController.delete)

module.exports = router;