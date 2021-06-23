import React from 'react'
import './CreatePost.css';
function CreatePost() {
    return (
        <div className="post__create">
           <form>
            <h1>Create a new post</h1>
            <input type="text"/>
               <input type="file"  />
             <textarea rows={10} cols={60}/>
           
              <button type="submit">Submit</button>
           </form>
        </div>
    )
}

export default CreatePost
