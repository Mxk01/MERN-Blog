 import React,{useEffect,useState} from 'react'
 import {useParams} from 'react-router-dom';
 import axios from 'axios';
 import { format } from 'timeago.js';
 import GetPostCSS from './GetPost.module.css';
 function GetPost() {
    let { id } = useParams();
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
     return (
         <div className={GetPostCSS.container}>
                <h2>{post.title }</h2>
                        <p>Written by<span> </span> </p>
              <img style={{objectFit:'cover',borderRadius:'0',width:'350px',
              height:'300px'}} src={PF+post.postPicture}></img>

              <p style={{maxWidth:'400px'}}> {post.content}</p>
               <p>This post has {  0 } likes </p>
              <span>Posted {format(post.createdAt)}</span>
              
         </div>
     )
 }
 
 export default GetPost
  