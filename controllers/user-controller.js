import User from "../model/User.js"
import bcrypt from "bcrypt";

export const getAllUser = async (req, res, next) => {
    let users;
    try {
        users = await User.find();
    } catch (err) {
        console.log(err);
    }
    if (!users) {
        return res.status(404).json({ message: "No User found" });
    }
    return res.status(200).json({users});
}

export const signup = async (req, res, next)=>{
    const {name, email, password} = req.body

    let existingUser;
    try{
        existingUser = await User.findOne({email})
    }catch(err){
        console.log(err);
    }

    if (existingUser) {
        return res.status(400).json({message: "User alreaydy exist try logging in"})
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const user = new User({
        name,
        email,
        password: hashedPassword
    })

    try{
        await user.save();
    }catch(err){
        console.log(err);
    }

    return res.status(201).json({user})
}

export const login = async (req, res, next) =>{
    const {email, password} = req.body;

    let existingUser;
    try{
        existingUser = await User.findOne({email})
    }catch(err){
        console.log(err);
    }

    if (!existingUser) {
        console.log("yes")
        return res.status(200).json({message: "user not found"})
    }

    const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);

    if (!isPasswordCorrect) {
        return res.status(400).json({message:"incorrect password"})
    }

    return res.status(200).json({message:"login successful"})
}