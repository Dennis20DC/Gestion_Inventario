import { PrismaClient } from "@prisma/client";
import { IProveedores } from "../models/proveedores";
import { RESPONSE_INSERT_OK, RESPONSE_UPDATE_OK } from "../shared/constants";
 import { toPrismaProveedor } from "../mappers/proveedor.mapper";

const prisma = new PrismaClient();
 
export const listarProveedores = async () => {
  console.log("proveedoresService::listarProveedores");
  return await prisma.proveedores.findMany({
    where: {
      estado_auditoria: '1'
    },
    orderBy: {
      id_proveedor: 'asc'
    }
  });
};
 
export const obtenerProveedor = async (id: number) => {
  console.log("proveedoresService::obtenerProveedor");
  return await prisma.proveedores.findUnique({
    where: {
      id_proveedor: id
    }
  });
};
 
export const insertarProveedor = async (proveedor: IProveedores) => {
  console.log("proveedoresService::insertarProveedor");
  await prisma.proveedores.create({
    data: toPrismaProveedor(proveedor)
  });
  return RESPONSE_INSERT_OK;
};
 
export const modificarProveedor = async (id: number, proveedor: IProveedores) => {
  console.log("proveedoresService::modificarProveedor");
      const actualizado: IProveedores = {...proveedor}
  
  await prisma.proveedores.update({
    where: {
      id_proveedor: id
    },
    data: toPrismaProveedor(actualizado)
  });
  return RESPONSE_UPDATE_OK;
};
 
export const eliminarProveedor = async (id: number) => {
  console.log("proveedoresService::eliminarProveedor");
  await prisma.proveedores.update({
    where: {
      id_proveedor: id
    },
    data: {
      estado_auditoria: '0'
    }
  });
  return RESPONSE_UPDATE_OK;
};