const express = require("express");
const {
  createJurisdiction,
  getAllJurisdiction,
} = require("../controllers/jurisdictionController");

const {
  getAllOffice,
  createOffice,
  getOfficeDetails,
  updateOffice,
  deleteOffice,
} = require("../controllers/officeController");

const { isAuthenticatedUser, authorizedRoles } = require("../middleware/auth");
const router = express.Router();

//jurisdicction route
router.route("/jurisdiction").post(createJurisdiction);
router.route("/jurisd").get(getAllJurisdiction);

// office route
router.route("/office").get(getAllOffice);
router.route("/office/:id").get(getOfficeDetails);
router.route("/office/new").post(createOffice);
router.route("/updateOffice/:id").put(updateOffice);
router.route("/deleteOffice/:id").delete(deleteOffice);

// isAuthenticatedUser,authorizedRoles("admin"),
module.exports = router;
