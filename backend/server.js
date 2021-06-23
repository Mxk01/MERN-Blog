const express = require('express');
const mongoose = require('mongoose');
const app = express();
const morgan = require('morgan');
const dotenv = require('dotenv');
const authRoute = require('./routes/auth');
const postsRoute = require('./routes/posts');

dotenv.config();


 app.use(express.urlencoded({extended:true}))
 app.use(express.json());
 
// Connecting to mongoose 
mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true,useUnifiedTopology:true,
    useFindAndModify:true}).then(()=>console.log(`Connected to mongoose`)).catch(e=>e)

// ROUTES    
app.use('/api/auth',authRoute);
app.use('/api/posts',postsRoute);



app.listen(8500,()=>console.log(`Listening on port 8500`))