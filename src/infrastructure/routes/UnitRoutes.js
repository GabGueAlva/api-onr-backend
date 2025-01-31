const express = require('express')
const UnitController = require('../controllers/UnitController')

const router = express.Router();

router.get('/getAllUnit', UnitController.getAll)
router.get('/getUnitById/:id', UnitController.getById)
router.post('/createUnit', UnitController.create)
router.put('/updateUnit/:id', UnitController.update)
router.delete('/deleteUnit/:id', UnitController.delete)

module.exports = router;