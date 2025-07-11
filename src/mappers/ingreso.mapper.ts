import { Ingresos } from '../models/ingresos';
import { ingresos } from '@prisma/client';

export const fromPrismaIngreso = (ingreso: ingresos) => {
  return {
    idIngreso: ingreso.id_ingreso,
    idAlmacen: ingreso.id_almacen,
    cantidad: ingreso.cantidad,
    costoUnitario: ingreso.costo_unitario,
    costoTotal: ingreso.costo_total,
    fechaIngreso: ingreso.fecha_ingreso,
    estadoAuditoria: ingreso.estado_auditoria
  };
};

export const toPrismaIngreso = (ingreso: Ingresos) => {
  return {
    id_almacen: ingreso.idAlmacen,
    cantidad: ingreso.cantidad,
    costo_unitario: ingreso.costoUnitario,
    costo_total: ingreso.costoTotal,
    
  };
};