import User from "../models/User.js";
import bcrypt from "bcryptjs";

export const signUp = async (req, res) => {
	// res.send("sign up route");

	const { fullName, email, password } = req.body;

	try {
		// Check if user password is less than 6 characters
		if (password.length < 6) {
			return res.status(400).json({
				message: "Password must be at least 6 characters long",
			});
		}

		// Check if user already exists
		const existingUser = await User.findOne({ email });

		if (existingUser) {
			return res.status(400).json({
				message: "User already exists",
			});
		}

		// If user does not exist, create a new user, hash the password, and save it
		const saltedPassword = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, saltedPassword);

		const newUser = await User.create({
			fullName,
			email,
			password: hashedPassword,
		});

		// If user is created successfully, return a success message
		// and the user data (excluding the password)
		if (newUser) {
			// Generate jwt token here
		} else {
			return res.status(400).json({
				message: "Invalid user data",
			});
		}

		// Create a token to let them know they are authenticated
	} catch (error) {
		return res.status(500).json({
			message: "Internal server error",
		});
	}
};

export const login = (req, res) => {
	res.send("login route");
};

export const logout = (req, res) => {
	res.send("logout route");
};
