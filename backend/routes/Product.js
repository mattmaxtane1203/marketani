const express = require("express");
const router = express.Router();

const connection = require("../config/database");

router.get("/", function (req, res) {
  return res.json("Product connection success");
});

// Tanbah Product
router.post("/product", function (req, res) {
    const { imagepath, namaproduk, desc, berat, harga, stok, asalproduk, metode } = req.body;
    const query =
      "INSERT INTO product (foto_produk, nama_produk, deskripsi, berat_per_pesanan, harga_per_pesanan, stok, asal_produk, metode_pengembanga) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [imagepath, namaproduk, desc, berat, harga, stok, asalproduk, metode];
  
    connection.query(query, values, function (err, result) {
      if (err) {
        console.error("Error executing the query: " + err.stack);
        return res.status(500).json({ error: "Failed to register the user." });
      }
      console.log("User registered with Seller ID: " + result.insertId);
      res.status(200).json({ message: "User registered successfully." });
    });
  });