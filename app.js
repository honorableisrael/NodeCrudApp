const express = require('express');
const bodyParser = require('body-parser')

//init the app

const app = express()

let port  = 4000

app.listen (port,()=>{
    console.log(`App is started on port ${port}`)
})