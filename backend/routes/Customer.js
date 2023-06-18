const express = require("express");
const router = express.Router();

const connection = require("../config/database");

router.get("/", function (req, res) {
  return res.json("Customer connection success");
});

// Register Customer
router.post("/register", function (req, res) {
  const { nomorTelepon, namaLengkap, kataSandi } = req.body;
  const query =
    "INSERT INTO Customer (phone_number, full_name, password) VALUES (?, ?, ?)";
  const values = [nomorTelepon, namaLengkap, kataSandi];

  connection.query(query, values, function (err, result) {
    if (err) {
      console.error("Error executing the query: " + err.stack);
      return res.status(500).json({ error: "Failed to register the user." });
    }
    console.log("User registered with Customer ID: " + result.insertId);
    res.status(200).json({ message: "User registered successfully." });
  });
});

// Get ID by phone number
router.get("/getId/:phoneNumber", (req, res) => {
  const phoneNumber = req.params.phoneNumber;

  const sql = "SELECT customer_id FROM customer WHERE phone_number = ?";
  const values = [phoneNumber];

  connection.query(sql, values, (err, results) => {
    if (err) {
      console.error("Error executing the query: " + err.stack);
      return res.status(500).json({ error: "Failed to check user role." });
    }

    const id = results.length > 0 ? results[0].customer_id : null;

    res.status(200).json({ id });
  });
});

// Get name by id
router.get("/getName/:id", (req, res) => {
  const id = req.params.id;
  const sql = "SELECT full_name FROM customer WHERE customer_id = ?";
  const values = [id];

  connection.query(sql, values, (err, results) => {
    if (err) {
      console.error("Error executing the query: " + err.stack);
      return res.status(500).json({ error: "Failed to retrieve full name." });
    }

    if (results.length === 0) {
      return res.status(404).json({ error: "Seller ID not found." });
    }

    const fullName = results[0].full_name;
    res.status(200).json({ full_name: fullName });
  });
});

// Get password by id
router.get("/getPassword/:id", (req, res) => {
  const id = req.params.id;
  const sql = "SELECT password FROM customer WHERE customer_id = ?";
  const values = [id];

  connection.query(sql, values, (err, results) => {
    if (err) {
      console.error("Error executing the query: " + err.stack);
      return res.status(500).json({ error: "Failed to retrieve password." });
    }

    if (results.length === 0) {
      return res.status(404).json({ error: "Customer ID not found." });
    }

    const password = results[0].password;
    res.status(200).json({ password });
  });
});

module.exports = router;
