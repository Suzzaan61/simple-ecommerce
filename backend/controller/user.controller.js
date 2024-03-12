import User from "../model/user.model.js";
import bcryptjs from 'bcryptjs';

export const signin = async (req, res) => {
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