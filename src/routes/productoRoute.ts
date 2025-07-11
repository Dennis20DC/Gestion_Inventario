import express, { Router } from "express";
import {
  listarProductos,
  obtenerProducto,
  insertarProducto,
  modificarProducto,
  eliminarProducto
} from "../controllers/productoController";
// import { authMiddleware } from "../auth/auth.middleware";

const router: Router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: Producto
 *     description: Gestión de productos
 */

/**
 * @swagger
 * /api/v1/productos:
 *   get:
 *     summary: Listar todos los productos
 *     tags: [Producto]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de productos obtenida correctamente
 */
router.get('/', listarProductos);

/**
 * @swagger
 * /api/v1/productos/{id}:
 *   get:
 *     summary: Obtener un producto por ID
 *     tags: [Producto]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del producto
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Producto obtenido correctamente
 */
router.get('/:id', obtenerProducto);

/**
 * @swagger
 * /api/v1/productos:
 *   post:
 *     summary: Registrar un nuevo producto
 *     tags: [Producto]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nombre
 *               - precioUnitario
 *               - stock
 *               - idCategoria
 *               - idProveedor
 *               - idAlmacen
 *             properties:
 *               nombre:
 *                 type: string
 *               precioUnitario:
 *                 type: number
 *               stock:
 *                 type: integer
 *               idCategoria:
 *                 type: integer
 *               idProveedor:
 *                 type: integer
 *               idAlmacen:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Producto creado correctamente
 */
router.post('/', insertarProducto);

/**
 * @swagger
 * /api/v1/productos/{id}:
 *   put:
 *     summary: Modificar un producto
 *     tags: [Producto]
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
 *               - nombre
 *               - precioUnitario
 *               - stock
 *               - idCategoria
 *               - idProveedor
 *               - idAlmacen
 *             properties:
 *               nombre:
 *                 type: string
 *               precioUnitario:
 *                 type: number
 *               stock:
 *                 type: integer
 *               idCategoria:
 *                 type: integer
 *               idProveedor:
 *                 type: integer
 *               idAlmacen:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Producto modificado correctamente
 */
router.put('/:id', modificarProducto);

/**
 * @swagger
 * /api/v1/productos/{id}:
 *   delete:
 *     summary: Eliminar un producto
 *     tags: [Producto]
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
 *         description: Producto eliminado correctamente
 */
router.delete('/:id', eliminarProducto);

export default router;
