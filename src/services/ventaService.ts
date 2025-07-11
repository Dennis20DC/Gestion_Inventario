import { PrismaClient } from "@prisma/client";
import { IVenta } from "../models/venta";
import { RESPONSE_INSERT_OK, RESPONSE_UPDATE_OK } from "../shared/constants";
 import { toPrismaVenta } from "../mappers/venta.mapper";

const prisma = new PrismaClient();
 
export const listarVentas = async () => {
  console.log("ventaService::listarVentas");
  return await prisma.ventas.findMany({
    where: {
      estado_auditoria: '1'
    },
    orderBy: {
      id_venta: 'asc'
    }
  });
};
 
export const obtenerVenta = async (id: number) => {
  console.log("ventaService::obtenerVenta");
  return await prisma.ventas.findUnique({
    where: {
      id_venta: id
    }
  });
};
 
export const insertarVenta = async (venta: IVenta) => {
  console.log("ventaService::insertarVenta");
  await prisma.ventas.create({
    data: toPrismaVenta(venta)
  });
  return RESPONSE_INSERT_OK;
};
 
export const modificarVenta = async (id: number, venta: IVenta) => {
  console.log("ventaService::modificarVenta");
  const actualizado: IVenta = {...venta}
  await prisma.ventas.update({
    where: {
      id_venta: id
    },
    data: toPrismaVenta(actualizado)
  });
  return RESPONSE_UPDATE_OK;
};
 
export const eliminarVenta = async (id: number) => {
  console.log("ventaService::eliminarVenta");
  await prisma.ventas.update({
    where: {
      id_venta: id
    },
    data: {
      estado_auditoria: '0'
    }
  });
  return RESPONSE_UPDATE_OK;
};