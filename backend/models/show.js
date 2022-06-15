import mongoose from "mongoose";

const showSchema = mongoose.Schema({
    theatreId: {
        type: String,
    },
    movieId: {
        type: String,
    },
})