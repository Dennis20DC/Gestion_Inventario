
/*
    CONFIGURAR CONEXION A BD, RUTAS Y OTRAS COSAS DE LOS SERVICIOS
*/
import express, { Application } from 'express';
import cors from 'cors';
import categoriaRoute from './routes/categoriaRoute';
import proveedorRoute from './routes/proveedorRoute';
import clientesRoute from './routes/clienteRoute';
import almacenesRoute from './routes/almacenesRoute'
import productoRoute from './routes/productoRoute'
import ingresoRoute from './routes/ingresoRoute'
import ventaRoute from './routes/ventaRoute'
import detalleVentaRoute from './routes/detalleVentaRoute'

//import authRoute from './routes/authRoute'
import { env } from "node:process"

import { swaggerSpec } from './docs/swagger';
import swaggerUi from 'swagger-ui-express';

const app: Application = express();
//Base de datos

// Middleware para parsear JSON
app.use(express.json());
app.use(cors());
app.use(`${env.API_PREFIX}/api-docs`, swaggerUi.serve, swaggerUi.setup(swaggerSpec));


//Routas
app.use(`${env.API_PREFIX}/categorias`, categoriaRoute);
app.use(`${env.API_PREFIX}/proveedores`, proveedorRoute);
app.use(`${env.API_PREFIX}/clientes`, clientesRoute);
app.use(`${env.API_PREFIX}/almacenes`, almacenesRoute)
app.use(`${env.API_PREFIX}/productos`, productoRoute)
app.use(`${env.API_PREFIX}/ingresos`, ingresoRoute)
app.use(`${env.API_PREFIX}/ventas`, ventaRoute)
app.use(`${env.API_PREFIX}/detalles`, detalleVentaRoute)

//PARA EL LOGIN 
//app.use(`${env.API_PREFIX}/auth`, authRoute);

export default app;