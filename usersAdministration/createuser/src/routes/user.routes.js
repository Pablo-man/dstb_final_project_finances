import { Router } from "express";
import { createUser } from "../controllers/user.controllers.js";

const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         _id:
 *           type: String
 *           description: The auto-generated id of the User
 *         name:
 *           type: string
 *           description: The name of the User
 *         lastname:
 *           type: string
 *           description: The lastname of the User
 *         email:
 *           type: string
 *           description: The email of the User
 *         password:
 *           type: string
 *           description: The password of the User
 *       example:
 *         id: 1
 *         name: Luke
 *         lastname: Skywalker
 *         email: lukesky@gmail.com
 *         password: leya:v
 */

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: The User managing API
 */

router.post('/', createUser);

/**
 * @swagger
 * /Users:
 *   post:
 *     summary: Create a new User
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: User Created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       500:
 *         description: Some server error
 */

export default router;