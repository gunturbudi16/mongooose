const router = require("express").Router();
const userController = require("../controllers/adress");

router.post("/", userController.addresss);

module.exports = router;
