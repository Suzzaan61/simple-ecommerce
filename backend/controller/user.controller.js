import User from "../model/user.model.js";
import bcryptjs from 'bcryptjs';
import jwt from "jsonwebtoken";

export const signUp = async (req, res) => {
    try{
        const {username, email, password, confirmPassword} = req.body;
        if (!username || !email || !password) {
            return res.status(400).json({error: 'Username or email or password'});
        }
        if(password !== confirmPassword) {
            return res.status(400).json({error: 'Passwords do not match'});
        }

        const hashedPassword = bcryptjs.hashSync(password, 12);
        const newUser = new User({
            username,
            email,
            password:hashedPassword,
        });
        await newUser.save();
        return res.status(200).json({message:"Successfully signup",user: newUser});

    }  catch (err){
        return res.status(400).json({error: err.message});
    }
}

 export const signIn = async (req, res) => {
    try {
        const {email, password} = req.body;
        if (!email || !password) {
            return res.status(400).json({error: 'Email or password is required'});
        }
        const userExists = await User.findOne({email: email});
        if (!userExists) {
            return res.status(400).json({error: 'User Not Found'});
        }
        const validPassword = await bcryptjs.compareSync(password, userExists.password);
        if (!validPassword) {
            return res.status(400).json({error: 'Invalid Credentials'});
        }
        const token = jwt.sign({id: userExists._id}, process.env.SECRET);

        return res.status(200).json({message:"Successfully sign in",user:userExists,token});


    } catch (err){
        return res.status(401).json({err: 'Unauthorized', error: err.message});
    }
}