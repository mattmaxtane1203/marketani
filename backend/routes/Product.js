const express = require("express");
const router = express.Router();

const connection = require("../config/database");

router.get("/", function (req, res) {
  return res.json("Product connection success");
});

router.post("/insert", (req, res) => {
  const {
    nama_produk,
    deskripsi,
    berat_per_pesanan,
    harga_per_pesanan,
    stok,
    asal_produk,
    metode_pengembangan,
    seller_id,
  } = req.body;

  // Create the INSERT query
  const query = `INSERT INTO product (nama_produk, deskripsi, berat_per_pesanan, harga_per_pesanan, stok, asal_produk, metode_pengembangan, seller_id) 
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

  // Execute the query
  connection.query(
    query,
    [
      nama_produk,
      deskripsi,
      berat_per_pesanan,
      harga_per_pesanan,
      stok,
      asal_produk,
      metode_pengembangan,
      seller_id,
    ],
    (err, result) => {
      if (err) {
        console.error("Error inserting new product:", err);
        res.status(500).send("Error inserting new product");
        return;
      }
      console.log("New product inserted:", result.insertId);
      res.status(200).send("New product inserted");
    }
  );
});

module.exports = router;
