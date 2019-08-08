const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const server = express();


mongoose.connect('mongodb+srv://grodrigues:camafeu22@cluster0-smgni.mongodb.net/omnistack8?retryWrites=true&w=majority',{
    useNewUrlParser: true 
});


server.use(cors());
server.use(express.json());
server.use(routes); 
//GET,POST,PUT,DELETE


server.listen(3333);





