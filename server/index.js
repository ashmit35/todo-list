import express from "express";
import Connection from "./database/db.js";
import cors from 'cors';
import Routes from './routes/route.js'
import bodyParser from "body-parser";

const app = express();
const PORT = 8000;
const HOSTNAME = "127.0.0.1";


app.use(cors());
app.use(bodyParser.json({ extended: true }));//to help in printing json data to console
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', Routes);

Connection();
app.listen(PORT, HOSTNAME, () => {
    console.log(`Server is running on http://${HOSTNAME}:${PORT}`);
})