import { PrismaClient, detalle_venta } from '@prisma/client';
import { IDetalleVenta } from "../models/detalleVenta";
import { RESPONSE_INSERT_OK, RESPONSE_UPDATE_OK } from "../shared/constants";
import { toPrismaDetalleVenta } from "../mappers/detalleVenta.mapper";

 
const prisma = new PrismaClient();
 
export const listarDetalleVentas = async () => {

  console.log("detalleVentaService::listarDetalleVentas");

  return await prisma.detalle_venta.findMany({

    orderBy: {

      id_detalle_venta: 'asc'

    }

  });

};
 
export const obtenerDetalleVenta = async (id: number) => {

  console.log("detalleVentaService::obtenerDetalleVenta");

  return await prisma.detalle_venta.findUnique({

    where: {

      id_detalle_venta: id

    }

  });

};
 
export const insertarDetalleVenta = async (detalle: IDetalleVenta) => {

  console.log("detalleVentaService::insertarDetalleVenta");

  await prisma.detalle_venta.create({

    data:  toPrismaDetalleVenta(detalle)
  });

  return RESPONSE_INSERT_OK;

};
 
export const modificarDetalleVenta = async (id: number, detalle: IDetalleVenta) => {

  console.log("detalleVentaService::modificarDetalleVenta");
const actualizado: IDetalleVenta = {...detalle}
  await prisma.detalle_venta.update({

    where: { id_detalle_venta: id
    },
    data:toPrismaDetalleVenta(actualizado)
  });

  return RESPONSE_UPDATE_OK;

};
 
export const eliminarDetalleVenta = async (id: number) => {

  console.log("detalleVentaService::eliminarDetalleVenta");

  await prisma.detalle_venta.delete({

    where: {

      id_detalle_venta: id

    }

  });

  return RESPONSE_UPDATE_OK;

};

 