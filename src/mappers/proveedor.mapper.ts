import { IProveedores } from '../models/proveedores';
import { proveedores } from '@prisma/client';

export const fromPrismaProveedor = (proveedor: proveedores) => {
  return {
    idProveedor: proveedor.id_proveedor,
    nombre: proveedor.nombre,
    ruc: proveedor.ruc,
    direccion: proveedor.direccion ?? null,
    telefono: proveedor.telefono ?? null,
    correo: proveedor.correo ?? null,
    estadoAuditoria: proveedor.estado_auditoria,
    fechaCreacion: proveedor.fecha_creacion
  };
};

export const toPrismaProveedor = (proveedor: IProveedores) => {
  return {
    id_proveedor: proveedor.idProveedor,
    nombre: proveedor.nombre,
    ruc: proveedor.ruc,
    direccion: proveedor.direccion ?? null,
    telefono: proveedor.telefono ?? null,
    correo: proveedor.correo ?? null,
    
  };
};