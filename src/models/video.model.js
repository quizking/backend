import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema({
    videoFile:{
        type:String, //cloudinary url
        required:true
    },
    thumnail:{
        type:String,
        required:true
    },
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true},
    duration:{
        type:Number,
        required:true
    },
    views:{
        type:NUmber,
        default:0,
        required:true
    },
    isPublished:{
        type:Boolean,
        default:true
    },

},
{
    timestamps:true
})
videoSchema.plugin(mongooseAggregatePaginate) // custom middleware plugin

export const Video = mongoose.model("Video",videoSchema)