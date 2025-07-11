import express, { Router } from "express";
import {
  listarCategorias,
  obtenerCategorias,
  insertarCategorias,
  modificarCategorias,
  eliminarCategorias,
} from "../controllers/categoriaController";
//import { authMiddleware } from "../auth/auth.middleware";

const router: Router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: Categoria
 *     description: Gestión de categorías
 */

/**
 * @swagger
 * /api/v1/categorias:
 *   get:
 *     summary: Listar todas las categorías
 *     tags: [Categoria]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista obtenida correctamente
 */
router.get("/", listarCategorias);

/**
 * @swagger
 * /api/v1/categorias/{id}:
 *   get:
 *     summary: Obtener una categoría por ID
 *     tags: [Categoria]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la categoría a obtener
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Categoría obtenida correctamente
 */
router.get("/:id",  obtenerCategorias);

/**
 * @swagger
 * /api/v1/categorias:
 *   post:
 *     summary: Crear una nueva categoría
 *     tags: [Categoria]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *     responses:
 *       201:
 *         description: Categoría creada correctamente
 */
router.post("/",  insertarCategorias);

/**
 * @swagger
 * /api/v1/categorias/{id}:
 *   put:
 *     summary: Modificar una categoría
 *     tags: [Categoria]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *     responses:
 *       200:
 *         description: Categoría modificada correctamente
 */
router.put("/:id",  modificarCategorias);

/**
 * @swagger
 * /api/v1/categorias/{id}:
 *   delete:
 *     summary: Eliminar una categoría
 *     tags: [Categoria]
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
 *         description: Categoría eliminada correctamente
 */
router.delete("/:id",  eliminarCategorias);

export default router;