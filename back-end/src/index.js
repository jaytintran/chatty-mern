import express from "express";
import authRoutes from "./routes/auth.route.js";
import dotenv from "dotenv";
import { connectdb } from "./lib/db.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT;

// Allow extracting json data from requests body
app.use(express.json());

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
	connectdb();
});

connectdb();
