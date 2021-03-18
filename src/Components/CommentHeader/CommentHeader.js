import React from 'react';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import SendIcon from '@material-ui/icons/Send';
import {IconButton} from '@material-ui/core';
import {Link} from 'react-router-dom';
import './commentHeader.scss';

const CommentHeader = () => {
    return (
        <div className="comment__header__main">
            <div className="comment__header__icon__set">
                <Link to="/">
                    <IconButton>
                        <ArrowBackIosIcon/>
                    </IconButton>
                </Link>
                <h2>Comments</h2>
                <IconButton>
                    <SendIcon/>
                </IconButton>
            </div>
        </div>
    )
}

export default CommentHeader
