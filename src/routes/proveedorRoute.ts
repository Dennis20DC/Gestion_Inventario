import express, { Router } from "express";
import { 
  listarProveedores,
  obtenerProveedor,
  insertarProveedor,
  modificarProveedor,
  eliminarProveedor
} from "../controllers/proveedorController";
// import { authMiddleware } from "../auth/auth.middleware";

const router: Router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: Proveedor
 *     description: Gestión de proveedores
 */

/**
 * @swagger
 * /api/v2/proveedores:
 *   get:
 *     summary: Listar todos los proveedores
 *     tags: [Proveedor]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de proveedores obtenida correctamente
 */
router.get('/', listarProveedores);

/**
 * @swagger
 * /api/v2/proveedores/{id}:
 *   get:
 *     summary: Obtener un proveedor por ID
 *     tags: [Proveedor]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Proveedor obtenido correctamente
 */
router.get('/:id', obtenerProveedor);

/**
 * @swagger
 * /api/v2/proveedores:
 *   post:
 *     summary: Registrar un nuevo proveedor
 *     tags: [Proveedor]
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
 *               - ruc
 *             properties:
 *               nombre:
 *                 type: string
 *               ruc:
 *                 type: string
 *     responses:
 *       201:
 *         description: Proveedor creado correctamente
 */
router.post('/', insertarProveedor);

/**
 * @swagger
 * /api/v2/proveedores/{id}:
 *   put:
 *     summary: Modificar un proveedor
 *     tags: [Proveedor]
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
 *               - ruc
 *             properties:
 *               nombre:
 *                 type: string
 *               ruc:
 *                 type: string
 *     responses:
 *       200:
 *         description: Proveedor modificado correctamente
 */
router.put('/:id', modificarProveedor);

/**
 * @swagger
 * /api/v2/proveedores/{id}:
 *   delete:
 *     summary: Eliminar un proveedor
 *     tags: [Proveedor]
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
 *         description: Proveedor eliminado correctamente
 */
router.delete('/:id', eliminarProveedor);

export default router;
