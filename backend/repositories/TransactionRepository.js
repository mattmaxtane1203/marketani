// Assuming you have a database module and connection
const db = require("../config/database");

// Function to insert a transaction header
const insertTransactionHeader = async (transactionHeader) => {
    const { customerId, sellerId, transactionDate, transactionTime, statusPemesanan } = transactionHeader;
    
    const query = "INSERT INTO TransactionHeader (customer_id, seller_id, transaction_date, transaction_time, status_pemesanan) VALUES (?, ?, ?, ?, ?)";
    const values = [customerId, sellerId, transactionDate, transactionTime, statusPemesanan];

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
    const query = "INSERT INTO TransactionDetail (transaction_id, product_id, quantity) VALUES (?, ?, ?)";

    for (const detail of transactionDetails) {
        const { transactionId, productId, quantity } = detail;
        const values = [transactionId, productId, quantity];
        await db.query(query, values);
    }
};

module.exports = {
    insertTransactionHeader,
    insertTransactionDetails,
};