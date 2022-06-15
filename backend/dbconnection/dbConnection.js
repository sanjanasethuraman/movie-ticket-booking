import mongoose from "mongoose";
import {} from "dotenv/config";

mongoose.connect(
    process.env.MONGODB_URI,
    {useNewUrlParser: true, useUnifiedTopology: true}, (err, res) => {
        try {
            console.log("Connected to database");
        } catch (err) {
            throw err;
        }
    }
);

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Establishing MongoDB connection");
});
connection.on('error', console.error.bind(console, 'connection error:'));