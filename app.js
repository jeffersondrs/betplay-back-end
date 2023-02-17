import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import helmet from "helmet";
import morgan from "morgan";
import router from "./src/routes/router.js";
import fs from "fs";

const index = fs.readFileSync("./src/views/index.html", "utf8");

const app = express();

app.use(express.static("src/public"));
app.use(express.static("src/views"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("combined"));

app.use("/api", router);
app.get("/", (req, res) => {
  res.send(index);
});

app.all("*", (req, res) => {
  res.status(404).send(`Url ${req.originalUrl} não existe!`);
});

export default app;
