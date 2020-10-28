const mongoose = require('mongoose');
const express = require('express');
const app = express();
require('dotenv/config');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
mongoose.connect(process.env.DB_CONNECTION, 
{
 useNewUrlParser: true,
 useUnifiedTopology: true
},
()=>console.log("app is connected to mongoDB")
);

const blogsRoute = require('./routes/blogs-route.js');
app.use('/api', blogsRoute);


const port = process.env.PORT || 5000;

app.listen(port, ()=>console.log(`listening on ${port}`));
