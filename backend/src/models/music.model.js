const mongoose = require('mongoose');

const musicSchema = new mongoose.Schema({
    uri:{
        type:String,
        required:true,
    },
    musicFileId: {
    type: String,
    required: true,
},
     coverImage:{
        type:String,
        default:"",
    },
    coverFileId: {
    type: String,
    default: "",
},
    title:{
        type:String,
        required:true,
    },
    artist:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true,
    }
})

const musicModel = mongoose.model("music",musicSchema)

module.exports=musicModel;