import Joi from 'joi';

export const categoriasCrearSchema = Joi.object({
  nombre: Joi.string().max(100).required().messages({
      'any.required': 'El nombre del cliente es obligatorio.',
      'string.base': 'El nombre debe ser un texto.',
      'string.max': 'El nombre no debe exceder los 100 caracteres.'
    }),
    descripcion: Joi.string().max(255).optional().allow('', null).messages({
    'string.base': 'La descripción debe ser un texto.',
    'string.max': 'La descripción no debe exceder los 255 caracteres.'
  })
});