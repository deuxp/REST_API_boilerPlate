const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
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
  return res.send("<h1>PONG!</h1>");
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
