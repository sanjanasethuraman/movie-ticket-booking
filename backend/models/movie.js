import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
    movieName: {
        type: String,
        required: true
    },
    releaseDate: {
        type: Date
    },
    removalDate: {
        type: Date
    },
    duration: {
        type: Number
    }
},
{
    collection: 'movies'
});

const Movies = mongoose.model('Movies', movieSchema);
export { Movies };