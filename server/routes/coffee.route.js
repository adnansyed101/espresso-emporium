import express from "express";
import { createCoffee, getCoffees } from "../controllers/coffee.controller.js";

const router = express.Router();

// Get all coffees
router.get("/", getCoffees);

// Create New Coffee
router.post("/", createCoffee);


export default router;
