import mongoose, {Schema} from  "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const username = new Schema(
    {
        username:{
            type:String,
            unique:true,
            lowercase:true,
            trim:true,
            index:true,
            required:true
        },
        email:{
            type:String,
            unique:true,
            lowercase:true,
            trim:true,
            required:true
            
        },
        fullName:{
            type:String,
            trim:true,
            index:true,
            required:true
        },
        avatar:{
            type:String, // cloudinary url
            required:true
        },
        coverImage:{
            type:String,
            required:true
        },
        WatchHistory:[
            {
            type:Schema.Types.ObjectId,
            ref:"Video"
            }
        ],
        password:{
            type:String,
            required:[true,'Password is Required']
        },
        refreshToken:{
            type: String,
        },
    },
{
        timestamps:true
    }
)
UserSchema.pre("save",async function (next) {
    if(!this.isModified("password")) return next();

    this.password =bcrypt.hash(this.password,10)
    next()
})

userSchema.methods.isPasswordCorrect = async function (password)
{
    return await bcrypt.compare(password,this.password)
}
userSchema.methods.generateAcessToken =(){
    jwt.sign(
        {
            _id: this._id,
            email:this.email,
            username : this.UserSchema,
            fullName : this.fullName
    },
    process.env.ACCESS_TOKEN_SECERT,
    {
    expiresIn: process.env.ACCESS_TOKEN_EXPIRY
    }
)
    
}

userSchema.methods.generateAcessToken =(){
    return jwt.sign(
        {
            _id: this._id,
    },
    process.env.REFRESH_TOKEN_SECERT,
    {
    expiresIn: process.env.REFRESH_TOKEN_EXPIRY
    }
)
    
}

export const User = mongoose.model("User",UserSchema)