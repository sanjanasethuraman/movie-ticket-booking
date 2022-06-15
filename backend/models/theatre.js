import mongoose from "mongoose";

const theatreSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    ticketPrice: {
        type: Number,
    },
    city: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    
},
{
    collection: 'theatres'
})

const Theatres = mongoose.model('Theatre', theatreSchema);
export { Theatres };