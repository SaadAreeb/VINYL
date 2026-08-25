const express = require("express");

const authController = require("../controller/auth.controller");

const authMiddleware = require("../middleware/auth.middleware");

const {
    authLimiter
} = require("../middleware/rateLimit.middleware");

const router = express.Router();


// ================= REGISTER =================

router.post(
    "/register",
    authLimiter,
    authController.registerUser
);


// ================= LOGIN =================

router.post(
    "/login",
    authLimiter,
    authController.loginUser
);


// ================= CHANGE PASSWORD =================

router.patch(
    "/change-password",
    authMiddleware.auth,
    authController.changePassword
);


module.exports = router;