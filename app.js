const express = require('express')
const app = express()
const path = require('path')



app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname+'/index.html'));
})




app.listen("5000",()=>{
    console.log("Server start on port ")
})