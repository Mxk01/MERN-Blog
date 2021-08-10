let express = require('express');
let router = express.Router();
let Post = require('../models/Post');
let loginMiddleware = require('../middleware/login')
// Creating a post 

router.post('/',loginMiddleware, async (req, res) => {
    req.body.postedBy =  req.user;

    console.log(req.user);
    let post = new Post(req.body);
    try {
         await post.save();

        if (post) {
            res.status(200).json(post);
        }
        else {
            res.status(200).json('Please create a post !')
        }
    }
    catch (e) {
        res.status(500).json(e);
    }
})

// Updating a post
router.put('/:id', async (req, res) => {
    // find the post by id 
    let post = await Post.findById(req.params.id)
    try {
        // checking if the user id that we entered matches with the one in the post 
      
            // update the found post whenever we  change data inside req.body
            await post.updateOne({ $set: req.body })
            res.status(200).json(`Post has been updated.Check database`);
    
    }
    catch (e) {
        res.status(500).json(e);
    }
})

// Deleting a post
router.delete('/:id', async (req, res) => {
    let post = await Post.findById(req.params.id);
    try {
        // if userId from req.body matches userId of found post 
      
            await post.deleteOne();
            res.status(200).json(`Post has been deleted`);
       
    }
    catch (e) {
        res.status(500).json(e);
    }
})

// Getting a post
router.get('/:id', async (req, res) => {
    let post = await Post.findById(req.params.id);
    if (post) {
        res.status(200).json(post);
    }
    else {
        res.status(404).json(`Post couldn't be found`);
    }
})

// Getting all posts 
router.get('/', async (req, res) => {
    let posts = await Post.find({}).populate("postedBy");
    try {
        res.status(200).json(posts);
    }
    catch (e) {
        res.status(404).json(`Posts not found`);
    }
})

 
// Getting all  user posts 
router.get('/:id/user', async (req, res) => {
    let posts = await Post.find({postedBy:req.params.id});
    try {
        res.status(200).json(posts);
    }
    catch (e) {
        res.status(404).json(`Posts not found`);
    }
})
// router.put('/like/:id',async(req,res)=>{
//     let post = await Post.findById(req.params.id);
//     try {
//        //   await post.updateOne({$push:userId})
//     } catch (error) {
        
//     }
// })



module.exports = router;