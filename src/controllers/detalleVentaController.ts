import { Request, Response } from "express";
import * as detalleVentaService from "../services/detalleVentaService";
import { ResponseModel } from "../shared/responseModels";
import { STATUS_BAD_REQUEST, STATUS_INTERNAL_SERVER_ERROR } from "../shared/constants";
import { detalleVentaCrearSchema } from "../schemas/detalleVentaSchema";

export const listarDetalleVentas = async (req: Request, res: Response): Promise<any> => {
  console.log('detalleVentaController::listarDetalleVentas');
  try {
    const response = await detalleVentaService.listarDetalleVentas();
    res.json(ResponseModel.success(response));
  } catch (error: any) {
    console.error(error.message);
    res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
  }
}

export const obtenerDetalleVenta = async (req: Request, res: Response): Promise<any> => {
  console.log('detalleVentaController::obtenerDetalleVenta');
  try {
    const { id } = req.params;
    const response = await detalleVentaService.obtenerDetalleVenta(Number(id));
    res.json(ResponseModel.success(response));
  } catch (error: any) {
    console.error(error.message);
    res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
  }
}

export const insertarDetalleVenta = async (req: Request, res: Response): Promise<any> => {
  console.log('detalleVentaController::insertarDetalleVenta');
  const { error }: any = detalleVentaCrearSchema.validate(req.body);
  if (error) {
    return res.status(STATUS_BAD_REQUEST).json(ResponseModel.error(error.message, STATUS_BAD_REQUEST));
  }
  try {
    const response = await detalleVentaService.insertarDetalleVenta(req.body);
    res.json(ResponseModel.success(response));
  } catch (error: any) {
    console.error(error.message);
    res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
  }
}

export const modificarDetalleVenta = async (req: Request, res: Response): Promise<any> => {
  console.log('detalleVentaController::modificarDetalleVenta');
  try {
    const { id } = req.params;
    const response = await detalleVentaService.modificarDetalleVenta(Number(id), req.body);
    res.json(ResponseModel.success(response));
  } catch (error: any) {
    console.error(error.message);
    res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
  }
}

export const eliminarDetalleVenta = async (req: Request, res: Response): Promise<any> => {
  console.log('detalleVentaController::eliminarDetalleVenta');
  try {
    const { id } = req.params;
    const response = await detalleVentaService.eliminarDetalleVenta(Number(id));
    res.json(ResponseModel.success(response));
  } catch (error: any) {
    console.error(error.message);
    res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
  }
}
