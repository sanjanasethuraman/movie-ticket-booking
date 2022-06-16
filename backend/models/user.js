import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
    },
    registerType: {
        type: String,
    }
},
{
    collection: 'users'
});

class UserMethods {
    static async encryptPassword(password) {
        const hashedPassword = await bcrypt.hash(password, 10);
        return hashedPassword;
    }

    static async generateToken(email, registerType) {
        const token = jsonwebtoken.sign({
            email,
            date: new Date(),
            registerType
        }, process.env.LOGIN_TOKEN_KEY,{
            expiresIn: "30d",
        });
        return token;
    }

    static async passwordEncrypt(password) {
        const hash=await bcrypt.hash(password,10);
        const passwordHash=hash;
        return passwordHash;
    }

    static async passwordCompare(password,hashValue){
        const value=await bcrypt.compare(password,hashValue);
        return value;
    }

    static async checkUserExists(email){
        const user = await this.findOne({ email, registerType: "user" });
        let result = (user)? user : undefined;
        return result;
    }

    static async checkAdminExists(email){
        const user = await this.findOne({ email: email, registerType: "admin"});
        let result = (user)? user : undefined;
        return result;
    }
}

userSchema.loadClass(UserMethods);

const User = mongoose.model('User', userSchema);
export { User };