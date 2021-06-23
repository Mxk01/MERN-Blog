let express = require('express');
let router = express.Router();
let User = require('../models/User');
let bcrypt = require('bcrypt');

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
    console.log(`User is : ${user} ` || 'no user');
    try {
        
         
        // checking if user exists and passwords match
        if(user)
        {
            let passwordsMatch = await bcrypt.compare(req.body.password,user.password);
             if(passwordsMatch)
            {
            // then if it does just send data back
            res.status(200).json(user)
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