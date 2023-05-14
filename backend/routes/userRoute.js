const express = require("express");
const {
  registerUser,
  loginUser,
  logout,
  getAllUsers,
  getIndividualUser,
  addFormId,
} = require("../controllers/userController");

const router = express.Router();
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logout);
router.route("/users").get(getAllUsers);
router.route("/users/:id").get(getIndividualUser);
router.route("/users/:id").patch(addFormId);
module.exports = router;
