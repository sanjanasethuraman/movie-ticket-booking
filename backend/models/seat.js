import mongoose from "mongoose";

const seatSchema = new mongoose.Schema({
    number: {
        type: String,
        required: true
    },
    isReserved: {
        type: Boolean,
        default: false
    },
    showId:{
        type: String
    }
},
{
    collection: 'seats'
});

const Seat = mongoose.model('Seats', seatSchema);
export { Seat };