import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  name: "string",
  author: "string",
  pages: "number",
});

const Book = mongoose.model("Book", bookingSchema);

export default Book;