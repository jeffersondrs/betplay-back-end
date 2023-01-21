import mongoose from "mongoose";

const betUserSchema = new mongoose.Schema({
  
  name: {
    type: String,
    required: [true, "A user must have a name"],
    unique: true,
    trim: true,
    maxlength: [40, "A user name must have less or equal then 40 characters"],
    minlength: [10, "A user name must have more or equal then 10 characters"],
  },
  phone: {
    type: Number,
    required: [true, "A user must have a phone"],
    unique: true,
    trim: true,
  },
  chavePix: {
    type: String,
    required: [true, "A user must have a chavePix"],
    unique: false,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now("dd/mm/yyyy"),
    }
});

const BetUser = mongoose.model("BetUser", betUserSchema);

export default BetUser;