import Joi from "joi";

export const detalleVentaCrearSchema = Joi.object({
  idVenta: Joi.number().integer().required().messages({
    'any.required': 'El ID de la venta es obligatorio.',
    'number.base': 'Debe ser un número entero.'
  }),
  idProducto: Joi.number().integer().required().messages({
    'any.required': 'El ID del producto es obligatorio.',
    'number.base': 'Debe ser un número entero.'
  }),
  cantidad: Joi.number().integer().min(1).required().messages({
    'any.required': 'La cantidad es obligatoria.',
    'number.base': 'Debe ser un número.',
    'number.min': 'La cantidad debe ser mayor que 0.'
  }),
  precioUnitario: Joi.number().min(0).required().messages({
    'any.required': 'El precio unitario es obligatorio.',
    'number.base': 'Debe ser un número.',
    'number.min': 'Debe ser un número mayor o igual a 0.'
  }),
  costoTotal: Joi.number().min(0).required().messages({
    'any.required': 'El costo total es obligatorio.',
    'number.base': 'Debe ser un número.',
    'number.min': 'Debe ser un número mayor o igual a 0.'
  })
});
