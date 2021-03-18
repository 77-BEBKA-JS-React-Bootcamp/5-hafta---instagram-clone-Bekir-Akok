import React, {useEffect } from 'react';
import {getCommentsActions} from '../../Redux/actions/action';
import { connect } from 'react-redux';
import './commentMain.scss';

const CommentMain = props => {

    useEffect(() => {
        props.getCommentsActions()
    }, [])

    return (
        <div className="comments__main__container">
            {
                props.comments.map((comment , i) => (
                    <div className="comments__main__wrapper" key={i}>
                        <h6>John Doe{comment.id}</h6>
                        <p>{comment.title}</p>
                    </div>
                ))
            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        comments: state.comments
    }
}

export default connect(mapStateToProps, {getCommentsActions})(CommentMain)
