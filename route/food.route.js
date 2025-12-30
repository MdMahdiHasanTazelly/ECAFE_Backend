import { Router } from "express";
import { getAllFood } from "../controller/food.controller.js";

const router = Router();

router.route("/getAllFood").get(getAllFood);


export default router;