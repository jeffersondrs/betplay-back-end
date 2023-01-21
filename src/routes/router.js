import express from "express";
import {
  getAllBetUsers,
  getBetUser,
  createBetUser,
  updateBetUser,
  deleteBetUser,
  deleteAllBetUsers,
} from "../controllers/betUserController.js";

const router = express.Router();

router.route("/").get(getAllBetUsers).post(createBetUser);

router.route("/:id").get(getBetUser).patch(updateBetUser).delete(deleteBetUser);

router.route("/deleteAll").delete(deleteAllBetUsers);

export default router;