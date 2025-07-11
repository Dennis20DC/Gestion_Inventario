import { IAlmacen } from "./almacen";
 
export interface Ingresos {
  idIngreso?: number;
  idAlmacen: number;
  cantidad: number;
  costoUnitario: number;
  costoTotal: number;
  fechaIngreso?: Date;
  estadoAuditoria?: string;
 
  almacen?: IAlmacen;
}