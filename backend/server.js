// backend/server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');

// Initialize app
const app = express();
const port = process.env.PORT || 5000;

// Database connection
require('./config/db'); // uses process.env.MONGO_URI

// Middleware
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(express.json()); // Parse incoming JSON

// Import Routes
const AuthRoute = require('./routes/AuthRoute');
const BikesRoute = require('./routes/BikesRoute');
const UserRoute = require('./routes/UserRoute');
const OrderRoute = require('./routes/OrderRoute');
const AccessoriesRoute = require('./routes/AccessoriesRoute');
const QueriesRoute = require('./routes/QueriesRoute');

// Mount Routes with proper API prefix
app.use('/api/auth', AuthRoute);

app.use('/api/bikes', BikesRoute);
app.use('/api/users', UserRoute);
app.use('/api/orders', OrderRoute);
app.use('/api/accessories', AccessoriesRoute);
app.use('/api/queries', QueriesRoute);

// Health check route
app.get('/', (req, res) => {
  res.status(200).json({ message: 'API is running...' });
});

// Start server
app.listen(port, () => console.log(`✅ Server running on port ${port}`));
