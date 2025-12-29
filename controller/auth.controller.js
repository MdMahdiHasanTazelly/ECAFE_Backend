import { User } from "../model/user.model.js";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";


export const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        if (!email || !password || !username) return res.status(400).json({ message: "All fields are required." });

        const user = await User.findOne({ email });
        if (user) return res.status(400).json({ message: "User already exist!" });

        const hashedPass = await bcrypt.hash(password, 10);

        const token = jwt.sign(
            { email, password },
            process.env.JWT_SECRET,
        );

        const newUser = await User({ email, password: hashedPass, username, token });

        await newUser.save();

        return res.status(200).json({ token, message: "User registered!" });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }

}



export const login = async (req, res) => {
    try {

        const { email, password } = req.body;
        if (!email || !password) return res.status(400).json({ message: "All fields are required." });

        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: "No such user. Register please!" });

        const isMatch = bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Invalid credentials." });

        const token = jwt.sign(
            { email, password },
            process.env.JWT_SECRET,
        );

        await User.updateOne({ _id: user._id },
            { $set: { token: token } });

        return res.status(200).json({ token, message: "Logged in successfully." });


    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
}



export const logout = async (req, res) => {
    try {

        const { token } = req.body;
        if (!token) return res.status(400).json({ message: "This user is not valid!" });

        // console.log(token);

        const user = await User.findOne({ token });
        if (!user) return res.status(400).json({ message: "No such user." });

        // console.log(user);

        if (user.token === token) {
            console.log(`Tokens are same`);

            // const newUser = new User({ username: user.username, email: user.email, password: user.password })
            // await newUser.save();
            // delete user.token;
            // console.log(newUser);
            // user.unset('token');
            // await user.save();


            await User.findOneAndUpdate(
                { token: token },
                { $unset: { token: 1 } },  // Removes the field completely
                { new: true }              // Optional: returns updated doc
            );

            return res.status(200).json({ message: "Logged out!" });
        }


    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
}