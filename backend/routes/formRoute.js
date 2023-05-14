const express = require("express");
const {
  newForm,
  getAllForms,
  getIndividualForm,
} = require("../controllers/formController");

const { isAuthenticatedUser, authorizedRoles } = require("../middleware/auth");
const router = express.Router();
router.route("/form/new").post(newForm);
router.route("/forms").get(getAllForms);
router.route("/forms/:id").get(getIndividualForm);
module.exports = router;
