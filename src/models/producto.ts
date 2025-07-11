export interface IProductos {
  idProducto: number;
  nombre: string;
  descripcion?: string | null;
  precioUnitario: number;
  stock: number;
  idCategoria: number;
  idProveedor: number;
  idAlmacen: number;
  estadoAuditoria?: string;
  fechaCreacion?: Date;
}