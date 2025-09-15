const express = require("express");
const router = express.Router();
const Orders = require("../models/OrdersModel");
const authMiddleware = require("../middleware/authMiddleware");

// ---------------- GET all orders (Admin only) ----------------
router.get("/all", authMiddleware, async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Access denied" });
    }
    const orders = await Orders.find().sort({ orderedAt: -1 });
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ---------------- GET orders for the logged-in user ----------------
router.get("/user", authMiddleware, async (req, res) => {
  try {
    const orders = await Orders.find({ userId: req.user.id }).sort({ orderedAt: -1 });
    return res.status(200).json(orders);
  } catch (error) {
    console.error("Error fetching user orders:", error);
    res.status(500).json({ message: error.message });
  }
});

// ---------------- ADD a new order ----------------
router.post("/add", authMiddleware, async (req, res) => {
  try {
    console.log("🔵 Incoming Order Body:", req.body);
    console.log("🟢 Authenticated User:", req.user);

    const { phone, address, price, pid, name } = req.body;

    if (!phone || !address || !price || !pid || !name) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newOrder = new Orders({
      userId: req.user.id, // ✅ STORE USER ID
      name,
      email: req.user.email,
      phone,
      pid,
      address,
      price,
    });

    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (error) {
    console.error("Order creation error:", error);
    res.status(500).json({ message: error.message });
  }
});

// ---------------- EDIT an order ----------------
router.put("/edit/:id", authMiddleware, async (req, res) => {
  try {
    const existingOrder = await Orders.findById(req.params.id);
    if (!existingOrder) return res.status(404).json({ message: "Order not found" });

    if (existingOrder.userId.toString() !== req.user.id && req.user.role !== "admin") {
      return res.status(403).json({ message: "Unauthorized" });
    }

    const updatedOrder = await Orders.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedOrder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ---------------- DELETE an order ----------------
router.delete("/delete/:id", authMiddleware, async (req, res) => {
  try {
    const existingOrder = await Orders.findById(req.params.id);
    if (!existingOrder) return res.status(404).json({ message: "Order not found" });

    if (existingOrder.userId.toString() !== req.user.id && req.user.role !== "admin") {
      return res.status(403).json({ message: "Unauthorized" });
    }

    await Orders.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Order deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
