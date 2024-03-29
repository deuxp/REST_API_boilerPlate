const express = require("express");
const router = express.Router();

module.exports = (db) => {
  router.get("/", (_req, res) => {
    const Q = `SELECT * FROM messages`;

    db.query(Q)
      .then((data) => {
        return res.json(data.rows);
      })
      .catch((e) => {
        res.send(e.message);
      });
  });

  router.post("/", (req, res) => {
    const { messages } = req.body;
    console.log(messages)
    const Q = `INSERT INTO messages (body) 
    VALUES ('${messages}');`;

    db.query(Q)
      .then((response) => {
        res.status(204);
      })
      .catch((e) => {
        res.send(e.message);
      });
  });

  return router;
};
