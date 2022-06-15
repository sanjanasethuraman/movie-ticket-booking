import mongoose from "mongoose";

const bookingSchema = mongoose.Schema({
    userId: {
        type: String,
    },
    movieId: {
        type: String,
    },
    theatreId: {
        type: String,
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