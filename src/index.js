import express from "express";
import morgan from "morgan";

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.json()); // access req.body
app.use(morgan("dev"));

// endpoints
app.get("/ping", (_req, res) => {
  return res.send({
    status: "OK",
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
