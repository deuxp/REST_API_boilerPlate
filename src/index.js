require("dotenv").config();
const PORT = process.env.PORT || 8080;
const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const bodyParser = require("body-parser");

const { Pool } = require("pg");
let params = {};
if (process.env.DATABASE_URL) {
  params.connectionString = process.env.DATABASE_URL;
} else {
  params = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  };
}

const db = new Pool(params);
db.connect();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // access req.body
// app.use(bodyParser.json()); // may not need
app.use(morgan("dev"));
app.use(cors());
app.use(helmet());

// endpoints
app.get("/ping", (_req, res) => {
  const q = `SELECT * FROM messages`;
  db.query(q)
    .then((data) => {
      return res.json(data.rows);
    })
    .catch((e) => {
      res.send(e.message);
    });
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
