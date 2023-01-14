import { Router } from "express";
import {
  loginHandler,
  profileHandler,
} from "../controllers/auth.controller.js";
import { requiereAuth } from "../middlewares/requireAuth.js";
const router = Router();
router.post("/login", loginHandler);
router.get("/profile", requiereAuth, profileHandler);
export default router;
