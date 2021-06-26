import { useState, useEffect } from 'react'
import ArticleCSS from './Article.module.css';
import axios from 'axios';
import {Link} from 'react-router-dom'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import { format } from 'timeago.js';
function Article() {
    let [likes, setLikes] = useState(0);
    let [posts, setPosts] = useState([]);
    const PF = "http://localhost:8500/images/";

    useEffect(() => {
        let getPosts = async () => {
            let posts = await axios.get(`/posts/`);
            console.log(posts);
            setPosts(posts.data);
        }
        getPosts()
    }, []);

    return (
        <div className={ArticleCSS.article__container}>
            {posts.map((post) => {
            
                return (
                    <div className={ArticleCSS.article} key={post.createdAt}>
                        {/* <p>{post._id}</p> */}
                        <h2>{post.title }</h2>
                        <p>Written by<span> </span> </p>
                        <img className={ArticleCSS.article__image} onClick={()=>console.log(post.postPicture)} src={PF+post.postPicture} alt="" />
                        <p  className={ArticleCSS.article__description}>{post.content.substring(0,6)}....</p>
                        <div style={{ display: 'flex' }}>
                            <ThumbUpAltIcon style={{ cursor: 'pointer' }} onClick={() => setLikes(likes + 1)} /> {'   '}
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <p>This post has {post.likes.length || likes} likes</p>

                                <p>Posted {format(post.createdAt)}</p>
                            </div>
                        </div>
                        {/* <button>Read More</button> */}
                            {/* ON CLICK ACCESS W QUERY */}
                           <Link to={`/post/${post._id}`} className={`${ArticleCSS.btn} ${ArticleCSS.effect01}`} >
                                <span>Read more</span>
                           </Link> 
                     </div>)
            })}


        </div>
    )
}

export default Article
