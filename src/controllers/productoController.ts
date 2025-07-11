import { Request, Response } from "express";
import * as productoService from "../services/productoService";
import { ResponseModel } from "../shared/responseModels";
import { STATUS_BAD_REQUEST, STATUS_INTERNAL_SERVER_ERROR } from "../shared/constants";
import { productoCrearSchema } from "../schemas/productoSchema";

export const listarProductos = async (req: Request, res: Response): Promise<any> => {
  console.log('productoController::listarProductos');
  try {
    const response = await productoService.listarProductos();
    res.json(ResponseModel.success(response));
  } catch (error: any) {
    console.error(error.message);
    res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
  }
}

export const obtenerProducto = async (req: Request, res: Response): Promise<any> => {
  console.log('productoController::obtenerProducto');
  try {
    const { id } = req.params;
    const response = await productoService.obtenerProducto(Number(id));
    res.json(ResponseModel.success(response));
  } catch (error: any) {
    console.error(error.message);
    res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
  }
}

export const insertarProducto = async (req: Request, res: Response): Promise<any> => {
  console.log('productoController::insertarProducto');
  const { error }: any = productoCrearSchema.validate(req.body);
  if (error) {
    return res.status(STATUS_BAD_REQUEST).json(ResponseModel.error(error.message, STATUS_BAD_REQUEST));
  }
  try {
    const response = await productoService.insertarProducto(req.body);
    res.json(ResponseModel.success(response));
  } catch (error: any) {
    console.error(error.message);
    res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
  }
}

export const modificarProducto = async (req: Request, res: Response): Promise<any> => {
  console.log('productoController::modificarProducto');
  try {
    const { id } = req.params;
    const response = await productoService.modificarProducto(Number(id), req.body);
    res.json(ResponseModel.success(response));
  } catch (error: any) {
    console.error(error.message);
    res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
  }
}

export const eliminarProducto = async (req: Request, res: Response): Promise<any> => {
  console.log('productoController::eliminarProducto');
  try {
    const { id } = req.params;
    const response = await productoService.eliminarProducto(Number(id));
    res.json(ResponseModel.success(response));
  } catch (error: any) {
    console.error(error.message);
    res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
  }
}
