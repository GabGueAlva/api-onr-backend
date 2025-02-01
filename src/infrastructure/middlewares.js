const bcrypt = require('bcrypt');

const hashPassword = async (req, res, next) => {
    try {
        if (req.body.password) {
            const salt = await bcrypt.genSalt(10)
            req.body.password = await bcrypt.hash(req.body.password, salt)
        }
        next();
    } catch (error) {
        res.status(500).json({ message: 'Error al encriptar la contraseña', error })
    }
};

module.exports = hashPassword