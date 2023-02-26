const express = require("express");
const userController = require("../controllers/user.controller");

const router = express.Router();

router.get("/user", userController.showUser);
router.post("/user", userController.saveUser);
router.put("/user/:id", userController.editUser);
router.delete("/user/:id", userController.deleteUser);

module.exports = router;
