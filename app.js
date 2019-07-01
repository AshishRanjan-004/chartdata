//npm installed
const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser')

//middleware
const app = express();
app.use(cors());
app.use(bodyParser());
app.use(bodyParser.json());

//api
app.get('/charts', (req, res) => {
    let chartDate = [{
            x: 10,
            y: 71
        },
        {
            x: 20,
            y: 55
        },
        {
            x: 30,
            y: 50
        },
        {
            x: 40,
            y: 65
        },
        {
            x: 50,
            y: 71
        },
        {
            x: 60,
            y: 68
        },
        {
            x: 70,
            y: 38
        },
        {
            x: 80,
            y: 92
        },
        {
            x: 90,
            y: 54
        },
        {
            x: 100,
            y: 60
        },
        {
            x: 110,
            y: 21
        },
        {
            x: 120,
            y: 49
        },
        {
            x: 130,
            y: 36
        }
    ];
    res.json(chartDate);
});

//local server
app.listen(3000, () => {
    console.log('listening on the post 3000');
});