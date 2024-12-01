import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import coffeeRoutes from "./routes/coffee.route.js";
import categoryRoutes from "./routes/category.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use("/api/coffees", coffeeRoutes);
app.use("/api/category", categoryRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log("Server is running on " + PORT);
});
