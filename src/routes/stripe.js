import express from "express";
import { getCheckoutSession } from "../controllers/bookingController.js";

const routerStripe = express.Router();

routerStripe.get("checkout-session/:_id", getCheckoutSession);

export default routerStripe;