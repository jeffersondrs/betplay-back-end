import express from "express";
import paypal from "paypal-rest-sdk";
import { getPayment, payment } from "../controllers/paypalController.js";

paypal.configure({
  mode: "sandbox",
  client_id: process.env.PAYPAL_CLIENT_ID,
  client_secret: process.env.PAYPAL_CLIENT_SECRET,
});

const pay = express();

pay.get("/pay", getPayment);
pay.post("/payment", payment);

export default pay;