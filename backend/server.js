const express = require('express');
const mongoose = require('mongoose');
const app = express();
const morgan = require('morgan');
const multer = require('multer');
const dotenv = require('dotenv');
const authRoute = require('./routes/auth');
const postsRoute = require('./routes/posts');
const usersRoute = require('./routes/users');
const session = require('express-session')

const path = require('path');
dotenv.config();

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
  }))
//  app.use("/images",express.static(path.join(__dirname,'/images')));

app.use("/images", express.static(path.join(__dirname, "/images")));

 app.use(express.urlencoded({extended:true}))
 app.use(express.json());
 


// Connecting to mongoose 
mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true,useUnifiedTopology:true,
    useFindAndModify:true}).then(()=>console.log(`Connected to mongoose`)).catch(e=>e)

// ROUTES    
app.use('/api/auth',authRoute);
app.use('/api/posts',postsRoute);
app.use('/api/users',usersRoute);


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        // images is the folder we want to upload our files to
        // null means there is no error 
      cb(null, "images");
    },
    filename: (req, file, cb) => {
        // req.body.name is name of file 
       cb(null, req.body.name);
    },
  });
let upload = multer({storage});


// name of the file = file 
// middleware to upload a single image
app.post('/api/upload',upload.single('file'),(req,res)=>{
    try {
    res.status(200).json(`File uploaded to images`);
    console.log(req.body);
    }
    catch(e)
    {
        console.log(e);
    }
})

app.listen(8500,()=>console.log(`Listening on port 8500`))