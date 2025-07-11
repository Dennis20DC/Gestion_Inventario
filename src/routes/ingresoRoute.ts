import express, { Router } from "express";
import { 
  listarIngresos,
  obtenerIngreso,
  insertarIngreso,
  modificarIngreso,
  eliminarIngreso
} from "../controllers/ingresoController";
// import { authMiddleware } from "../auth/auth.middleware";

const router: Router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: Ingreso
 *     description: Gestión de ingresos de productos
 */

/**
 * @swagger
 * /api/v2/ingresos:
 *   get:
 *     summary: Listar todos los ingresos
 *     tags: [Ingreso]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de ingresos obtenida correctamente
 */
router.get('/', listarIngresos);

/**
 * @swagger
 * /api/v2/ingresos/{id}:
 *   get:
 *     summary: Obtener un ingreso por ID
 *     tags: [Ingreso]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del ingreso
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Ingreso obtenido correctamente
 */
router.get('/:id', obtenerIngreso);

/**
 * @swagger
 * /api/v2/ingresos:
 *   post:
 *     summary: Registrar un nuevo ingreso
 *     tags: [Ingreso]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - idAlmacen
 *               - cantidad
 *               - costoUnitario
 *               - costoTotal
 *             properties:
 *               idAlmacen:
 *                 type: integer
 *               cantidad:
 *                 type: integer
 *               costoUnitario:
 *                 type: number
 *               costoTotal:
 *                 type: number
 *     responses:
 *       201:
 *         description: Ingreso registrado correctamente
 */
router.post('/', insertarIngreso);

/**
 * @swagger
 * /api/v2/ingresos/{id}:
 *   put:
 *     summary: Modificar un ingreso
 *     tags: [Ingreso]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del ingreso
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - idAlmacen
 *               - cantidad
 *               - costoUnitario
 *               - costoTotal
 *             properties:
 *               idAlmacen:
 *                 type: integer
 *               cantidad:
 *                 type: integer
 *               costoUnitario:
 *                 type: number
 *               costoTotal:
 *                 type: number
 *     responses:
 *       200:
 *         description: Ingreso modificado correctamente
 */
router.put('/:id', modificarIngreso);

/**
 * @swagger
 * /api/v2/ingresos/{id}:
 *   delete:
 *     summary: Eliminar un ingreso
 *     tags: [Ingreso]
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
 *         description: Ingreso eliminado correctamente
 */
router.delete('/:id', eliminarIngreso);

export default router;
