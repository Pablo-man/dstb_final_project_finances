import { Router } from "express";
import { editUser } from "../controllers/user.controllers.js";

const router = Router();

router.put('/:id', editUser);

export default router;