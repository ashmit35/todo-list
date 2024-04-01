import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = () => {

    const MONGO_URL = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.4irb47h.mongodb.net/?retryWrites=true&w=majority`

    mongoose.connect(MONGO_URL, { useNewUrlParser: true })
        .then(() => console.log("Mongo connected"))
        .catch((err) => console.log(`Mongo error: ${err}`))
}

export default Connection;