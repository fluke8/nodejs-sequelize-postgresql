require('dotenv').config();
const express = require('express');
const sequelize = require('./db');
const router = require('./routes/router');
const models = require('./models/models.js');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());

app.use('/', router);


const start = async () => {
    try{
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    } catch (e) {
        console.log(e)
    }
}

start();





