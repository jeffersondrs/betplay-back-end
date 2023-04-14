import express from "express";
import { getCheckoutPayment } from "../controllers/paymentController.js";
import { getCheckoutMPPayment } from "../controllers/mercadoPagoController.js";

const router = express.Router();

router.route("/checkout").post(getCheckoutPayment);
router.route("/mercadopago").post(getCheckoutMPPayment);

export default router;
