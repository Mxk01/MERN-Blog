let mongoose = require('mongoose');
let Schema = mongoose.Schema;


let postSchema = new Schema(
    {
        // we need this to get post of a certain user 
        userId:
        {
            type: String,
        },
        title: 
        {
            type:String
        }
        ,
        content:
        {
            type: String,
            required: true
        },
        img:
        {
            type: String
        },
        likes:
        {
            type: Array,
            default: []
        },
        postPicture:
        {
            type: String
        }
    }, { timestamps: true }
)

module.exports = mongoose.model('Post', postSchema)