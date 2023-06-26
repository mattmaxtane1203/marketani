const TransactionController = require("../controllers/TransactionController")
const express = require("express")
const router = express.Router()

router.get("/",(req,res) => {
    return res.json("Transcation Router Success!")
})

router.post('/createTransaction', async (req, res) => {
    const { currentCustomerId, separatedItems } = req.body;
    console.log("Transaction Customer ID: "+ currentCustomerId)
    try {
        await TransactionController.createTransaction(currentCustomerId, separatedItems);
        res.json({ success: true, message: 'Transactions created successfully' });
    } catch (error) {
        console.error('Error creating transactions:', error);
        res.status(500).json({ success: false, message: 'Failed to create transactions' });
    }
});

module.exports = router