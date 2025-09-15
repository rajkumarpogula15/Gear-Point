const mongoose = require("mongoose");

const OrdersSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  },
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  pid: { type: String, required: true },
  address: { type: String, required: true },
  price: { type: Number, required: true },
  orderedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Orders", OrdersSchema);
