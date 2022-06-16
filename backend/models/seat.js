import mongoose from "mongoose";

const seatSchema = new mongoose.Schema({
    number: {
        type: String
    },
    isReserved: {
        type: Boolean
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