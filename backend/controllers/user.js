import { validationResult } from "express-validator";
import { User } from "../models/user.js";

const signup = async (req, res, next) => {
    const { firstName, lastName, email, password, confirmPassword, registerType } = req.body;
    
    if (!(firstName && lastName && email && password && confirmPassword)) {
        return res.status(401).json({ error: "All inputs are requrired" });
    }

    console.log(req.body);

    if (password !== confirmPassword) {
        return res.status(403).json({ error: "Password and Confirm password do not match"})
    }

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        console.log({errors: errors.array()});
        return res.status(400).json({ errors: errors.array()});
    }

    const getUser = await User.findOne({ email: email });

    if (getUser) {
        return res.status(409).json({ error: "User already exists, please try logging in" });
    }

    const encryptedPassword = await User.encryptPassword(password);

    const createUser = await User.create({
        lastName,
        firstName,
        email: email.toLowerCase(),
        password: encryptedPassword,
        registerType
    });
    

    if (createUser.$response !== undefined) {
        return res.status(400).json({ error: createUser.$response.error })
    }

    return res.status(201).json({ data: `${registerType} has been registered. Please login.` });
}

const login = async (req, res, next) => {
    const { email, password } = req.body;

    if(!email || !password){
        return res.status(400).json({error: "All inputs are required"});
    }

    const getUser = await User.findOne({ email });
    if(getUser==null){
        return res.status(200).json({error:"User not found"});
    }
    
    const passwordMatch = await User.passwordCompare(password, getUser.password);

    let loginToken;

    if(passwordMatch){
        loginToken = await User.generateToken(email, getUser._id);
    }
    else{
        return res.status(400).json({error:"Invalid Credentials"});
    }

    return res.status(200).json({loggedIn: true, token: loginToken});
}

export { signup, login };