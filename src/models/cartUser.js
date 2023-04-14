import mongoose from "mongoose";

const cartUserSchema = mongoose.Schema({
  code: {
    type: Number,
    required: true,
    unique: true,
  },
  price: {
    type: Number,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Cart", cartUserSchema);