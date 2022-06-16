import { validationResult } from "express-validator";
import { User } from "../models/user.js";
import { Theatres } from "../models/theatre.js";
import { Seat } from "../models/seat.js";
import { Show } from "../models/show.js";

const signup = async (req, res, next) => {
    const { firstName, lastName, email, password, confirmPassword, registerType } = req.body;
    
    if (!(firstName && lastName && email && password && confirmPassword)) {
        return res.status(401).json({ error: "All inputs are requrired" });
    }

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
        registerType: "admin"
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

    const getUser = await User.checkUserExists(email);
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

const addTheatre = async (req, res, next) => {
    const { email } = req.tokenData;

    const getAdmin = await User.checkAdminExists(email);

    if (!getAdmin) {
        return res.status(409).json({ error: "Admin does not exist, please sign up" });
    }

    const { name, ticketPrice, city } = req.body;

    if (!(name && ticketPrice && city)) {
        return res.status(400).json({ error: "All inputs are required" });
    }

    const getTheatre = await Theatres.find({name: name, city: city });
   
    if (getTheatre.length != 0) {
        return res.status(400).json({error: "Theatre already exists." });
    }

    const createTheatre = await Theatres.create({
        name,
        ticketPrice,
        city
    })

    if (createTheatre.$response !== undefined) {
        return res.status(400).json({ data: "An error occurred" });
    } 

    return res.status(201).json({data: "Theatre successfully added" });
}

const addShow = async (req, res, next) => {
    const { theatreName, movieName, date, timeSlot } = req.body;

    const getTheatre = await Theatres.find({name: theatreName});

    if (!getTheatre) {
        return res.status(400).json({error: "Theatre does not exist" });
    }
    let threatreId = getTheatre._id;
    let rowsDefault = [];

    //create show
    const createShow = await Show.create({
        threatreId,
        movieName,
        date,
        timeSlot,
        rowsDefault
    })

    //get that particular show
    let showId = createShow._id;
    let isReserved = false;
    //add rows
    const rows = [];
    for(var row=1; row<=10; row++){
        var currRow = [];
        for(var seat=1; seat<=6; seat++){
            let seatCode ="";
            seatCode =seatCode.concat(row);
            seatCode =seatCode.concat(String.fromCharCode(65+seat-1));
            const createSeat = await Seat.create({
                number: seatCode,
                isReserved: isReserved,
                showId: showId
            })
            const createdSeat = await Seat.findOne({_id: createSeat._id});
           currRow.push(createdSeat._id);
        }
        rows.push(currRow);
        console.log(currRow);
        Show.findOneAndUpdate({_id: createShow._id}, {$push: { rows: [1,2,3,4]}});
    }

    
    const show = await Show.findOne({_id: createShow._id});
    console.log(show.rows);
    return res.status(201).json({data: "Show successfully added" });

}

export { signup, login, addTheatre, addShow };