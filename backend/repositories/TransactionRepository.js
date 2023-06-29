// Assuming you have a database module and connection
const { resolve } = require("path");
const db = require("../config/database");

// Function to insert a transaction header
const insertTransactionHeader = async (transactionHeader) => {
  const {
    customerId,
    sellerId,
    transactionDate,
    transactionTime,
    statusPemesanan,
  } = transactionHeader;

  const query =
    "INSERT INTO TransactionHeader (customer_id, seller_id, transaction_date, transaction_time, status_pemesanan) VALUES (?, ?, ?, ?, ?)";
  const values = [
    customerId,
    sellerId,
    transactionDate,
    transactionTime,
    statusPemesanan,
  ];

  return new Promise((resolve, reject) => {
    db.query(query, values, function (err, result) {
      if (err) {
        console.error("Error executing the query: " + err.stack);
        reject(new Error("Failed to insert transaction header."));
      } else {
        console.log("User registered with Seller ID: " + result.insertId);
        resolve({ insertId: result.insertId });
      }
    });
  });
};

// Function to insert transaction details
const insertTransactionDetails = async (transactionDetails) => {
  const query =
    "INSERT INTO TransactionDetail (transaction_id, product_id, quantity) VALUES (?, ?, ?)";

  for (const detail of transactionDetails) {
    const { transactionId, productId, quantity } = detail;
    const values = [transactionId, productId, quantity];
    await db.query(query, values);
  }
};

// Function to get all transaction headers
async function getTransactionHeadersBySellerId(sellerId) {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM TransactionHeader WHERE seller_id = ?";
    db.query(query, [sellerId], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
}

// Function to get all transaction details by id
async function getTransactionDetailsByTransactionId(transactionId) {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM TransactionDetail WHERE transaction_id = ?";
    db.query(query, [transactionId], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
}

// Function to update transaction status
const updateTransactionStatus = (transactionId, newStatus) => {
  return new Promise((resolve, reject) => {
    const query =
      "UPDATE TransactionHeader SET status_pemesanan = ? WHERE transaction_id = ?";
    const values = [newStatus, transactionId];

    db.query(query, values, function (err, results) {
      if (err) {
        console.error("Error executing the query: " + err.stack);
        reject(new Error("Failed to update the transaction status."));
      } else {
        resolve(results);
      }
    });
  });
};

//function to calculate total price by transaction ID
async function calculateTotalPriceByTransactionId(transactionId) {
  return new Promise((resolve, reject) => {
    const query = `SELECT td.transaction_id, SUM(p.harga_per_pesanan * td.quantity) AS total_price
    FROM TransactionDetail td
    JOIN product p ON td.product_id = p.product_id
    WHERE td.transaction_id = ?
    GROUP BY td.transaction_id;`;
    db.query(query, [transactionId], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
}
// Function to get amount of items bought by transaction id
const getAmountOfItemsByTransactionId = (transactionId) => {
  return new Promise((resolve, reject) => {
    const query = `
      SELECT COUNT(*) AS item_count
      FROM TransactionDetail
      WHERE transaction_id = ?;
    `;
    db.query(query, [transactionId], (error, result) => {
      if (error) {
        console.error("Error retrieving item count:", error);
        reject(error);
      } else {
        const itemCount = result[0].item_count;
        resolve(itemCount);
      }
    });
  });
};

module.exports = {
  insertTransactionHeader,
  insertTransactionDetails,
  getTransactionHeadersBySellerId,
  getTransactionDetailsByTransactionId,
  updateTransactionStatus,
  calculateTotalPriceByTransactionId,
  getAmountOfItemsByTransactionId,
};
