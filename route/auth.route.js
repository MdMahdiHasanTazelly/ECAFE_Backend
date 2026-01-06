import { Router } from "express";
import { login, logout, register, userProfile } from "../controller/auth.controller.js";

const router = Router();

router.route('/login').post(login);

router.route('/register').post(register);

router.route('/logout').post(logout);

router.route('/profile/:userId').get(userProfile);

export default router;