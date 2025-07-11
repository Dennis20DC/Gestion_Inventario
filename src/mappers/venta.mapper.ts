import { IVenta } from '../models/venta';
import { ventas } from '@prisma/client';

export const fromPrismaVenta = (venta: ventas) => {
  return {
    idVenta: venta.id_venta,
    idCliente: venta.id_cliente ?? null,
    fechaVenta: venta.fecha_venta,
    estadoAuditoria: venta.estado_auditoria
  };
};

export const toPrismaVenta = (venta: IVenta) => {
  return {
    id_cliente: venta.idCliente ?? null,
    
  };
};