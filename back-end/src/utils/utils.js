import jwt from "jsonwebtoken";

const generateToken = (userId, res) => {
	const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
		expiresIn: "7d", // Token will expire in 7 days
	});

	// Send token as a cookie
	res.cookie("tokenJWT", token, {
		maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days in milliseconds
		httpOnly: true, // Prevents client-side JavaScript from accessing the cookie. Prevent XSS attacks (cross-site scripting attacks)
		sameSite: "strict", // Helps prevent CSRF attacks (cross-site request forgery attacks)
		secure: process.env.NODE_ENV === "production", // Use secure cookies in production
	});
};
