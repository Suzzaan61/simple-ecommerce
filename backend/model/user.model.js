import mongoose from "mongoose";

const Schema = mongoose.Schema;
const UserSchema = new Schema({
    username:{
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
    },
    profilePicture:{
        type: String,
        default:"https://www.iprcenter.gov/image-repository/blank-profile-picture.png/@@images/image.png",
    }
},{timestamps:true});

const User = mongoose.model("User", UserSchema);
export default User;