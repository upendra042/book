// server/routes/order.js

const express = require('express');
const router = express.Router(); // ✅ This line was missing

const jwt = require('jsonwebtoken');
const Order = require('../models/Order'); // adjust path if needed

// Get orders for the authenticated user
router.get('/', async (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).send("Unauthorized");

  try {
    const { id } = jwt.verify(token, process.env.JWT_SECRET);
    const orders = await Order.find({ userId: id });
    res.json(orders);
  } catch (err) {
    console.error(err);
    res.status(401).send("Invalid token");
  }
});

// You can also add POST /orders here for placing an order later

module.exports = router;
