const TransactionController = require("../controllers/TransactionController");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  return res.json("Transcation Router Success!");
});

// Create new transaction header and details
router.post("/createTransaction", async (req, res) => {
  const { currentCustomerId, separatedItems } = req.body;
  console.log("Transaction Customer ID: " + currentCustomerId);
  try {
    await TransactionController.createTransaction(
      currentCustomerId,
      separatedItems
    );
    res.json({ success: true, message: "Transactions created successfully" });
  } catch (error) {
    console.error("Error creating transactions:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to create transactions" });
  }
});

// Get transaction header of seller
router.get(
  "/getTransactionHeaders/:sellerId",
  TransactionController.getTransactionHeadersBySellerId
);

// Get transaction header of customer
router.get(
  "/getTransactionHeaders/customer/:customerId",
  TransactionController.getTransactionHeadersByCustomerId
);

// Get transaction details
router.get(
  "/getTransactionDetails/:transactionId",
  TransactionController.getTransactionDetailsByTransactionId
);

// Update transaction status
router.put(
  "/updateTransactionStatus/:transactionId",
  TransactionController.updateTransactionStatus
);

// Calculate total price by transactionId
router.get(
  "/calculateTotalPrice/:transactionId",
  TransactionController.calculateTotalPriceByTransactionId
);

// Get amount of items by transaction id
router.get(
  "/getAmountOfItems/:transactionId",
  TransactionController.getAmountOfItemsByTransactionId
);

module.exports = router;
