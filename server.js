import app from "./app.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import mercadopago from "mercadopago";

dotenv.config({ path: ".env" });

const port = process.env.PORT || 3500;

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mercadopago.configure({
  sandbox: true,
  access_token: process.env.MERCADOPAGO_ACCESS_TOKEN,
  client_id: process.env.MP_CLIENT_ID,
  client_secret: process.env.MP_CLIENT_SECRET,
});

mongoose.set("strictQuery", false);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("DB connection successful!");
  });

app.listen(port, "127.0.0.1", () => {
  console.log(`App running on port ${port}...`);
});
