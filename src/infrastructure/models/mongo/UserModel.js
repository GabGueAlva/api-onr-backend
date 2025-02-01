const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    names: String,
    lastNames: String,
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    associations: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Asociacion' }],
    units: [{ 
        unit: { type: mongoose.Schema.Types.ObjectId, ref: 'Unidad' },
        role: { type: String, enum: ['owner', 'resident'], required: true }
    }]
})

module.exports = mongoose.model('User', UserSchema)
