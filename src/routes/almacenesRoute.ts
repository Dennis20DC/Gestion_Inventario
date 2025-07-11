import express, { Router } from "express";
import {
  listarAlmacenes,
  obtenerAlmacen,
  insertarAlmacen,
  modificarAlmacen,
  eliminarAlmacen
} from "../controllers/almacenController";
// import { authMiddleware } from "../auth/auth.middleware";

const router: Router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: Almacen
 *     description: Gestión de almacenes
 */

/**
 * @swagger
 * /api/v2/almacenes:
 *   get:
 *     summary: Listar todos los almacenes
 *     tags: [Almacen]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de almacenes obtenida correctamente
 */
router.get('/', listarAlmacenes);

/**
 * @swagger
 * /api/v2/almacenes/{id}:
 *   get:
 *     summary: Obtener un almacén por ID
 *     tags: [Almacen]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del almacén
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Almacén obtenido correctamente
 */
router.get('/:id', obtenerAlmacen);

/**
 * @swagger
 * /api/v2/almacenes:
 *   post:
 *     summary: Registrar un nuevo almacén
 *     tags: [Almacen]
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
 *             properties:
 *               nombre:
 *                 type: string
 *     responses:
 *       201:
 *         description: Almacén registrado correctamente
 */
router.post('/', insertarAlmacen);

/**
 * @swagger
 * /api/v2/almacenes/{id}:
 *   put:
 *     summary: Modificar un almacén
 *     tags: [Almacen]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del almacén
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
 *             properties:
 *               nombre:
 *                 type: string
 *     responses:
 *       200:
 *         description: Almacén modificado correctamente
 */
router.put('/:id', modificarAlmacen);

/**
 * @swagger
 * /api/v2/almacenes/{id}:
 *   delete:
 *     summary: Eliminar un almacén
 *     tags: [Almacen]
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
 *         description: Almacén eliminado correctamente
 */
router.delete('/:id', eliminarAlmacen);

export default router;
