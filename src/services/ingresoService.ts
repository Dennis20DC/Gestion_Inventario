import { PrismaClient } from "@prisma/client";
import { Ingresos } from "../models/ingresos";
import { RESPONSE_INSERT_OK, RESPONSE_UPDATE_OK } from "../shared/constants";
 import { toPrismaIngreso } from "../mappers/ingreso.mapper";

const prisma = new PrismaClient();
 
export const listarIngresos = async () => {
  console.log("ingresoService::listarIngresos");
  return await prisma.ingresos.findMany({
    where: {
      estado_auditoria: '1'
    },
    orderBy: {
      id_ingreso: 'asc'
    }
  });
};
 
export const obtenerIngreso = async (id: number) => {
  console.log("ingresoService::obtenerIngreso");
  return await prisma.ingresos.findUnique({
    where: {
      id_ingreso: id
    }
  });
};
 
export const insertarIngreso = async (ingreso: Ingresos) => {
  console.log("ingresoService::insertarIngreso");
  await prisma.ingresos.create({
    data: toPrismaIngreso(ingreso)
  });
  return RESPONSE_INSERT_OK;
};
 
export const modificarIngreso = async (id: number, ingreso: Ingresos) => {
  console.log("ingresoService::modificarIngreso");
  const actualizado: Ingresos = {...ingreso}
  await prisma.ingresos.update({
    where: {
      id_ingreso: id
    },
    data: toPrismaIngreso(actualizado)
  });
  return RESPONSE_UPDATE_OK;
};
 
export const eliminarIngreso = async (id: number) => {
  console.log("ingresoService::eliminarIngreso");
  await prisma.ingresos.update({
    where: {
      id_ingreso: id
    },
    data: {
      estado_auditoria: '0'
    }
  });
  return RESPONSE_UPDATE_OK;
};