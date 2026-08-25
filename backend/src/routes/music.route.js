const express = require("express");

const multer = require("multer");

const musicController = require("../controller/music.controller");

const authMiddleware = require("../middleware/auth.middleware");

const {
    uploadLimiter
} = require("../middleware/rateLimit.middleware");

const router = express.Router();


// ================= MULTER =================

const upload = multer({

    storage: multer.memoryStorage(),

    limits: {
        fileSize: 20 * 1024 * 1024, // 20 MB
    },

});


// ================= Artist Routes =================


// Upload Music

router.post(

    "/upload",

    uploadLimiter,

    authMiddleware.authArtist,

    upload.fields([
        {
            name: "music",
            maxCount: 1,
        },
        {
            name: "cover",
            maxCount: 1,
        },
    ]),

    musicController.createMusic

);


// Create Album

router.post(

    "/album",

    authMiddleware.authArtist,

    musicController.createAlbum

);


// Delete Music

router.delete(

    "/:id",

    authMiddleware.authArtist,

    musicController.deleteMusic

);


// Delete Album

router.delete(

    "/album/:id",

    authMiddleware.authArtist,

    musicController.deleteAlbum

);


// ================= Authenticated User Routes =================


// Any logged-in user (Artist or Listener) can browse music

router.get(

    "/",

    authMiddleware.auth,

    musicController.getAllMusics

);


// Any logged-in user can browse albums

router.get(

    "/albums",

    authMiddleware.auth,

    musicController.getAllAlbums

);


// Any logged-in user can open an album

router.get(

    "/album/:id",

    authMiddleware.auth,

    musicController.getAlbumById

);


module.exports = router;