import Joi from "joi";

export const clienteCrearSchema = Joi.object({
  nombre: Joi.string().max(100).required().messages({
    'any.required': 'El nombre del cliente es obligatorio.',
    'string.base': 'El nombre debe ser un texto.',
    'string.max': 'El nombre no debe exceder los 100 caracteres.'
  })
  // telefono: Joi.string().max(20).allow(null, '').messages({
  //   'string.base': 'El teléfono debe ser un texto.',
  //   'string.max': 'El teléfono no debe exceder los 20 caracteres.'
  // }),
  // correo: Joi.string().email().max(100).allow(null, '').messages({
  //   'string.email': 'Debe ser un correo electrónico válido.',
  //   'string.max': 'El correo no debe exceder los 100 caracteres.'
  // }),
  // direccion: Joi.string().max(150).allow(null, '').messages({
  //   'string.base': 'La dirección debe ser un texto.',
  //   'string.max': 'La dirección no debe exceder los 150 caracteres.'
  // })
});
