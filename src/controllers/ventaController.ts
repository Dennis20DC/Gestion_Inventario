import { Request, Response } from "express";
import * as ventaService from "../services/ventaService";
import { ResponseModel } from "../shared/responseModels";
import { STATUS_BAD_REQUEST, STATUS_INTERNAL_SERVER_ERROR } from "../shared/constants";
import { ventaCrearSchema } from "../schemas/ventaSchema";

export const listarVentas = async (req: Request, res: Response): Promise<any> => {
  console.log('ventaController::listarVentas');
  try {
    const response = await ventaService.listarVentas();
    res.json(ResponseModel.success(response));
  } catch (error: any) {
    console.error(error.message);
    res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
  }
}

export const obtenerVenta = async (req: Request, res: Response): Promise<any> => {
  console.log('ventaController::obtenerVenta');
  try {
    const { id } = req.params;
    const response = await ventaService.obtenerVenta(Number(id));
    res.json(ResponseModel.success(response));
  } catch (error: any) {
    console.error(error.message);
    res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
  }
}

export const insertarVenta = async (req: Request, res: Response): Promise<any> => {
  console.log('ventaController::insertarVenta');
  const { error }: any = ventaCrearSchema.validate(req.body);
  if (error) {
    return res.status(STATUS_BAD_REQUEST).json(ResponseModel.error(error.message, STATUS_BAD_REQUEST));
  }
  try {
    const response = await ventaService.insertarVenta(req.body);
    res.json(ResponseModel.success(response));
  } catch (error: any) {
    console.error(error.message);
    res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
  }
}

export const modificarVenta = async (req: Request, res: Response): Promise<any> => {
  console.log('ventaController::modificarVenta');
  try {
    const { id } = req.params;
    const response = await ventaService.modificarVenta(Number(id), req.body);
    res.json(ResponseModel.success(response));
  } catch (error: any) {
    console.error(error.message);
    res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
  }
}

export const eliminarVenta = async (req: Request, res: Response): Promise<any> => {
  console.log('ventaController::eliminarVenta');
  try {
    const { id } = req.params;
    const response = await ventaService.eliminarVenta(Number(id));
    res.json(ResponseModel.success(response));
  } catch (error: any) {
    console.error(error.message);
    res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
  }
}
