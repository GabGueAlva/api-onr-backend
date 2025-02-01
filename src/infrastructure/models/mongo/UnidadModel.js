const mongoose = require('mongoose');

const UnidadSchema = new mongoose.Schema({
    name: { type: String, required: true },
    association: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Asociacion', 
        required: true,
    },
    owners: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    residents: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
})

module.exports = mongoose.model('Unidad', UnidadSchema)