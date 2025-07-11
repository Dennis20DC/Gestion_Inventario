import { Request, Response } from "express";
import * as ingresoService from "../services/ingresoService";
import { ResponseModel } from "../shared/responseModels";
import { STATUS_BAD_REQUEST, STATUS_INTERNAL_SERVER_ERROR } from "../shared/constants";
import { ingresoCrearSchema } from "../schemas/ingresoSchema";

export const listarIngresos = async (req: Request, res: Response): Promise<any> => {
  console.log('ingresoController::listarIngresos');
  try {
    const response = await ingresoService.listarIngresos();
    res.json(ResponseModel.success(response));
  } catch (error: any) {
    console.error(error.message);
    res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
  }
}

export const obtenerIngreso = async (req: Request, res: Response): Promise<any> => {
  console.log('ingresoController::obtenerIngreso');
  try {
    const { id } = req.params;
    const response = await ingresoService.obtenerIngreso(Number(id));
    res.json(ResponseModel.success(response));
  } catch (error: any) {
    console.error(error.message);
    res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
  }
}

export const insertarIngreso = async (req: Request, res: Response): Promise<any> => {
  console.log('ingresoController::insertarIngreso');
  const { error }: any = ingresoCrearSchema.validate(req.body);
  if (error) {
    return res.status(STATUS_BAD_REQUEST).json(ResponseModel.error(error.message, STATUS_BAD_REQUEST));
  }
  try {
    const response = await ingresoService.insertarIngreso(req.body);
    res.json(ResponseModel.success(response));
  } catch (error: any) {
    console.error(error.message);
    res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
  }
}

export const modificarIngreso = async (req: Request, res: Response): Promise<any> => {
  console.log('ingresoController::modificarIngreso');
  try {
    const { id } = req.params;
    const response = await ingresoService.modificarIngreso(Number(id), req.body);
    res.json(ResponseModel.success(response));
  } catch (error: any) {
    console.error(error.message);
    res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
  }
}

export const eliminarIngreso = async (req: Request, res: Response): Promise<any> => {
  console.log('ingresoController::eliminarIngreso');
  try {
    const { id } = req.params;
    const response = await ingresoService.eliminarIngreso(Number(id));
    res.json(ResponseModel.success(response));
  } catch (error: any) {
    console.error(error.message);
    res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
  }
}
