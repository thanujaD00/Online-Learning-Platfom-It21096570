const Payment = require("../models/Payment");
const { initiatePaymentService } = require("../services/paymentService");

const initiatePayment = async (req, res) => {
  try {
    const { userId, courseId, amount } = req.body;

    // Create a new payment record with "pending" status
    const payment = new Payment({ userId, courseId, amount });

    // Simulate a payment initiation with a placeholder
    const paymentResult = await initiatePaymentService(payment);

    res.status(201).json({ message: "Payment initiated", payment: paymentResult });
  } catch (err) {
    console.error("Error initiating payment:", err);
    res.status(500).json({ error: "Payment initiation failed" });
  }
};

module.exports = { initiatePayment };
