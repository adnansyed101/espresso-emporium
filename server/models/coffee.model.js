import mongoose, { mongo } from "mongoose";

const Schema = mongoose.Schema;

const coffeeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  chef: {
    type: String,
    required: true,
  },
  supplier: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  category: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
    ref: "Category",
  },
});

const Coffee = mongoose.model("Coffee", coffeeSchema);

export default Coffee;
