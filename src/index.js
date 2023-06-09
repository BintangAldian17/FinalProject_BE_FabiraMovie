// require('dotenv').config();
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')
const db = require('../src/config/Database')
const router = require('./routes/router');

//untuk menggunakan .env
dotenv.config()
const app = express();

// ketika di deploy port berdasarkan hostingan
const port = process.env.PORT || 8800

try {
    db.sync()
    console.log("Database Connected");
} catch (error) {
    console.error("Unable to connect to the database:", error);
}

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//supaya bisa akses cookienya
app.use(cookieParser());
app.use(cors({ origin: ['http://localhost:3000', 'https://fabiramovies.vercel.app'], credentials: true }));

app.use('/', router);


app.listen(port, () => { console.log(`Server Running ${port}`) });
