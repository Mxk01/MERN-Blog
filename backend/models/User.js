let mongoose = require('mongoose');
let Schema = mongoose.Schema; 


let userSchema = new Schema(
    {
      username:
      {
          type:String,
          required:true,
          min:5
      },
      
      password:
      {
          type:String,
          required:true,
          max:60
      },
      email:
      {
          type:String,
          required:true
           
      },
      isAdmin:
      {
         type:Boolean,
         default:false,

      },
      following:
      {
          type:Array,
          default:[]
      },
      followers:
      {
          type:Array,
          default:[]
      },
      profilePic:
      {
          type:String,
          default:'https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg'
      },
      likes:
      {
          type:Array,
          default:[]
      },
      description:
      {
          type:String,
      }
    },{timestamps:true}
)


module.exports = mongoose.model('User',userSchema)