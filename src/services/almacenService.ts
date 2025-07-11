import { PrismaClient } from "@prisma/client";
import { IAlmacen } from "../models/almacen";
import { RESPONSE_INSERT_OK, RESPONSE_UPDATE_OK } from "../shared/constants";
 import { toPrismaDetalleVenta } from "../mappers/detalleVenta.mapper";
 
const prisma = new PrismaClient();
 
export const listarAlmacenes = async () => {
  console.log("almacenService::listarAlmacenes");
  return await prisma.almacenes.findMany({
    where: {
      estado_auditoria: '1'
    },
    orderBy: {
      id_almacen: 'asc'
    }
  });
};
 
export const obtenerAlmacen = async (id: number) => {
  console.log("almacenService::obtenerAlmacen");
  return await prisma.almacenes.findUnique({
    where: {
      id_almacen: id
    }
  });
};
 
export const insertarAlmacen = async (almacen: IAlmacen) => {
  console.log("almacenService::insertarAlmacen");
  await prisma.almacenes.create({
    data: {
      nombre: almacen.nombre,
      ubicacion: almacen.ubicacion ?? null
    }
  });
  return RESPONSE_INSERT_OK;
};
 
export const modificarAlmacen = async (id: number, almacen: IAlmacen) => {
  console.log("almacenService::modificarAlmacen");
  await prisma.almacenes.update({
    where: {
      id_almacen: id
    },
    data: {
      nombre: almacen.nombre,
      ubicacion: almacen.ubicacion ?? null
    }
  });
  return RESPONSE_UPDATE_OK;
};
 
export const eliminarAlmacen = async (id: number) => {
  console.log("almacenService::eliminarAlmacen");
  await prisma.almacenes.update({
    where: {
      id_almacen: id
    },
    data: {
      estado_auditoria: '0'
    }
  });
  return RESPONSE_UPDATE_OK;
};