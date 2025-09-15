// backend/config/auth.js
const jwt = require('jsonwebtoken');

const SECRET_KEY = process.env.JWT_SECRET;
if (!SECRET_KEY) {
  console.warn('Warning: JWT_SECRET not set. Please set JWT_SECRET in .env for production.');
}

const validateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'] || req.headers['Authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // header: "Bearer <token>"
  if (!token) return res.status(401).json({ message: 'Access Denied: No Token Provided' });

  try {
    const decoded = jwt.verify(token, SECRET_KEY || 'dev_secret'); // fallback only for dev
    // IMPORTANT: attach user info so other middlewares/routes can use it
    req.user = decoded; // decoded should contain { id, role, iat, exp }
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid or expired token', error: err.message });
  }
};

const validateTokenAdmin = (req, res, next) => {
  validateToken(req, res, () => {
    if (!req.user || req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Access Denied: Admins Only' });
    }
    next();
  });
};

module.exports = { validateToken, validateTokenAdmin };
