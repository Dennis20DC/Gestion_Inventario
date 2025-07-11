import { Request, Response } from "express";

import * as proveedoresService from "../services/proveedorService";

import { ResponseModel } from "../shared/responseModels";

import { STATUS_BAD_REQUEST, STATUS_INTERNAL_SERVER_ERROR } from "../shared/constants";

import { proveedorCrearSchema } from "../schemas/proveedoresSchema";
 
export const listarProveedores = async (req: Request, res: Response): Promise<any> => {

  console.log("proveedorController::listarProveedores");

  try {

    const response = await proveedoresService.listarProveedores();

    res.json(ResponseModel.success(response));

  } catch (error: any) {

    console.error(error.message);

    res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));

  }

};
 
export const obtenerProveedor = async (req: Request, res: Response): Promise<any> => {

  console.log("proveedorController::obtenerProveedor");

  try {

    const { id } = req.params;

    const response = await proveedoresService.obtenerProveedor(Number(id));

    res.json(ResponseModel.success(response));

  } catch (error: any) {

    console.error(error.message);

    res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));

  }

};
 
export const insertarProveedor = async (req: Request, res: Response): Promise<any> => {

  console.log("proveedorController::insertarProveedor");

  const { error }: any = proveedorCrearSchema.validate(req.body);

  if (error) {

    return res.status(STATUS_BAD_REQUEST).json(ResponseModel.error(error.message, STATUS_BAD_REQUEST));

  }

  try {

    const response = await proveedoresService.insertarProveedor(req.body);

    res.json(ResponseModel.success(response));

  } catch (error: any) {

    console.error(error.message);

    res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));

  }

};
 
export const modificarProveedor = async (req: Request, res: Response): Promise<any> => {

  console.log("proveedorController::modificarProveedor");

  try {

    const { id } = req.params;

    const response = await proveedoresService.modificarProveedor(Number(id), req.body);

    res.json(ResponseModel.success(response));

  } catch (error: any) {

    console.error(error.message);

    res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));

  }

};
 
export const eliminarProveedor = async (req: Request, res: Response): Promise<any> => {

  console.log("proveedorController::eliminarProveedor");

  try {

    const { id } = req.params;

    const response = await proveedoresService.eliminarProveedor(Number(id));

    res.json(ResponseModel.success(response));

  } catch (error: any) {

    console.error(error.message);

    res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));

  }

};

 