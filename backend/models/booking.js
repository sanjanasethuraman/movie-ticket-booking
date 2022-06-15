import mongoose from "mongoose";

const bookingSchema = mongoose.Schema({
    userId: {
        type: String,
    },
    movieName: {
        type: String,
    },
    showId: {
        type: String,
    },
    pickedSeats: {
        type: Array
    },
    price: {
        type: Number
    }
},
{
    collection: 'bookings'
});

const Bookings = mongoose.model('Booking', bookingSchema);
export { Bookings };