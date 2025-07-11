import Joi from "joi";

export const ingresoCrearSchema = Joi.object({
  idAlmacen: Joi.number().integer().required().messages({
    'any.required': 'El ID del almacén es obligatorio.',
    'number.base': 'Debe ser un número entero.'
  }),
  cantidad: Joi.number().integer().min(1).required().messages({
    'any.required': 'La cantidad es obligatoria.',
    'number.base': 'Debe ser un número.',
    'number.min': 'La cantidad debe ser mayor que 0.'
  }),
  costoUnitario: Joi.number().min(0).required().messages({
    'any.required': 'El costo unitario es obligatorio.',
    'number.base': 'Debe ser un número.',
    'number.min': 'Debe ser mayor o igual a 0.'
  }),
  costoTotal: Joi.number().min(0).required().messages({
    'any.required': 'El costo total es obligatorio.',
    'number.base': 'Debe ser un número.',
    'number.min': 'Debe ser mayor o igual a 0.'
  })
});
