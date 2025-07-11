import Joi from "joi";

export const ventaCrearSchema = Joi.object({
  id_cliente: Joi.number().integer().required().messages({
    'any.required': 'El ID del cliente es obligatorio.',
    'number.base': 'Debe ser un número entero.'
  })
  // fecha_venta: Joi.date().iso().messages({
  //   'date.base': 'Debe ser una fecha válida.',
  //   'date.format': 'Debe estar en formato ISO (YYYY-MM-DD).'
  // })
});
