let express = require('express');
let router = express.Router();
let User = require('../models/User');
 
router.get('/:id',async(req,res)=>{
    let user = await User.findById(req.params.id);
    try {
        res.status(200).json(user);
    }
    catch(e)
    {
        res.status(404).json(`User couldn't be found`);
    }
})


router.get('/:id',async(req,res)=>{
    let user = await User.findById(req.params.id);
    try {
        res.status(200).json(user);
    }
    catch(e)
    {
        res.status(404).json(`User couldn't be found`);
    }
})

module.exports = router;