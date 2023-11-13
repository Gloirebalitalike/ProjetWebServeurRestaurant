import { Router } from "express";
import { login } from "../auth/loginController.js";

const router = Router()

router.post('/', login)

export default router