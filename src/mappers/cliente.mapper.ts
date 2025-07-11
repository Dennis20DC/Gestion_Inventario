import { ICliente } from '../models/cliente';
import { clientes } from '@prisma/client';

export const fromPrismaCliente = (cliente: clientes) => {
  return {
    idCliente: cliente.id_cliente,
    nombre: cliente.nombre,
    telefono: cliente.telefono ?? null,
    correo: cliente.correo ?? null,
    direccion: cliente.direccion ?? null,
    estadoAuditoria: cliente.estado_auditoria,
    fechaCreacion: cliente.fecha_creacion
  };
};

export const toPrismaCliente = (cliente: ICliente) => {
  return {
    id_cliente: cliente.idCliente,
    nombre: cliente.nombre,
    telefono: cliente.telefono ?? null,
    correo: cliente.correo ?? null,
    direccion: cliente.direccion ?? null,
    
  };
};