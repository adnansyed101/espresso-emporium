import Category from "../models/category.model.js";

// Get All Category
export const getCategory = async (req, res) => {
  try {
    const category = await Category.find({});
    res.status(200).json({ success: true, data: category });
  } catch (err) {
    console.error("Error in fetching Categorys " + err.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// Create Category
export const createCategory = async (req, res) => {
  const category = req.body; // user will send this data.
  if (!category.name) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide name" });
  }

  const newCategory = new Category(category);

  try {
    await newCategory.save();
    res.status(201).json({ success: true, data: newCategory });
  } catch (err) {
    console.error("Error in creating category" + err.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
