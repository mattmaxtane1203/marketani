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
  const query = `INSERT INTO product (nama_produk, deskripsi, berat_per_pesanan, harga_per_pesanan, stok, amount_sold, asal_produk, metode_pengembangan, seller_id) 
                 VALUES (?, ?, ?, ?, ?, 0, ?, ?, ?)`;

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

// Get product associated with product ID
router.get("/getProduct/:productId", function (req, res) {
  const productId = req.params.productId;

  const query = "SELECT * FROM product WHERE product_id = ?";
  const values = [productId];

  connection.query(query, values, function (err, results) {
    if (err) {
      console.error("Error executing the query: " + err.stack);
      return res.status(500).json({ error: "Failed to fetch the product." });
    }

    if (results.length === 0) {
      return res.status(404).json({ error: "Product not found." });
    }

    const product = results[0];
    res.status(200).json({ product });
  });
});

// Get all products associated with seller ID
router.get("/getAllProducts/:sellerId", function (req, res) {
  const sellerId = req.params.sellerId;

  const query = "SELECT * FROM product WHERE seller_id = ?";
  const values = [sellerId];

  connection.query(query, values, function (err, results) {
    if (err) {
      console.error("Error executing the query: " + err.stack);
      return res.status(500).json({ error: "Failed to fetch products." });
    }

    res.status(200).json({ products: results });
  });
});

module.exports = router;
