import { IVenta } from "./venta";
import { IProductos } from "./producto";
 
export interface IDetalleVenta {
  idDetalleVenta: number;
  idVenta: number;
  idProducto: number;
  cantidad: number;
  precioUnitario: number;
  costoTotal: number;
  fechaIngreso?: string;
  estadoAuditoria?: Date;
 
  venta: IVenta;
  productos: IProductos;
}