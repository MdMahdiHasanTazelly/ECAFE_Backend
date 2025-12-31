import { Food } from '../model/food.model.js'
import { User } from '../model/user.model.js';



export const getAllFood = async (req, res) => {
    try {
        const foods = await Food.find();
        return res.json(foods);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
}


export const addToCart = async (req, res) => {
    try {
        const { token, foodId } = req.body;
        if (!token || !foodId) return res.status(400).json({ message: "Invalide request!" });

        const user = await User.findOne({ token });
        if (!user) return res.status(400).json({ message: "No such user." });

        user.orders.push(foodId);

        await user.save();
        return res.status(200).json({ message: "Order added to cart." });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
}