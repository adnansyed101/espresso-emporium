import Coffee from "../models/coffee.model.js";

// Get All Coffees
export const getCoffees = async (req, res) => {
  try {
    const coffees = await Coffee.find({}).populate("category");
    res.status(200).json({ success: true, data: coffees });
  } catch (err) {
    console.error("Error in fetching Coffees " + err.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// Create Coffee
export const createCoffee = async (req, res) => {
  const coffee = req.body; // user will send this data.
  if (
    !coffee.name ||
    !coffee.chef ||
    !coffee.supplier ||
    !coffee.price ||
    !coffee.photo ||
    !coffee.category
  ) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide all fields" });
  }

  const newCoffee = new Coffee(coffee);

  try {
    await newCoffee.save();
    res.status(201).json({ success: true, data: newCoffee });
  } catch (err) {
    console.error("Error in creating product" + err.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
