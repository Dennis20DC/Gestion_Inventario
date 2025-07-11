import { Request, Response } from "express";
import * as almacenesService from "../services/almacenService";
import { ResponseModel } from "../shared/responseModels";
import { STATUS_BAD_REQUEST, STATUS_INTERNAL_SERVER_ERROR } from "../shared/constants";
import { almacenCrearSchema } from '../schemas/almacenSchema';
 
export const listarAlmacenes = async (req: Request, res: Response): Promise<any> => {
  console.log('almacenController::listarAlmacenes');
  try {
    const response = await almacenesService.listarAlmacenes();
    res.json(ResponseModel.success(response));
  } catch (error: any) {
    console.error(error.message);
    res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
  }
}
 
export const obtenerAlmacen = async (req: Request, res: Response): Promise<any> => {
  console.log('almacenController::obtenerAlmacen');
  try {
    const { id } = req.params;
    const response = await almacenesService.obtenerAlmacen(Number(id));
    res.json(ResponseModel.success(response));
  } catch (error: any) {
    console.error(error.message);
    res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
  }
}
 
export const insertarAlmacen = async (req: Request, res: Response): Promise<any> => {
  console.log('almacenController::insertarAlmacen');
  const { error }: any = almacenCrearSchema.validate(req.body);
  if (error) {
    return res.status(STATUS_BAD_REQUEST).json(ResponseModel.error(error.message, STATUS_BAD_REQUEST));
  }
  try {
    const response = await almacenesService.insertarAlmacen(req.body);
    res.json(ResponseModel.success(response));
  } catch (error: any) {
    console.error(error.message);
    res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
  }
}
 
export const modificarAlmacen = async (req: Request, res: Response): Promise<any> => {
  console.log('almacenController::modificarAlmacen');
  try {
    const { id } = req.params;
    const response = await almacenesService.modificarAlmacen(Number(id), req.body);
    res.json(ResponseModel.success(response));
  } catch (error: any) {
    console.error(error.message);
    res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
  }
}
 
export const eliminarAlmacen = async (req: Request, res: Response): Promise<any> => {
  console.log('almacenController::eliminarAlmacen');
  try {
    const { id } = req.params;
    const response = await almacenesService.eliminarAlmacen(Number(id));
    res.json(ResponseModel.success(response));
  } catch (error: any) {
    console.error(error.message);
    res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
  }
}
 