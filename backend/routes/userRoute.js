const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  logout,
  getUser,
  logginStatus,
  updateUser,
  changepassword,
  forgotPassword,
} = require("../controllers/userController");
const protect = require("../middleWare/authMiddleware");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout", logout);
router.get("/getuser", protect, getUser);
router.get("/loggedin", logginStatus);
router.patch("/updateuser", protect, updateUser);
router.patch("/changepassword", protect, changepassword);
router.post("/forgetpassword", forgotPassword);

module.exports = router;
