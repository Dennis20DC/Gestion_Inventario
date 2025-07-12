import express, { Router } from "express";
import {
  listarDetalleVentas,
  obtenerDetalleVenta,
  insertarDetalleVenta,
  modificarDetalleVenta,
  eliminarDetalleVenta
} from "../controllers/detalleVentaController";
// import { authMiddleware } from "../auth/auth.middleware";

const router: Router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: DetalleVenta
 *     description: Gestión del detalle de ventas
 */

/**
 * @swagger
 * /api/v2/detalle-ventas:
 *   get:
 *     summary: Listar todos los detalles de venta
 *     tags: [DetalleVenta]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de detalles de venta obtenida correctamente
 */
router.get('/', listarDetalleVentas);

/**
 * @swagger
 * /api/v2/detalle/{id}:
 *   get:
 *     summary: Obtener un detalle de venta por ID
 *     tags: [DetalleVenta]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del detalle de venta
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Detalle de venta obtenido correctamente
 */
router.get('/:id', obtenerDetalleVenta);

/**
 * @swagger
 * /api/v2/detalles:
 *   post:
 *     summary: Registrar un nuevo detalle de venta
 *     tags: [DetalleVenta]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - idVenta
 *               - idProducto
 *               - cantidad
 *               - precioUnitario
 *               - costoTotal
 *             properties:
 *               idVenta:
 *                 type: integer
 *               idProducto:
 *                 type: integer
 *               cantidad:
 *                 type: integer
 *               precioUnitario:
 *                 type: number
 *               costoTotal:
 *                 type: number
 *     responses:
 *       201:
 *         description: Detalle de venta registrado correctamente
 */
router.post('/', insertarDetalleVenta);

/**
 * @swagger
 * /api/v2/detalles/{id}:
 *   put:
 *     summary: Modificar un detalle de venta
 *     tags: [DetalleVenta]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - idVenta
 *               - idProducto
 *               - cantidad
 *               - precioUnitario
 *               - costoTotal
 *             properties:
 *               idVenta:
 *                 type: integer
 *               idProducto:
 *                 type: integer
 *               cantidad:
 *                 type: integer
 *               precioUnitario:
 *                 type: number
 *               costoTotal:
 *                 type: number
 *     responses:
 *       200:
 *         description: Detalle de venta modificado correctamente
 */
router.put('/:id', modificarDetalleVenta);

/**
 * @swagger
 * /api/v2/detalles/{id}:
 *   delete:
 *     summary: Eliminar un detalle de venta
 *     tags: [DetalleVenta]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Detalle de venta eliminado correctamente
 */
router.delete('/:id', eliminarDetalleVenta);

export default router;
