import { Request, Response } from "express";

import * as clienteService from "../services/clienteService";

import { ResponseModel } from "../shared/responseModels";

import { STATUS_BAD_REQUEST, STATUS_INTERNAL_SERVER_ERROR } from "../shared/constants";

import { clienteCrearSchema } from "../schemas/clienteSchema";
 
export const listarClientes = async (req: Request, res: Response): Promise<any> => {

  console.log("clienteController::listarClientes");

  try {

    const response = await clienteService.listarClientes();

    res.json(ResponseModel.success(response));

  } catch (error: any) {

    console.error(error.message);

    res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));

  }

};
 
export const obtenerCliente = async (req: Request, res: Response): Promise<any> => {

  console.log("clienteController::obtenerCliente");

  try {

    const { id } = req.params;

    const response = await clienteService.obtenerCliente(Number(id));

    res.json(ResponseModel.success(response));

  } catch (error: any) {

    console.error(error.message);

    res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));

  }

};
 
export const insertarCliente = async (req: Request, res: Response): Promise<any> => {

  console.log("clienteController::insertarCliente");

  const { error }: any = clienteCrearSchema.validate(req.body);

  if (error) {

    return res.status(STATUS_BAD_REQUEST).json(ResponseModel.error(error.message, STATUS_BAD_REQUEST));

  }

  try {

    const response = await clienteService.insertarCliente(req.body);

    res.json(ResponseModel.success(response));

  } catch (error: any) {

    console.error(error.message);

    res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));

  }

};
 
export const modificarCliente = async (req: Request, res: Response): Promise<any> => {

  console.log("clienteController::modificarCliente");

  try {

    const { id } = req.params;

    const response = await clienteService.modificarCliente(Number(id), req.body);

    res.json(ResponseModel.success(response));

  } catch (error: any) {

    console.error(error.message);

    res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));

  }

};
 
export const eliminarCliente = async (req: Request, res: Response): Promise<any> => {

  console.log("clienteController::eliminarCliente");

  try {

    const { id } = req.params;

    const response = await clienteService.eliminarCliente(Number(id));

    res.json(ResponseModel.success(response));

  } catch (error: any) {

    console.error(error.message);

    res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));

  }

};

 