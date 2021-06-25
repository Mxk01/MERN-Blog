import { useState, useEffect } from 'react'
import ArticleCSS from './Article.module.css';
import axios from 'axios';
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
                        <h2>{`Temporary title` || post.title }</h2>
                        <p>Written by<span> </span> </p>
                        <img className={ArticleCSS.article__image} onClick={()=>console.log(post.postPicture)} src={PF+post.postPicture} alt="" />
                        <p  className={ArticleCSS.article__description}>{post.content}</p>
                        <div style={{ display: 'flex' }}>
                            <ThumbUpAltIcon style={{ cursor: 'pointer' }} onClick={() => setLikes(likes + 1)} /> {'   '}
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <p>This post has {post.likes.length || likes} likes</p>

                                <p>Posted {format(post.createdAt)}</p>
                            </div>
                        </div>
                        {/* <button>Read More</button> */}
                        <a href="" className={`${ArticleCSS.btn} ${ArticleCSS.effect01}`} target="_blank">
                           {/* ON CLICK ACCESS W QUERY */}
                            <span>Read more</span></a>
                    </div>)
            })}


        </div>
    )
}

export default Article
