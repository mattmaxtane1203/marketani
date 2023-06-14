const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const port = 8081;

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  return res.json("Backend Success");
});

const customerRouter = require("./routes/Customer");
app.use("/customer", customerRouter);

const sellerRouter = require("./routes/Seller");
app.use("/seller", sellerRouter);

app.listen(port, () => {
  console.log("Listening on port ", port);
});
