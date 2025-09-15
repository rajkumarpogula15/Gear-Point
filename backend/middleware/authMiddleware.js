const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) return res.status(401).json({ message: "No token, authorization denied" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "dev_secret");

    req.user = {
      id: decoded.id,       // ✅ Ensure this is user _id
      email: decoded.email, // ✅ Pass email
      role: decoded.role,   // ✅ Pass role (admin/user)
    };

    next();
  } catch (error) {
    res.status(401).json({ message: "Token is not valid" });
  }
};

module.exports = authMiddleware;
