import { IAlmacen } from '../models/almacen';
import { almacenes } from '@prisma/client';

export const fromPrismaAlmacen = (almacen: almacenes) => {
  return {
    idAlmacen: almacen.id_almacen,
    nombre: almacen.nombre,
    ubicacion: almacen.ubicacion ?? null,
    estadoAuditoria: almacen.estado_auditoria,
    fechaCreacion: almacen.fecha_creacion
  };
};

export const toPrismaAlmacen = (almacen: IAlmacen) => {
  return {
    id_almacen: almacen.idAlmacen,
    nombre: almacen.nombre,
    ubicacion: almacen.ubicacion ?? null,
    
  };
};