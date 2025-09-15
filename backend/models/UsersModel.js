// backend/models/UsersModel.js
const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  phone: { type: String, required: false, unique: true }, // string preserves leading zeros, +country etc.
  password: { type: String, required: true }, // hashed password
  address: { type: String, required: false },
  role: { type: String, required: false, default: 'user' }
}, { timestamps: true });

module.exports = mongoose.model('Users', UsersSchema);
