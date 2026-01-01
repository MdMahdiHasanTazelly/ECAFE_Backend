import { Food } from '../model/food.model.js'
import { Order } from '../model/order.model.js';
import { User } from '../model/user.model.js';



export const getAllFood = async (req, res) => {
    try {
        const foods = await Food.find();

        // send lists of favourite items to show them in Menu page
        if (req.body.token != null) {

            const { token } = req.body;
            const user = await User.findOne({ token });

            const orders = await Order.find({ ownerId: user._id });

            // console.log(orders)

            return res.json({ foods, favourites: user.favourites, orders, userId: user._id });
        }

        return res.json(foods);  // if user is not logged in, send foods without token
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
}


export const addToCart = async (req, res) => {
    try {
        const { token, foodId, itemQuantity } = req.body;
        if (!token || !foodId) return res.status(400).json({ message: "Invalide request!" });

        const user = await User.findOne({ token });
        if (!user) return res.status(400).json({ message: "No such user." });

        if (itemQuantity === 0) return res.status(400).json({ message: "Quantity can't be Zero." });

        // console.log(token, "----------", foodId, '----------', itemQuantity);

        const order = await Order({
            foodId,
            ownerId: user._id,
            quantity: itemQuantity,

        });

        await order.save();

        return res.status(200).json({ message: "Order added to cart." });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
}


export const addToFavourite = async (req, res) => {
    try {
        const { token, foodId } = req.body;

        if (!token || !foodId) return res.status(400).json({ message: "Invalide request!" });

        const user = await User.findOne({ token });
        if (!user) return res.status(400).json({ message: "No such user." });

        user.favourites.push(foodId);
        await user.save();


        return res.status(200).json({ message: "Item added to favourite." });


    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
}



export const getOrders = async (req, res) => {
    try {

        const { token } = req.body;

        if (!token) return res.status(400).json({ message: "Unauthorized user." });

        const user = await User.findOne({ token });
        if (!user) return res.status(400).json({ message: "No such user!" });

        const orders = await Order.find({ ownerId: user._id })
            .populate('foodId');

        return res.status(200).json(orders);

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
}

