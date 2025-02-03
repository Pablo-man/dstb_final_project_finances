import { Router } from "express";
import { renderUsers } from "../controllers/user.controllers.js";

const router = Router();

router.get('/', renderUsers);

export default router;