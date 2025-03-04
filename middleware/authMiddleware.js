const jwt = require("jsonwebtoken");

// Token Blacklist to store invalidated tokens
const blacklistedTokens = new Set();

const authenticateUser = (req, res, next) => {
  const authHeader = req.header("Authorization");

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Access Denied. No Token Provided." });
  }

  const token = authHeader.split(" ")[1];

  // Check if the token is blacklisted
  if (blacklistedTokens.has(token)) {
    return res.status(401).json({ message: "Invalid Token. Please log in again." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.userId;
    next();
  } catch (error) {
    console.error("JWT Verification Error:", error.message);
    res.status(401).json({ message: "Invalid or Expired Token" });
  }
};

// Function to blacklist token during logout
const logoutUser = (req, res) => {
  const authHeader = req.header("Authorization");
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(400).json({ message: "No token provided" });
  }

  const token = authHeader.split(" ")[1];
  blacklistedTokens.add(token); // Blacklist the token
  res.json({ message: "Logged out successfully" });
};

module.exports = { authenticateUser, logoutUser, blacklistedTokens };
