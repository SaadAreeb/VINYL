const musicModel = require("../models/music.model");
const albumModel = require("../models/album.model");
const userModel = require("../models/user.model");

async function search(req, res) {

    const { q } = req.query;

    if (!q) {
        return res.status(400).json({
            message: "Search query is required",
        });
    }

    // Search Songs
    const songs = await musicModel
        .find({
            title: {
                $regex: q,
                $options: "i",
            },
        })
        .populate("artist", "username");

    // Search Albums
    const albums = await albumModel
        .find({
            title: {
                $regex: q,
                $options: "i",
            },
        })
        .populate("artist", "username");

    // Search Artists
    const artists = await userModel
        .find({
            role: "artist",
            username: {
                $regex: q,
                $options: "i",
            },
        })
        .select("username email");

    return res.status(200).json({
        message: "Search completed successfully",
        songs,
        albums,
        artists,
    });
}

module.exports = {
    search,
};