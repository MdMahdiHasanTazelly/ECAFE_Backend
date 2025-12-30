import { Food } from '../model/food.model.js'



export const getAllFood = async (req, res) => {
    try {
        const foods = await Food.find();
        return res.json(foods);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
}