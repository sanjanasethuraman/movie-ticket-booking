import express from "express";
import {} from "dotenv/config";
import cors from "cors";
import bodyParser from "body-parser";
import { router as authRouter } from "./routes/user.js";
import { router as adminRouter } from "./routes/admin.js";

import {} from "./dbconnection/dbConnection.js";

const app = express();

app.use(cors());

//Code to send the data from form to server
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});

app.get("/", (req, res) => {
    res.send("Welcome to ticket booking app")
});

app.use("/auth", authRouter); 
app.use("/admin", adminRouter); 


