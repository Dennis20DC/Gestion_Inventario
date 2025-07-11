import { PrismaClient } from "@prisma/client";
import { ICategoria } from "../models/categoria";
import { RESPONSE_INSERT_OK, RESPONSE_UPDATE_OK } from "../shared/constants";
import { toPrismaDetalleVenta } from "../mappers/detalleVenta.mapper";

const prisma = new PrismaClient();

export const listarCategorias = async () => {
  console.log('categoriasService::listarCategorias');
  return await prisma.categorias.findMany({
    where: {
      estado_auditoria: '1'
    },
    orderBy: {
      id_categoria: 'asc'
    }
  });
}

export const obtenerCategoria = async (id: number) => {
  console.log('categoriasService::obtenerCategorias');
  return await prisma.categorias.findUnique({
    where: {
      id_categoria: id
    }
  });
}

export const insertarCategoria = async (categorias: ICategoria) => {
  console.log('categoriasService::insertarCategorias');
  await prisma.categorias.create({
    data: categorias
    });
    return RESPONSE_INSERT_OK;
}

export const modificarCategoria = async (id: number, categorias: ICategoria) => {
  console.log('categoriasService::modificarCategorias');
  await prisma.categorias.update({
        where: {
id_categoria: id},
        data: {
            nombre: categorias.nombre
        }
    });
    return RESPONSE_UPDATE_OK;
}

export const eliminarCategoria = async (id: number) => {
  console.log('categoriasService::eliminarCategorias');
  await prisma.categorias.update({
    where: {
      id_categoria: id
    },
    data: {
      estado_auditoria: '0'
    }
  });

  return RESPONSE_INSERT_OK;
}
