const TransactionRepository = require("../repositories/TransactionRepository");
const db = require("../config/database");

const createTransaction = async (customerId, separatedItems) => {
  try {
    for (const sellerId in separatedItems) {
      const transactionHeader = {
        customerId,
        sellerId,
        transactionDate: new Date(),
        transactionTime: new Date(),
        statusPemesanan: "Sedang Diproses",
      };

      const { insertId } = await TransactionRepository.insertTransactionHeader(
        transactionHeader
      );
      console.log("Insert ID: " + insertId);
      const items = separatedItems[sellerId];
      const transactionDetails = items.map((item) => ({
        transactionId: insertId, // Use insertId here
        productId: item.productId,
        quantity: item.quantity,
      }));

      await TransactionRepository.insertTransactionDetails(transactionDetails);
    }
  } catch (error) {
    console.log("ERROR at TransactionController " + error);
    throw new Error("Error creating transactions");
  }
};

const getTransactionHeadersBySellerId = async (req, res) => {
  const sellerId = req.params.sellerId;

  TransactionRepository.getTransactionHeadersBySellerId(sellerId)
    .then((transactionHeaders) => {
      res.json(transactionHeaders);
    })
    .catch((error) => {
      console.error("Error retrieving transaction headers:", error);
      res.status(500).json({
        error: "An error occurred while retrieving transaction headers.",
      });
    });
};

const getTransactionDetailsByTransactionId = async (req, res) => {
  const transactionId = req.params.transactionId;

  TransactionRepository.getTransactionDetailsByTransactionId(transactionId)
    .then((transactionDetails) => {
      res.json(transactionDetails);
    })
    .catch((error) => {
      console.error("Error retrieving transaction details:", error);
      res.status(500).json({
        error: "An error occured while retrieving transaction details.",
      });
    });
};

const updateTransactionStatus = async (req, res) => {
  const transactionId = req.params.transactionId;
  const newStatus = req.body.newStatus; // Get the new status from the request body

  const query =
    "UPDATE TransactionHeader SET status_pemesanan = ? WHERE transaction_id = ?";
  const values = [newStatus, transactionId];

  db.query(query, values, function (err, results) {
    if (err) {
      console.error("Error executing the query: " + err.stack);
      return res
        .status(500)
        .json({ error: "Failed to update the transaction status." });
    }

    if (results.affectedRows === 0) {
      return res.status(404).json({ error: "Transaction not found." });
    }

    res
      .status(200)
      .json({ message: "Transaction status updated successfully." });
  });
};

const calculateTotalPriceByTransactionId = async (req, res) => {
  const transactionId = req.params.transactionId;
  try {
    const totalPrice = await TransactionRepository.calculateTotalPriceByTransactionId(transactionId)
    res.status(200).json({totalPrice})
  } catch (error) {
    console.error("Error retrieving total price :", error)
    res.status(500).json({error:"Internal server error"})
  }
};

module.exports = {
  createTransaction,
  getTransactionHeadersBySellerId,
  getTransactionDetailsByTransactionId,
  updateTransactionStatus,
  calculateTotalPriceByTransactionId,
};
