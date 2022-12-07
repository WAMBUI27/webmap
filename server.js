const express = require('express');
const mongoose= require('mongoose')
const app = express()


app.listen(8000, ()=>{
    console.log('connected to port 8000')
})
// connect to db
const uri="mongodb+srv://phestusdb:mypassword123@webmapcluster.jz3qxnm.mongodb.net/?retryWrites=true&w=majority"
//creating async function

async function connect(){
try {
    mongoose.connect(uri)
    console.log('connected to db cluster')
} catch (error) {
    console.log(error)
}
}

connect();
//connect to port
