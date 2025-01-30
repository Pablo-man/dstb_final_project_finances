import { Router } from "express";
import { logout } from "../controllers/login.controller.js";
import { auth } from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/logout", auth, logout);

export default router;