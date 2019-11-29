const express = require('express');
const bodyParser = require('body-parser')
//init the app
const app = express()
const user = require('./Routes/User.route');

app.use('/users',user);


let port  = 4000

app.listen (port,()=>{
    console.log(`App is started on port ${port}`)
})