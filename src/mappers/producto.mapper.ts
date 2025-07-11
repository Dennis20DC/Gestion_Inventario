import { IProductos } from '../models/producto';
import { productos } from '@prisma/client';

export const fromPrismaProducto = (producto: productos) => {
  return {
    idProducto: producto.id_producto,
    nombre: producto.nombre,
    descripcion: producto.descripcion ?? null,
    precioUnitario: producto.precio_unitario,
    stock: producto.stock,
    idCategoria: producto.id_categoria,
    idProveedor: producto.id_proveedor,
    idAlmacen: producto.id_almacen,
    estadoAuditoria: producto.estado_auditoria,
    fechaCreacion: producto.fecha_creacion
  };
};

export const toPrismaProducto = (producto: IProductos) => {
  return {
    nombre: producto.nombre,
    descripcion: producto.descripcion ?? null,
    precio_unitario: producto.precioUnitario,
    stock: producto.stock,
    id_categoria: producto.idCategoria,
    id_proveedor: producto.idProveedor,
    id_almacen: producto.idAlmacen,
    
  };
};