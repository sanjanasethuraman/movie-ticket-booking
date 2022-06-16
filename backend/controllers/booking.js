import { validationResult } from "express-validator";
import { Booking } from "../models/booking";
import { Seat } from "../models/seat";
import { Show } from "../models/show";
import { Theatres } from "../models/theatre";
import { User } from "../models/user";

const getShows = async (req, res, next) => {

    const { email } = req.tokenData;

    const getUser = await checkUserExists({ email: email });

    if (!getUser) {
        return res.statu(400).json({ error: "User does not exist" });
    }
    
    const {date, movieName, theatreName } = req.body;

    const getShow = await Show.find({ date: date, movieName: movieName, theatreName: theatreName });

    if (!getShow) {
        return res.status(400).json({ error: "Sorry, the show does not exist" });
    }

    return res.status(200).json({getShow});
}


const bookShow = async (req, res, next) => {

    const { email } = req.tokenData;

    const getUser = await User.find({ email: email });

    if (!getUser) {
        return res.status(400).json({ error: "User does not exist" });
    }

    const userId = getUser._id;
    
    const standardPrice = 150;

    const { pickedSeats } = req.body;

    const { showId } = req.query;

    const getShow = await Show.findById({showId});

    if (!getShow) {
        return res.status(400).json({error: "Show does not exist"})
    }

    const { rows, movieName } = getShow;

    console.log(rows);

    for (let currentRow of rows) {
        for (let currentSeat of currentRow) {
            const { isReserved } = currentSeat;
            if (pickedSeats.find(currentSeat.number)) {
                isReserved = true;
            }
        }
    }
    const totalCost = pickedSeats.length * standardPrice;

    const createBooking = Booking.create({
        userId,
        movieName,
        showId,
        pickedSeats,
        totalCost,
    });

    if (createBooking.$response) {
        return res.status(400).json({ error: "Error in booking, try again" });
    }


    return res.status(200).json({ data: `Total cost of booking is ${totalCost}` });
}

export {getShows, bookShow};