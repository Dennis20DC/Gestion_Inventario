import Joi from "joi";

export const almacenCrearSchema = Joi.object({
  nombre: Joi.string().max(100).required().messages({
    'any.required': 'El nombre del almacén es obligatorio.',
    'string.base': 'El nombre debe ser un texto.',
    'string.max': 'El nombre no debe exceder los 100 caracteres.'
  })
  // ubicacion: Joi.string().max(150).allow(null, '').messages({
  //   'string.base': 'La ubicación debe ser un texto.',
  //   'string.max': 'La ubicación no debe exceder los 150 caracteres.'
  // })
});
