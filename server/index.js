import express from "express";
import cors from "cors";
import portfolio from "./data/portfolio.js";

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get("/", (_request, response) => {
  response.json({
    message: "Portfolio API is running"
  });
});

app.get("/api/portfolio", (_request, response) => {
  response.json(portfolio);
});

app.listen(port, () => {
  console.log(`Portfolio API listening on port ${port}`);
});
