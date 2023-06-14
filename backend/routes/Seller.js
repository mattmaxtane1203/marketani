const express = require("express");
const router = express.Router();

const connection = require("../config/database");

// Register Seller
router.post("/register", function (req, res) {
  const { nomorTelepon, namaLengkap, kataSandi } = req.body;
  const query =
    "INSERT INTO seller (phone_number, full_name, password) VALUES (?, ?, ?)";
  const values = [nomorTelepon, namaLengkap, kataSandi];

  connection.query(query, values, function (err, result) {
    if (err) {
      console.error("Error executing the query: " + err.stack);
      return res.status(500).json({ error: "Failed to register the user." });
    }
    console.log("User registered with Seller ID: " + result.insertId);
    res.status(200).json({ message: "User registered successfully." });
  });
});

// Get ID by phone number
router.get("/getId/:phoneNumber", (req, res) => {
  const phoneNumber = req.params.phoneNumber;

  const sql = "SELECT seller_id FROM seller WHERE phone_number = ?";
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

// Get seller password by phone number
router.get("/getPassword/:phoneNumber", (req, res) => {
  const phoneNumber = req.params.phoneNumber;
  const sql = "SELECT password FROM seller WHERE phone_number = ?";
  const values = [phoneNumber];

  connection.query(sql, values, (err, results) => {
    if (err) {
      console.error("Error executing the query: " + err.stack);
      return res.status(500).json({ error: "Failed to retrieve password." });
    }

    if (results.length === 0) {
      return res.status(404).json({ error: "Phone number not found." });
    }

    const password = results[0].password;
    res.status(200).json({ password });
  });
});

// Check if phone number exists
router.get("/phoneNumberExists/:phoneNumber", (req, res) => {
  const phoneNumber = req.params.phoneNumber;
  const sql = "SELECT phone_number FROM seller WHERE phone_number = ?";
  const values = [phoneNumber];

  connection.query(sql, values, (err, results) => {
    if (err) {
      console.error("Error executing the query: " + err.stack);
      return res.status(500).json({ error: "Failed to check phone number." });
    }

    if (results.length === 0) {
      return res.status(404).json({ error: "Phone number not found." });
    }

    const phoneNumbers = results.map((result) => result.phone_number);
    res.status(200).json({ phoneNumber: phoneNumbers[0] });
  });
});

module.exports = router;
