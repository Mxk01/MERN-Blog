let mongoose = require('mongoose');
let Schema = mongoose.Schema;


let postSchema = new Schema(
    {
        // we need this to get post of a certain user 
        postedBy:
        {
            type:Schema.Types.ObjectId,
            ref:"User"
        },
        title: 
        {
            type:String,
            required:true
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
        // categories:
        // {
        //     type:Array,
        //     default:[]
        // },
        postPicture:
        {
            type: String
        },
        categories:
        {
            type:Array,
            default:[]
        }
    }, { timestamps: true }
)

module.exports = mongoose.model('Post', postSchema)