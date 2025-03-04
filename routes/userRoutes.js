const express = require("express");
const User = require("../models/User");
const protect = require("../middleware/authMiddleware");
const { authenticateUser, logoutUser, blacklistedTokens } = require("../middleware/authMiddleware");

const router = express.Router();

// User Profile (Protected)
router.get("/profile", authenticateUser, async (req, res) => {
    try {
      const user = await User.findById(req.user).select("-password");
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

module.exports = router;
