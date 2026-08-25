const { ImageKit } = require("@imagekit/nodejs/index.js");

const client = new ImageKit({
    privateKey: process.env["IMAGEKIT_PRIVATE_KEY"],
});

async function uploadFile(file) {
    const result = await client.files.upload({
        file,
        fileName: "music_" + Date.now(),
        folder: "Backend/music",
    });

    return result;
}

async function deleteFile(fileId) {
    return await client.files.delete(fileId);
}

module.exports = {
    uploadFile,
    deleteFile,
};