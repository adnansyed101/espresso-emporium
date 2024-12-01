import express from "express";
import { createCoffee } from "../controllers/coffee.controller.js";

const router = express.Router();

// Create New Product
router.post("/", createCoffee);

export default router;
