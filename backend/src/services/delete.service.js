const { deleteFile } = require("./storage.service");
const musicModel = require("../models/music.model");
const albumModel = require("../models/album.model");

/* Delete a single music + its files */
async function deleteMusicWithFiles(music) {
    if (music.musicFileId) {
        await deleteFile(music.musicFileId);
    }

    if (music.coverFileId) {
        await deleteFile(music.coverFileId);
    }

    await music.deleteOne();
}

/* Delete an album along with all its songs */
async function deleteAlbumWithMusics(album) {

    for (const musicId of album.musics) {

        const music = await musicModel.findById(musicId);

        if (music) {
            await deleteMusicWithFiles(music);
        }
    }

    await album.deleteOne();
}

/* Delete an artist along with all albums and songs */
async function deleteArtistWithData(artist) {

    const albums = await albumModel.find({
        artist: artist._id,
    });

    for (const album of albums) {
        await deleteAlbumWithMusics(album);
    }

    // Delete standalone songs (songs not inside any album)
    const musics = await musicModel.find({
        artist: artist._id,
    });

    for (const music of musics) {
        await deleteMusicWithFiles(music);
    }

    await artist.deleteOne();
}

/* Delete a normal user */
async function deleteUserWithData(user) {
    await user.deleteOne();
}

module.exports = {
    deleteMusicWithFiles,
    deleteAlbumWithMusics,
    deleteArtistWithData,
    deleteUserWithData,
};