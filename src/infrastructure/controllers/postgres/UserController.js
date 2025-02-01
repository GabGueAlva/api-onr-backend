const { body, validationResult } = require('express-validator')
const UsuarioService = require('../../../application/services/postgres/UserService')

class UsuarioController {

  async create(req, res) {

    await body('names').notEmpty().withMessage('El nombre es obligatorio').matches(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/).withMessage('El nombre solo puede contener letras').run(req)
    await body('lastNames').notEmpty().withMessage('El apellido es obligatorio').matches(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/).withMessage('El apellido solo puede contener letras').run(req)
    await body('email').isEmail().withMessage('Debe ser un email válido').run(req)
    await body('password').notEmpty().withMessage('La contraseña es obligatoria').run(req)
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

     try {
        const usuario = await UsuarioService.createUsuario(req.body)
        res.status(201).json(usuario);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el usuario', error })
    }
  }


  async getAll(req, res) {
    try {
        const usuarios = await UsuarioService.getUsuarios();
        res.status(200).json(usuarios);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los usuarios', error });
    }
  }

  async getById(req, res) {
      const { id } = req.params

      try {
          const usuario = await UsuarioService.getUsuarioById(id)

          if (!usuario) {
            return res.status(404).json({ message: 'Usuario no encontrado' })
          }
          res.status(200).json(usuario);  
      } catch (error) {
          console.log(error)
          res.status(500).json({ message: 'Error al obtener el usuario', error })
      }
    }

  async update(req, res) {

    const { id } = req.params;
    const { names, lastNames, email, password } = req.body;

    await body('names').optional().matches(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/).withMessage('El nombre solo puede contener letras').run(req)
    await body('lastNames').optional().matches(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/).withMessage('El apellido solo puede contener letras').run(req)
    await body('email').optional().isEmail().withMessage('Debe ser un email válido').run(req)
    await body('password').optional().notEmpty().withMessage('La contraseña es obligatoria').run(req)

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    try {
      const usuario = await UsuarioService.updateUsuario(id, { names, lastNames, email, password })
      if (!usuario[0]) {
        return res.status(404).json({ message: 'Usuario no encontrado para actualizar' })
      }
      res.status(200).json({ message: 'Usuario actualizado exitosamente' })
    } catch (error) {
      console.log(error)
      res.status(500).json({ message: 'Error al actualizar el usuario', error })
    }
  }

  async delete(req, res) {
    const { id } = req.params
    try {
      const result = await UsuarioService.deleteUsuario(id)
      if (!result) {
        return res.status(404).json({ message: 'Usuario no encontrado para eliminar' })
      }
      res.status(200).json({ message: 'Usuario eliminado exitosamente' })
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar el usuario', error })
    }
  }

}

module.exports = new UsuarioController();