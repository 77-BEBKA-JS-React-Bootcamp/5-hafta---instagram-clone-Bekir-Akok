import React, { useState } from 'react';
import { IconButton, Avatar } from '@material-ui/core';
import SubdirectoryArrowLeftIcon from '@material-ui/icons/SubdirectoryArrowLeft';
import { postCommentsActions } from '../../Redux/actions/action';
import './commentFooter.scss';
import { connect } from 'react-redux';

const CommentFooter = props => {

    const [commentPost, setCommentPost] = useState({ title: "" })

    const handleSubmit = (event) => {
        event.preventDefault()
        const { title } = commentPost;
        const newPost = { title: title, };
        props.postCommentsActions(newPost);
    };

    return (
        <div className="comment__footer__main">
            <div className="comment__footer__input">
                <IconButton>
                    <Avatar src="data:image/jpeg;base64,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" />
                </IconButton>
                <form onSubmit={handleSubmit} >
                    <input placeholder="Write a Comment..."
                        value={commentPost.title}
                        onChange={event => setCommentPost({ ...commentPost, title: event.target.value })} />
                    <span>
                        <IconButton type="submit">
                            <SubdirectoryArrowLeftIcon />
                        </IconButton>
                    </span>
                </form>
            </div>
        </div>
    )
}

export default connect(null, { postCommentsActions })(CommentFooter)
