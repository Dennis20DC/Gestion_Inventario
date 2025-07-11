import express, { Router } from "express";
import {
  listarClientes,
  obtenerCliente,
  insertarCliente,
  modificarCliente,
  eliminarCliente
} from "../controllers/clienteController";
// import { authMiddleware } from "../auth/auth.middleware";

const router: Router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: Cliente
 *     description: Gestión de clientes
 */

/**
 * @swagger
 * /api/v1/clientes:
 *   get:
 *     summary: Listar todos los clientes
 *     tags: [Cliente]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de clientes obtenida correctamente
 */
router.get('/', listarClientes);

/**
 * @swagger
 * /api/v1/clientes/{id}:
 *   get:
 *     summary: Obtener un cliente por ID
 *     tags: [Cliente]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del cliente
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Cliente obtenido correctamente
 */
router.get('/:id', obtenerCliente);

/**
 * @swagger
 * /api/v1/clientes:
 *   post:
 *     summary: Registrar un nuevo cliente
 *     tags: [Cliente]
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
 *         description: Cliente registrado correctamente
 */
router.post('/', insertarCliente);

/**
 * @swagger
 * /api/v1/clientes/{id}:
 *   put:
 *     summary: Modificar un cliente
 *     tags: [Cliente]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del cliente
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
 *         description: Cliente modificado correctamente
 */
router.put('/:id', modificarCliente);

/**
 * @swagger
 * /api/v1/clientes/{id}:
 *   delete:
 *     summary: Eliminar un cliente
 *     tags: [Cliente]
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
 *         description: Cliente eliminado correctamente
 */
router.delete('/:id', eliminarCliente);

export default router;
