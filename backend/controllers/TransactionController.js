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

      const { insertId } = await TransactionRepository.insertTransactionHeader(transactionHeader);
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
    console.log("ERROR at TransactionController " +error)
    throw new Error("Error creating transactions");
  }
};

module.exports = {
  createTransaction,
};
