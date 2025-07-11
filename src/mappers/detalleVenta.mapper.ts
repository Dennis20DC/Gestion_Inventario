import { IDetalleVenta } from '../models/detalleVenta';
import { detalle_venta } from '@prisma/client';

export const fromPrismaDetalleVenta = (detalle: detalle_venta) => {
  return {
    idDetalleVenta: detalle.id_detalle_venta,
    idVenta: detalle.id_venta,
    idProducto: detalle.id_producto,
    cantidad: detalle.cantidad,
    precioUnitario: detalle.precio_unitario,
    costoTotal: detalle.costo_total,
    fechaIngreso: detalle.fecha_ingreso,
    estadoAuditoria: detalle.estado_auditoria
  };
};

export const toPrismaDetalleVenta = (detalle: IDetalleVenta) => {
  return {
    id_venta: detalle.idVenta,
    id_producto: detalle.idProducto,
    cantidad: detalle.cantidad,
    precio_unitario: detalle.precioUnitario,
    costo_total: detalle.costoTotal,
    
  };
};