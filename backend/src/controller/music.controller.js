const musicModel = require('../models/music.model');
const albumModel = require('../models/album.model');
const jwt=require("jsonwebtoken");
const { uploadFile, deleteFile } = require("../services/storage.service");
const { deleteAlbumWithMusics } = require("../services/delete.service");


/* FOR MUSIC */ 

async function createMusic (req,res){

const { title } = req.body;

const musicFile = req.files.music[0];

const coverFile = req.files.cover
    ? req.files.cover[0]
    : null;

    const result = await uploadFile(
    musicFile.buffer.toString("base64")
);
console.log("Music upload result:", result);
const musicFileId = result.fileId;

let coverImage = "";
let coverFileId = "";
if (coverFile) {

    const coverResult = await uploadFile(
        coverFile.buffer.toString("base64")
    );

    coverImage = coverResult.url;
       coverFileId = coverResult.fileId;
       console.log("Cover upload result:", coverResult);
}

const music = await musicModel.create({
uri:result.url,
musicFileId,
 coverImage,
 coverFileId,
title,
artist:req.user.id,
})
console.log("Saved document:", music.toObject());

res.status(201).json({
    message:"music created succesfully",
    music:{
        id: music._id,
    uri: music.uri,
    musicFileId: music.musicFileId,
    coverImage: music.coverImage,
    coverFileId: music.coverFileId,
    title: music.title,
    artist: music.artist,
    }
})
}

/* FOR ALBUM */

async function createAlbum (req,res){

         
        const {title,musics}=req.body;

        const album = await albumModel.create({
            title,
            artist:req.user.id,
            musics:musics,
        })
        res.status(201).json({
            message:"album created successfully",
            album:{
                id:album._id,
                title:album.title,
                artist:album.artist,
                musics:album.musics,
            }
        })



    }

    /*Listen All album*/
    async function getAllAlbums(req, res) {

    try {

        const albums = await albumModel
            .find()
            .populate("artist", "username email")
            .populate("musics");

        return res.status(200).json({
            message: "Albums fetched successfully",
            albums,
        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({
            message: "Failed to fetch albums",
        });

    }

}

/*Listen All Music*/
async function getAllMusics(req,res){

   const musics = await musicModel.find().sort({ createdAt: -1 }).populate("artist","username email")

   res.status(200).json({
    message:"musics fetched succesfully",
    musics:musics,
   })

}

/*delete music*/
async function deleteMusic(req, res) {

    const { id } = req.params;

    const music = await musicModel.findById(id);

    if (!music) {
        return res.status(404).json({
            message: "Music not found",
        });
    }

    if (music.artist.toString() !== req.user.id) {
        return res.status(403).json({
            message: "You are not allowed to delete this music",
        });
    }
    console.log(music);
console.log("musicFileId:", music.musicFileId);
console.log("coverFileId:", music.coverFileId);
    // Delete MP3 from ImageKit
    await deleteFile(music.musicFileId);

    // Delete Cover from ImageKit (if it exists)
    if (music.coverFileId) {
        await deleteFile(music.coverFileId);
    }

    // Delete MongoDB document
    await music.deleteOne();

    // Send response
    return res.status(200).json({
        message: "Music deleted successfully",
    });
}

//get album 

async function getAlbumById(req, res) {

    try {

        const album = await albumModel
            .findById(req.params.id)
            .populate("artist", "username email")
            .populate({
                path: "musics",
                populate: {
                    path: "artist",
                    select: "username",
                },
            });

        if (!album) {
            return res.status(404).json({
                message: "Album not found",
            });
        }

        return res.status(200).json({
            album,
        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({
            message: "Failed to fetch album",
        });

    }

}

//delete album
async function deleteAlbum(req, res) {

    const { id } = req.params;

    const album = await albumModel.findById(id);

    if (!album) {
        return res.status(404).json({
            message: "Album not found",
        });
    }

    if (album.artist.toString() !== req.user.id) {
        return res.status(403).json({
            message: "You are not allowed to delete this album",
        });
    }
    await deleteAlbumWithMusics(album);

return res.status(200).json({
    message: "Album deleted successfully",
});

}
module.exports={createMusic,createAlbum,getAllMusics,deleteMusic,deleteAlbum,getAllAlbums,getAlbumById}