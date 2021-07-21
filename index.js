require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const router = require('./routes/productRoutes');

mongoose.connect(process.env.DBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => console.log("Database is connected"))
    .catch(err => console.log(err));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}))

app.use('/', router);

app.listen(5000, () => {
    console.log("Server is up and running");
})