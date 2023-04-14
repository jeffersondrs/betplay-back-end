import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import helmet from "helmet";
import morgan from "morgan";
import router from "./src/routes/router.js";
import cartRouter from "./src/routes/routeCart.js";
import routeCart from "./src/routes/routeCart.js";

const app = express();

app.use(express.static("src/public"));
app.use(express.static("src/views"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("combined"));

app.use("/api", router);

app.use("/cart", cartRouter);

app.use("/payment", routeCart);

app.all("*", (req, res) => {
  res.status(404).send(`Url ${req.originalUrl} não existe!`);
});

export default app;
