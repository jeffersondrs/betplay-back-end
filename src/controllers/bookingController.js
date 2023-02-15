import Booking from "../models/bookingModel.js";
import Stripe from "stripe";

// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY); commonjs mode
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY); // es6 mode

export const getCheckoutSession = async (req, res, next) => {
  const book = await Booking.findById(req.params.bookId);

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    success_url: `${req.protocol}://${req.get("host")}/?book=${
      req.params.bookId
    }&user=${req.user.id}&price=${book.price}`,
    cancel_url: `${req.protocol}://${req.get("host")}/book/${book.slug}`,
    customer_email: req.user.email,
    client_reference_id: req.params.bookId,
    line_items: [
      {
        name: `${book.name} book`,
        description: book.summary,
        images: [
          `${req.protocol}://${req.get("host")}/img/books/${book.imageCover}`,
        ],
        amount: book.price * 100,
        currency: "usd",
        quantity: 1,
      },
    ],
  });

  res.status(200).json({
    status: "success",
    session,
  });
};
