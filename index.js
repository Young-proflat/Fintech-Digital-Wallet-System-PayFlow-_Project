const express = require('express');
const mongoose = require('mongoose');

const app = express()
const DATABASE_URL = "mongodb+srv://:@cluster0.ucmgyxj.mongodb.net/?=true&w=majority&appName=Cluster0";

const PORT = process.env.PORT || 3000
mongoose.connect(DATABASE_URL)
.then( ()=>{
    console.log("Database is running")
    app.listen(PORT, ()=> {
        console.log("server is running")
        console.log("Welcome to our services")
})

})



