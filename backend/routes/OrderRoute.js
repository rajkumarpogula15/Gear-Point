const express = require('express');
const router = express.Router();
const Orders = require('../models/OrdersModel');
const Users = require('../models/UsersModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Get all orders
router.get('/all', async (req, res) => {
    try {
        const orders = await Orders.find();
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Add a new order
router.post('/add', async (req, res) => {
    
    try {
        const { email, phone, id:pid, address, password, price } = req.body;
        // console.log(req.body);
        // Validate required fields
        if (!email || !phone || !pid || !address || !password ) {
            return res.status(400).json({ message: "All fields are required" });
        }
        
        // Validate email and phone format
        if (!/^\S+@\S+\.\S+$/.test(email)) {
            return res.status(400).json({ message: "Invalid email format" });
        }
        if (!/^\d{10}$/.test(phone)) {
            return res.status(400).json({ message: "Invalid phone number format" });
        }

        //email validation
        //Email
        const user = await Users.findOne({ email })
        // console.log(user);
        if (!user) {
            return res.status(500).json({ message: `Invalid Email` })
        }
        console.log("Sucessfully email checked");
        const checkpassword = await bcrypt.compare(password, user.password)
        if (!checkpassword) {
            return res.status(500).json({ message: `Invalid Password` })
            // alert("Invalid Password");
        }

        // Create new order
        const newOrder = await new Orders({ email, phone, pid, address, password, price });
        // console.log(newOrder);
        await newOrder.save();

        res.status(201).json(newOrder);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Edit an existing order
router.put('/edit/:id', async (req, res) => {
    try {
        const id = req.params.id;

        // Find the existing order
        const existingOrder = await Orders.findById(id);
        if (!existingOrder) {
            return res.status(404).json({ message: "Order not found" });
        }

        // Update the order
        const updatedOrder = await Orders.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(updatedOrder);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Delete an order
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;

        // Find the existing order
        const existingOrder = await Orders.findById(id);
        if (!existingOrder) {
            return res.status(404).json({ message: "Order not found" });
        }

        // Delete the order
        await Orders.findByIdAndDelete(id);
        res.status(200).json({ message: "Order deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
