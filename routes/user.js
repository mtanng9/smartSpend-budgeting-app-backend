const express = require('express');
const { verifyOwner, getUserIdFromToken } = require('../util/auth');
const UserController = require('../controllers/UserController');
const router = express.Router();

router.get("/", UserController.getUserById)

router.put("/", UserController.updateUser)

router.delete("/", UserController.deleteUser)

module.exports = router;