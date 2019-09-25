const router = require("express").Router(),
  userController = require("../controllers/adress");

router.post("/all", userController.addresss);

module.exports = router;
