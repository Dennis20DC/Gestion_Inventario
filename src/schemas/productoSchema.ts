import Joi from "joi";

export const productoCrearSchema = Joi.object({
  nombre: Joi.string().max(100).optional().messages({
    'any.required': 'El nombre del producto es obligatorio.',
    'string.base': 'Debe ser texto.',
    'string.max': 'No debe exceder los 100 caracteres.'
  }),
  // descripcion: Joi.string().max(200).allow(null, '').messages({
  //   'string.base': 'Debe ser texto.',
  //   'string.max': 'No debe exceder los 200 caracteres.'
  // }),
  precioUnitario: Joi.number().min(0).optional().messages({
    'any.required': 'El precio unitario es obligatorio.',
    'number.base': 'Debe ser un número.',
    'number.min': 'Debe ser mayor o igual a 0.'
  }),
  stock: Joi.number().integer().min(0).required().messages({
    'any.required': 'El stock es obligatorio.',
    'number.base': 'Debe ser un número entero.',
    'number.min': 'No puede ser negativo.'
  }),
  idCategoria: Joi.number().integer().optional().messages({
    'any.required': 'El ID de categoría es obligatorio.',
    'number.base': 'Debe ser un número entero.'
  }),
  idProveedor: Joi.number().integer().optional().messages({
    'any.required': 'El ID del proveedor es obligatorio.',
    'number.base': 'Debe ser un número entero.'
  }),
  idAlmacen: Joi.number().integer().optional().messages({
    'any.required': 'El ID del almacén es obligatorio.',
    'number.base': 'Debe ser un número entero.'
  })
});
