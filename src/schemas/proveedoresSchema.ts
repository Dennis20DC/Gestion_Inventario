import Joi from "joi";

export const proveedorCrearSchema = Joi.object({
  nombre: Joi.string().max(100).required().messages({
    'any.required': 'El nombre del proveedor es obligatorio.',
    'string.base': 'Debe ser texto.',
    'string.max': 'No debe exceder los 100 caracteres.'
  }),
  ruc: Joi.string().max(20).required().messages({
    'any.required': 'El RUC es obligatorio.',
    'string.base': 'Debe ser texto.',
    'string.max': 'No debe exceder los 20 caracteres.'
  })
});
