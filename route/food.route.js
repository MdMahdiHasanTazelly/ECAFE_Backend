import { Router } from "express";
import { addToFavourite, addToCart, getAllFood, getOrders, 
    updateQuantity } from "../controller/food.controller.js";

const router = Router();

router.route("/getAllFood").post(getAllFood);

router.route("/add-to-cart").post(addToCart);

router.route("/add-to-favourite").post(addToFavourite);

router.route("/get-orders").post(getOrders);

router.route("/update-quantity").post(updateQuantity);


export default router;