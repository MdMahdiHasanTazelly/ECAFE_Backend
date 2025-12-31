import { Router } from "express";
import { addToCart, getAllFood } from "../controller/food.controller.js";

const router = Router();

router.route("/getAllFood").get(getAllFood);

router.route("/add-to-cart").post(addToCart);


export default router;