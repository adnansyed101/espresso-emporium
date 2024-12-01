import mongoose from "mongoose";

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
    type: String,
    required: true,
  },
});

const Coffee = mongoose.model("coffee", coffeeSchema);

export default Coffee;
