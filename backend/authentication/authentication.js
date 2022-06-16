import jwt from "jsonwebtoken";
import {} from "dotenv/config";

const verifyLoginToken = (req, res, next) => {
    try {
        const token = req.headers["authorization"].split(' ')[1];
        const decoded = jwt.verify(token, process.env.LOGIN_TOKEN_KEY);
        req.tokenData = decoded;
        next();
    } 
    catch (err) {
        return res.status(401).json({ error: "Please log in" });
    }
};

export { verifyLoginToken };