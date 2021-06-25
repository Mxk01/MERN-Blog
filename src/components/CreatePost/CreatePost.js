import React,{useState,useEffect} from 'react'
import './CreatePost.css';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
function CreatePost() {
    let history = useHistory();
    let [file,setFile ] = useState(null);
    let [title,setTitle] = useState('');
    let [content,setContent] = useState('');

    /*
    The FormData interface provides a way to easily construct a set of key/value pairs 
    representing form fields and their values, which can then be easily sent using the 
    XMLHttpRequest.send() method. It uses the same format a form would use if the encoding type were set to "multipart/form-data".
    */
 

     let formSubmit = async(e) => {
        e.preventDefault();
      // making a new post 
      let newPost = 
      {
         title,
         content
      }
      if (file) {
         const data = new FormData();
         // generate unique name for image
         const filename = Date.now() + file.name;
         // append file name and file data
         data.append("name", filename);
         data.append("file", file);
         // adding file path to newPost in db
          newPost.postPicture = filename;
          console.log(data);
          // making a post request to upload this file 
          try {
          await axios.post('/upload',data);
          }
          catch(e)
          {
             console.log(e);
          }
          console.log(newPost);

         try {
            // making a request to get posts
            await axios.post('/posts',newPost)
            history.push('/')
       }
       catch(e)
       {
          console.log(e);
       }
       }

       
     }
     return (
        <div className="post__create">
           <form onSubmit={(e)=>formSubmit(e)}>
        
            <div  className="post__image"></div>
                {file && (
        <img style={{objectFit:'cover',marginTop:'8px'}} src={URL.createObjectURL(file)} alt="" />
      )}
            <label htmlFor="file-upload" className="custom-file-upload">
              +
             </label>
              <input id="file-upload" type="file" onChange={(e) =>  setFile(e.target.files[0]) }/>
            <input type="text" onChange={(e)=>setTitle(e.target.value )} placeholder="Title"/>
            {/* <select name="cars" id="cars">
            <option value="cooking">Cooking</option>
            <option value="lifestyle">Lifestyle</option>
            <option value="tech">Tech</option>
             <option value="movies">Movies</option>
             <option value="health">Health</option>
             <option value="design">Design</option>


            </select>
              */}
             <textarea onChange={(e)=>setContent(e.target.value)} 
             style={{marginTop:'3px'}}/>
           
              <button className="post__btn" type="submit">Submit</button>
           </form>
        </div>
    )
}

export default CreatePost
