const mongoose = require('mongoose');
const UserService = require('../../../application/services/mongo/UserService')
const Asociacion = require('../../models/mongo/AsociacionModel')
const Unidad = require('../../models/mongo/UnidadModel')
const { body, validationResult } = require('express-validator')
const hashPassword = require('../../middlewares')

class UsuarioController {

  async create(req, res) {

    const { associations, units } = req.body;

    await body('names').notEmpty().withMessage('El nombre es obligatorio').matches(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/).withMessage('El nombre solo puede contener letras').run(req)
    await body('lastNames').notEmpty().withMessage('El apellido es obligatorio').matches(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/).withMessage('El apellido solo puede contener letras').run(req)
    await body('email').isEmail().withMessage('Debe ser un email válido').run(req)
    await body('password').notEmpty().withMessage('La contraseña es obligatoria').run(req)
    const errors = validationResult(req)

    await hashPassword(req, res, () => {})
    
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    if (associations && associations.length > 0) {
      for (let associationId of associations) {
          if (!mongoose.Types.ObjectId.isValid(associationId)) {
              return res.status(400).json({ message: `ID de asociación inválido: ${associationId}` })
          }

          const associationExists = await Asociacion.findById(associationId);
          if (!associationExists) {
              return res.status(404).json({ message: `La asociación con ID ${associationId} no existe` })
          }
      }
  }

  if (units && units.length > 0) {
      for (let unit of units) {
          if (!mongoose.Types.ObjectId.isValid(unit.unit)) {
              return res.status(400).json({ message: `ID de unidad inválido: ${unit.unit}` })
          }

          const unitExists = await Unidad.findById(unit.unit);
          if (!unitExists) {
              return res.status(404).json({ message: `La unidad con ID ${unit.unit} no existe` })
          }
      }
  }


     try {
        const usuario = await UserService.createUser(req.body);
        res.status(201).json(usuario);
    } catch (error) {
      console.log(error)
        res.status(500).json({ message: 'Error al crear el usuario', error })
    }
  }


  async getAll(req, res) {
    try {
        const usuarios = await UserService.getUsers();
        res.status(200).json(usuarios);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los usuarios', error });
    }
  }

  async getById(req, res) {
    const { id } = req.params

    try {
    
        const usuario = await UserService.getUserById(id)

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
    const { associations, units } = req.body;

    await body('names').optional().matches(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/).withMessage('El nombre solo puede contener letras').run(req)
    await body('lastNames').optional().matches(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/).withMessage('El apellido solo puede contener letras').run(req)
    await body('email').optional().isEmail().withMessage('Debe ser un email válido').run(req)
    await body('password').optional().notEmpty().withMessage('La contraseña es obligatoria').run(req)

    const errors = validationResult(req)

    await hashPassword(req, res, () => {});

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    if (associations && associations.length > 0) {
        for (let associationId of associations) {
            if (!mongoose.Types.ObjectId.isValid(associationId)) {
                return res.status(400).json({ message: `ID de asociación inválido: ${associationId}` })
            }
        }
    }

    if (units && units.length > 0) {
        for (let unit of units) {
            if (!mongoose.Types.ObjectId.isValid(unit.unit)) {
                return res.status(400).json({ message: `ID de unidad inválido: ${unit.unit}` })
            }
        }
    }

    try {
        const usuario = await UserService.updateUser(id, req.body)
        if (!usuario) {
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
        const result = await UserService.deleteUser(id)
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