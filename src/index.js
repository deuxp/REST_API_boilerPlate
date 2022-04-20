import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
const bodyParser = require("body-parser");

// const ENV = process.env.NODE_ENV || 'developement'
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json()); // access req.body
// app.use(bodyParser.json()); // may not need
app.use(morgan("dev"));
app.use(cors());
app.use(helmet());

// endpoints
app.get("/ping", (_req, res) => {
  return res.send({
    status: "OK",
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
