

export const login = async (req, res) => {
    try {

        const { email, password } = req.body;

        if (!email || !password) return res.status(400).json({ message: "All fields are required." });

        


    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
}