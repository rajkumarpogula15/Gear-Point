const express = require('express');
const router = express.Router();
const Products = require('../models/ProductsModel');
const validate = require('../config/auth');

// Method : GET || API : /products/all
router.get('/all', async (req, res) => {
    try {
        const products = await Products.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Method : POST || API : /products/add
router.post('/add', async (req, res) => {
    const { title, img, price } = req.body;
    if (!title || !img || !price) {
        return res.status(400).json({ message: "All fields are required" });
    }
    try {
        const newProduct = new Products({ title, img, price });
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Method : PUT || API : /products/edit/:id
router.put('/edit/:id', async (req, res) => {
    try {
        const updatedProduct = await Products.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Method : DELETE || API : /products/delete/:id
router.delete('/delete/:id', async (req, res) => {
    try {
        const deletedProduct = await Products.findByIdAndDelete(req.params.id);
        if (!deletedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json({ message: "Product Deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
