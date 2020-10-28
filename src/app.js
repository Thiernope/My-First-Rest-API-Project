const mongoose = require('mongoose');
const express = require('express');
const app = express();
require('dotenv/config');
mongoose.connect(process.env.DB_CONNECTION, 
    {
     useNewUrlParser: true,
     useUnifiedTopology: true
    },
    ()=>console.log("app is connected to mongoDB")
    );
//importing routes
const queriesRoute = require('./routes/query-route.js');
app.use('/api', queriesRoute);


const port = process.env.PORT || 5000;

app.listen(port, ()=>console.log(`server starts at ${port}`))