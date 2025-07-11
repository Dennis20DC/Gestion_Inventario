

import {ICategoria} from '../models/categoria';
import { categorias, PrismaClient } from '@prisma/client';

export const fromPrismaCategoria = (categoria: categorias) => {
return {
    idCategoria: categoria.id_categoria,
    nombre: categoria.nombre,
    descripcion: categoria.descripcion ?? null,
    estadoAuditoria: categoria.estado_auditoria,
    fechaCreacion: categoria.fecha_creacion
  };
}
export const toPrismaCategoria = (categoria: ICategoria) => {
  return {
    id_categoria: categoria.idCategoria,
    nombre: categoria.nombre,
    descripcion: categoria.descripcion ?? null,
    
  };
}
