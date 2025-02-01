const mongoose = require('mongoose');

const AsociacionSchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: String
})

module.exports = mongoose.model('Asociacion', AsociacionSchema)