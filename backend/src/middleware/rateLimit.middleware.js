const rateLimit = require("express-rate-limit");


// ================= GLOBAL LIMITER =================

const globalLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,

    max: 200,

    standardHeaders: true,
    legacyHeaders: false,

    message: {
        message: "Too many requests. Please try again later.",
    },
});


// ================= AUTH LIMITER =================

const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,

    max: 10,

    standardHeaders: true,
    legacyHeaders: false,

    message: {
        message: "Too many authentication attempts. Please try again later.",
    },
});


// ================= UPLOAD LIMITER =================

const uploadLimiter = rateLimit({
    windowMs: 60 * 60 * 1000,

    max: 10,

    standardHeaders: true,
    legacyHeaders: false,

    message: {
        message: "Upload limit reached. Please try again later.",
    },
});


module.exports = {
    globalLimiter,
    authLimiter,
    uploadLimiter,
};