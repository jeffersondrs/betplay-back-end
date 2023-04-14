import Cart from "../models/cartUser.js";
import { z } from "zod";

export const getAllCarts = async (req, res) => {
  const carts = await Cart.find({});
  res.status(200).json({
    status: "success",
    results: carts.length,
    data: {
      carts,
    },
  });
};

export const getCart = async (req, res) => {
  const cart = await Cart.findById(req.params.id);
  res.status(200).json({
    status: "success",
    data: {
      cart,
    },
  });
};

export const createCart = async (req, res) => {
  const newCart = await Cart.create(req.body);

  const schema = z.object({
    code: z.number(),
    price: z.number(),
  }).required();

  const result = schema.safeParse(req.body);
  if (!result.success) {
    res.status(400).json({
      status: "error",
      message: "Invalid request body",
      data: {
        errors: result.error,
      },
    });
    return;
  }

  res.status(201).json({
    status: "success",
    message: "Cart created successfully",
    data: {
      cart: newCart,
    },
  });
};

export const updateCart = async (req, res) => {
  
  const cart = await Cart.findByIdAndUpdate(req.params.id, req.body);
  res.status(200).json({
    status: "success",
    data: {
      cart,
    },
  });
};
