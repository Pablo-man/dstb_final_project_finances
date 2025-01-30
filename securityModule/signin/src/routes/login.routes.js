import { Router } from "express";
import { login, profile, verifyToken } from "../controllers/login.controller.js";
import { auth } from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/login", login);

router.get("/profile", auth, profile );

router.get("/verify", verifyToken );

export default router;