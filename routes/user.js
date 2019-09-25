const router = require("express").Router(),
  userController = require("../controllers/user");

router.get("/all", userController.all);
router.get("/edit/:id", userController.getedit);
router.post("/edit/:id", userController.edit);
router.post("/add", userController.add);
router.delete("/remove/:id", userController.remove);

module.exports = router;
