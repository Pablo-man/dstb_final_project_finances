import { Router } from "express";
import { deleteUser } from "../controllers/user.controllers.js";

const router = Router();

router.delete('/:id', deleteUser);

export default router;