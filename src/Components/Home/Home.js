import React, { useEffect , useState } from 'react'
import { connect } from "react-redux";
import { getPhotoActions, getCommentsActions, likeButton ,postCommentsActions } from '../../Redux/actions/action';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Avatar from '@material-ui/core/Avatar';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import SendIcon from '@material-ui/icons/Send';
import TurnedInNotIcon from '@material-ui/icons/TurnedInNot';
import SubdirectoryArrowLeftIcon from '@material-ui/icons/SubdirectoryArrowLeft';
import { IconButton } from '@material-ui/core';
import {Link} from 'react-router-dom';
import './home.scss';


const Home = props => {

    const [commentPost , setCommentPost] =useState({title: "" , body: ""})

    const handleSubmit = (event) => {
        event.preventDefault();
        const { title , body } = commentPost;
        const newPost = {title, body };
        props.postCommentsActions(newPost);
      };

    useEffect(() => {
        props.getPhotoActions()
        props.getCommentsActions()
    }, [])

     const filteredPost = props.comments.filter(y => y.id <= 2 || y.id === 101) 

    return (
        <div className="post__card">
            {props.posts.map((post , index) => (
                <div key={index}>
                    <div className="header">
                        <div className="header__avatar">
                            <IconButton>
                                <Avatar src={post.user.profile_image.small} />
                            </IconButton>
                            <h5>{post.user.username}</h5>
                        </div>
                        <div className="header__more">
                            <IconButton>
                                <MoreHorizIcon />
                            </IconButton>
                        </div>
                    </div>
                    <img src={post.urls.small} alt="" />
                    <div className="header__footer">
                        <div className="header__footer__first">
                            <IconButton onClick={() => props.likeButton(post)}>
                                <FavoriteBorderIcon />
                            </IconButton>
                            <IconButton>
                                <RadioButtonUncheckedIcon />
                            </IconButton>
                            <IconButton>
                                <SendIcon />
                            </IconButton>
                        </div>
                        <div className="header__footer__second">
                            <IconButton>
                                <TurnedInNotIcon />
                            </IconButton>
                        </div>
                    </div>
                    <div className="comments">
                        <div className="comments__header">
                            <h5>{post.likes}  Likes</h5>
                            <h6>{post.user.username}</h6>
                            <p>{post.description === null ? 'Empty description...' : post.description}</p>
                            <div className="comments__main">
                                {filteredPost.map((comment , i) => (
                                    <div className="comments__flex" key={i}>
                                        <h6>JonhDoe{comment.id}</h6>
                                        <p>{comment.title}</p>
                                    </div>
                                ))}
                                <div className="comments_input">
                                    <Link to="/comments"><p>More comments...</p></Link>
                                    <form onSubmit={handleSubmit} >
                                        <input placeholder="Write a Comment..."
                                            value={commentPost.title}
                                            onChange={event => setCommentPost({ ...commentPost, title: event.target.value })}  />
                                            <span>
                                            <IconButton type="submit">
                                            <SubdirectoryArrowLeftIcon/>
                                        </IconButton>
                                            </span>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
const mapStateToProps = state => {
    return {
        posts: state.posts,
        comments: state.comments,
    }
}

export default connect(mapStateToProps, { getPhotoActions, getCommentsActions, likeButton , postCommentsActions })(Home);