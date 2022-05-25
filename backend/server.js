const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");


const app = express();
dotenv.config();

app.get('/', (req,res)=>{
    res.send("Api is running...")
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server started on PORT ${PORT}`));
