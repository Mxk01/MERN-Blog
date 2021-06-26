 import React,{useEffect,useState} from 'react'
 import {useParams,useHistory,Link} from 'react-router-dom';
 import axios from 'axios';
 import { format } from 'timeago.js';
 import GetPostCSS from './GetPost.module.css';
 function GetPost() {
    let { id } = useParams();
    let history = useHistory();
    const PF = "http://localhost:8500/images/";
     let [post,setPost] = useState({});
     useEffect(()=>{
         let getCurrentPost = async () => 
           { 
            let post = await axios.get(`/posts/${id}`);
            setPost(post.data);
            // scroll to top
            setTimeout(()=> window.scrollTo(0, 0),100);

           }
        getCurrentPost();
     },[])

     let deletePost = async(e)=>{
        try {
           await axios.delete(`/posts/${id}`)
           history.push('/')
        }
        catch(e)
        {
            console.log(e);
        }
     }
 
     return (
         <div className={GetPostCSS.container}>
                <h2>{post.title }</h2>
                        <p>Written by<span> </span> </p>
              <img style={{objectFit:'cover',borderRadius:'0',width:'350px',
              height:'300px'}} src={PF+post.postPicture}></img>

              <p style={{maxWidth:'400px',maxHeight:'60vh'}}> {post.content}</p>
               <p>This post has {  0 } likes </p>
              <span>Posted {format(post.createdAt)}</span>
              <div style={{display:'flex'}}>  
              <button onClick={(e)=>deletePost(e)}
              style={
                  {
                  border:'0',
                  padding:'10px',
                  backgroundColor:'#eb4d4b',
                  cursor:'pointer',
                  width:'200px',
                  color:'white',
                  borderRadius:'10px',
                  marginTop:'10px'
                  }}>Delete</button>

           <Link to={`/edit/${id}`}>   
           <button
              style={
                  {
                  border:'0',
                  padding:'10px',
                  backgroundColor:'#686de0',
                  cursor:'pointer',
                  width:'200px',
                  color:'white',
                  borderRadius:'10px',
                  marginLeft:'15px',
                  marginTop:'10px'
                  }}>
                    Edit
            </button>
              </Link>
              </div>
         </div>
     )
 }
 
 export default GetPost
  