const express = require('express');
require('dotenv').config();
const cors = require('cors');
const ContactRoutes = require('./Routes/ContactRoutes')
const { default: mongoose } = require('mongoose');  

const PORT = process.env.PORT;

//create server
const server = express();

//handle cors for different source access
server.use(cors({
  origin: ["https://demand-xpress-assignment-contact-bo.vercel.app"], // your frontend domain
  methods: ["GET", "POST", "DELETE"],
  credentials: true
}));

//universal middleware
server.use(express.json());

//api route for contact
server.use('/api/v1/contacts',ContactRoutes)


// const dbName = process.env.DB_NAME;
// const dbPort = process.env.DB_PORT;
// const dbHost = process.env.DB_HOST;
// database connection 
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("thumbs up DB IS CONNECTED")
})

server.listen(PORT, () => {
    console.log("Thumbs up every thing is good port listning is active on expressJS",PORT)
})