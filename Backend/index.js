const express = require('express');
require('dotenv').config();
const cors = require('cors');


const PORT = process.env.PORT;

//create server
const server = express();

//handle cors for different source access
server.use(cors());

//universal middleware
server.use(express.json());

//api route for contact
// server.use('/api/v1/contact')


server.listen(PORT, () => {
    console.log("Thumbs up every thing is good port listning is active on expressJS",PORT)
})