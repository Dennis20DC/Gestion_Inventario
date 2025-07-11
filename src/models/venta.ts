import { ICliente } from "./cliente";
 
export interface IVenta {
  idVenta: number;
  idCliente?: number | null;
  fechaVenta?: Date;
  estadoAuditoria?: string;
 
  clientes: ICliente;
}