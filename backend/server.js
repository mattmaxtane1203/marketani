const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const port = 8081;

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "marketani",
});

app.get("/", (req, res) => {
  return res.json("Backend Success");
});

app.get("/customer", (req, res) => {
  const sql = "SELECT * FROM customer";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

// Register Post Method
// ! TODO: Separate for Customer and Seller
app.post("/customer", function (req, res) {
  const { nomorTelepon, namaLengkap, kataSandi } = req.body;
  const query =
    "INSERT INTO Customer (phone_number, full_name, password) VALUES (?, ?, ?)";
  const values = [nomorTelepon, namaLengkap, kataSandi];

  db.query(query, values, function (err, result) {
    if (err) {
      console.error("Error executing the query: " + err.stack);
      return res.status(500).json({ error: "Failed to register the user." });
    }
    console.log("User registered with Customer ID: " + result.insertId);
    res.status(200).json({ message: "User registered successfully." });
  });
});

app.post("/seller", function (req, res) {
  const { nomorTelepon, namaLengkap, kataSandi } = req.body;
  const query =
    "INSERT INTO seller (phone_number, full_name, password) VALUES (?, ?, ?)";
  const values = [nomorTelepon, namaLengkap, kataSandi];

  db.query(query, values, function (err, result) {
    if (err) {
      console.error("Error executing the query: " + err.stack);
      return res.status(500).json({ error: "Failed to register the user." });
    }
    console.log("User registered with Seller ID: " + result.insertId);
    res.status(200).json({ message: "User registered successfully." });
  });
});

// Check Phone Number Exists
app.get("/checkPhoneNumber/:phoneNumber", (req, res) => {
  const phoneNumber = req.params.phoneNumber;
  const sql =
    "SELECT COUNT(*) AS count FROM customer WHERE phone_number = ? UNION ALL SELECT COUNT(*) AS count FROM seller WHERE phone_number = ?";
  const values = [phoneNumber, phoneNumber];

  db.query(sql, values, (err, results) => {
    if (err) {
      console.error("Error executing the query: " + err.stack);
      return res.status(500).json({ error: "Failed to check phone number." });
    }

    const customerCount = results[0].count;
    const sellerCount = results[1].count;
    const exists = customerCount > 0 || sellerCount > 0;
    res.status(200).json({ exists });
  });
});

app.listen(port, () => {
  console.log("Listening on port ", port);
});
