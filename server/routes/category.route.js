import express from "express";
import { createCategory, getCategory } from "../controllers/category.controller.js";

const router = express.Router();

// Get all category
router.get('/', getCategory)

// Create category
router.post("/", createCategory);

export default router;
