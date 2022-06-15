import { validationResult } from "express-validator";
import { Booking } from "../models/booking";
import { Show } from "../models/show";
import { Theatres } from "../models/theatre";

const getShows = async (req, res, next) => {
    const {date, movieName, theatreName } = req.body;

    const getShow = await Show.find({ date: date, movieName: movieName, theatreName: theatreName });

    if (!getShow) {
        return res.status(400).json({ error: "Sorry, the show does not exist" });
    }

    return res.status(200).json({getShow});
}


const bookShow = async () => {
    const { movieName, theatreName, pickedSeats } = req.body;

    const getTheatre = await Theatres.find({ name: theatreName });

    if (!getTheatre) {
        return res.status(400).json({ error: "Theatre does not exist" });
    }

    const getShow = await Show.find({ movieName: movieName });

    if (!getShow) {
        return res.status(400).json({ error: "Show does not exist" });
    }
}

export {getShows, bookShow};