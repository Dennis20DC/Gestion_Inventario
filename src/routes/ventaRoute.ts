import express, { Router } from "express";
import {
  listarVentas,
  obtenerVenta,
  insertarVenta,
  modificarVenta,
  eliminarVenta
} from "../controllers/ventaController";
// import { authMiddleware } from "../auth/auth.middleware";

const router: Router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: Venta
 *     description: Gestión de ventas
 */

/**
 * @swagger
 * /api/v1/ventas:
 *   get:
 *     summary: Listar todas las ventas
 *     tags: [Venta]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de ventas obtenida correctamente
 */
router.get('/', listarVentas);

/**
 * @swagger
 * /api/v1/ventas/{id}:
 *   get:
 *     summary: Obtener una venta por ID
 *     tags: [Venta]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la venta
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Venta obtenida correctamente
 */
router.get('/:id', obtenerVenta);

/**
 * @swagger
 * /api/v1/ventas:
 *   post:
 *     summary: Registrar una nueva venta
 *     tags: [Venta]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - fecha
 *             properties:
 *               fecha:
 *                 type: string
 *                 format: date-time
 *               total:
 *                 type: number
 *               detalle:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     idProducto:
 *                       type: integer
 *                     cantidad:
 *                       type: integer
 *                     precioUnitario:
 *                       type: number
 *     responses:
 *       201:
 *         description: Venta registrada correctamente
 */
router.post('/', insertarVenta);

/**
 * @swagger
 * /api/v1/ventas/{id}:
 *   put:
 *     summary: Modificar una venta
 *     tags: [Venta]
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
 *               - fecha
 *             properties:
 *               fecha:
 *                 type: string
 *                 format: date-time
 *               total:
 *                 type: number
 *               detalle:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     idProducto:
 *                       type: integer
 *                     cantidad:
 *                       type: integer
 *                     precioUnitario:
 *                       type: number
 *     responses:
 *       200:
 *         description: Venta modificada correctamente
 */
router.put('/:id', modificarVenta);

/**
 * @swagger
 * /api/v1/ventas/{id}:
 *   delete:
 *     summary: Eliminar una venta
 *     tags: [Venta]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Venta eliminada correctamente
 */
router.delete('/:id', eliminarVenta);

export default router;