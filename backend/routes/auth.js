let express = require('express');
let router = express.Router();
let User = require('../models/User');
let bcrypt = require('bcrypt');
let jwt = require('jsonwebtoken');
let dotenv = require('dotenv');
dotenv.config()


// REGISTER USER 
router.post('/register',async(req,res)=>{
    // Hash password
     let hashedPassword = await bcrypt.hash(req.body.password,10);
    try {
     
    // Create new user
    let user = new User(
        {
         username:req.body.username
         ,email:req.body.email
         ,password: hashedPassword
        });
    // Save new user 
    let savedUser = await user.save();
    res.status(200).json(user);
    }
    catch(e)
     {
         res.status(500).json(`User couldn't be registered!`);
     }

})

// LOGIN USER

router.post('/login',async(req,res)=>{
    let user = await User.findOne({email:req.body.email});
    let {_id,username,email} = user;  
    console.log(`User is : ${user} ` || 'no user');
    try {
        
         
        // checking if user exists and passwords match
        if(user)
        {
            let passwordsMatch = await bcrypt.compare(req.body.password,user.password);
             if(passwordsMatch)
            {
               let token = jwt.sign({_id:user._id},process.env.JWT_SECRET)
              
            // then if it does just send data back
            return res.json({token,user:{_id,username,email}});
            }
        }
        else 
        {
            res.status(404).json(`User isn't registered.Please try to make a new account`);
        }
    }
   
   catch(e)
   {
      res.status(500).json(`Something went wrong`);
   } 
})








module.exports = router;