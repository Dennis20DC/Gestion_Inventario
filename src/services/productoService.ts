import { PrismaClient } from "@prisma/client";
import { IProductos } from "../models/producto";
import { RESPONSE_INSERT_OK, RESPONSE_UPDATE_OK } from "../shared/constants";
 import { toPrismaProducto } from "../mappers/producto.mapper";

const prisma = new PrismaClient();
 
export const listarProductos = async () => {
  console.log("productoService::listarProductos");
  return await prisma.productos.findMany({
    where: {
      estado_auditoria: '1'
    },
    orderBy: {
      id_producto: 'asc'
    }
  });
};
 
export const obtenerProducto = async (id: number) => {
  console.log("productoService::obtenerProducto");
  return await prisma.productos.findUnique({
    where: {
      id_producto: id
    }
  });
};
 
export const insertarProducto = async (producto: IProductos) => {
  console.log("productoService::insertarProducto");
  await prisma.productos.create({
    data: toPrismaProducto(producto)
  });
  return RESPONSE_INSERT_OK;
};
 
export const modificarProducto = async (id: number, producto: IProductos) => {
  console.log("productoService::modificarProducto");
    const actualizado: IProductos = {...producto}
  
  await prisma.productos.update({
    where: {
      id_producto: id
    },
    data: toPrismaProducto(actualizado)
  });
  return RESPONSE_UPDATE_OK;
};
 
export const eliminarProducto = async (id: number) => {
  console.log("productoService::eliminarProducto");
  await prisma.productos.update({
    where: {
      id_producto: id
    },
    data: {
      estado_auditoria: '0'
    }
  });
  return RESPONSE_UPDATE_OK;
};