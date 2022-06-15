import mongoose from "mongoose";

const showSchema = mongoose.Schema({
    theatreId: {
        type: String,
    },
    movieName: {
        type: String,
    },
    date: {
        type: date
    },
    timeSlot:{
        type: String
    },
    rows: {
        type: Array
    }

})

const Show = mongoose.model('Shows', showSchema);
export { Show };