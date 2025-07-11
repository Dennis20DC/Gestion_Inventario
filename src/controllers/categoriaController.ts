import { Request, Response } from "express";
import * as categoriasService from "../services/categoriaService";
import { ResponseModel } from "../shared/responseModels";
import { STATUS_BAD_REQUEST, STATUS_INTERNAL_SERVER_ERROR } from "../shared/constants";
import { categoriasCrearSchema } from "../schemas/categoriasSchema";
 
export const listarCategorias = async (req: Request, res: Response): Promise<any> => {
  console.log('categoriaController::listarCategorias');
  try {
    const response = await categoriasService.listarCategorias();
    res.json(ResponseModel.success(response));
  } catch (error: any) {
    console.error(error.message);
    res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
  }
}
 
export const obtenerCategorias = async (req: Request, res: Response): Promise<any> => {
  console.log('categoriaController::obtenerCategorias');
  try {
    const { id } = req.params;
    const response = await categoriasService.obtenerCategoria(Number(id));
    res.json(ResponseModel.success(response));
  } catch (error: any) {
    console.error(error.message);
    res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
  }
}
 
export const insertarCategorias = async (req: Request, res: Response): Promise<any> => {
  console.log('categoriaController::insertarCategorias');
    const { error }: any = categoriasCrearSchema.validate(req.body);
    if(error){
      return res.status(STATUS_BAD_REQUEST).json(ResponseModel.error(error.message, STATUS_BAD_REQUEST));
    }
  try {
    const response = await categoriasService.insertarCategoria(req.body);
    res.json(ResponseModel.success(response));
  } catch (error: any) {
    console.error(error.message);
    res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
  }
}
 
export const modificarCategorias = async (req: Request, res: Response): Promise<any> => {
  console.log('categoriasController::modificarCategorias');
  try {
    const { id } = req.params;
    const response = await categoriasService.modificarCategoria(Number(id), req.body);
    res.json(ResponseModel.success(response));
  } catch (error: any) {
    console.error(error.message);
    res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
  }
}
 
export const eliminarCategorias = async (req: Request, res: Response): Promise<any> => {
  console.log('categoriasController::eliminarCategorias');
  try {
    const { id } = req.params;
    const response = await categoriasService.eliminarCategoria(Number(id));
    res.json(ResponseModel.success(response));
  } catch (error: any) {
    console.error(error.message);
    res.status(STATUS_INTERNAL_SERVER_ERROR).json(ResponseModel.error(error.message));
  }
}
 