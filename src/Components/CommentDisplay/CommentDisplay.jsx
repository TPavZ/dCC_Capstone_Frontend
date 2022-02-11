import React from "react";
import ReplyForm from "../ReplyForm/ReplyForm";
import CommentForm from "../CommentForm/CommentForm";
import ReplyDisplay from "../ReplyDisplay/ReplyDisplay";

const CommentDisplay = (props) => {


    if (props.user != null) {
        return (
            <div>
                <span>
                    <span className="comment-reply-header">Comments: </span>
                    {props.user &&
                        <CommentForm videoId={props.videoId} addComment={props.addComment} />}
                </span>
                <ol>
                    {props.comments && props.comments.map((comment) => {
                        return (
                            <li className="border-box" key={comment.id}>
                                <div className="row">
                                    <div className="col-9">
                                        <h5>{comment.user.username}</h5>
                                        <p>{comment.text}</p>
                                    </div>

                                    <div className="col-3" style={{ 'marginTop': '1em' }}>
                                        {props.user.user_id === comment.user.id
                                            ? <span>
                                                <button style={{ "marginLeft": "1em" }} className="btn btn-outline-secondary" onClick={() => props.deleteComment(comment)}
                                                    data-toggle="popover" title="Delete Comment" data-content="Delete Comment" trigger="hover">&nbsp;<i className="bi bi-trash">&nbsp;&nbsp;</i></button>
                                            </span>
                                            : <span>

                                            </span>}
                                    </div>

                                </div>
                                <span>
                                    <ReplyDisplay user={props.user} comment={comment} deleteReply={props.deleteReply} updateReply={props.updateReply} />
                                    <ReplyForm comment={comment} addReply={props.addReply} />
                                </span>


                            </li>


                        )
                    }
                    )}
                </ol>
            </div>
        )
    }
    return (
        <div>
            <span>
                <span className="comment-reply-header">Comments: </span>
            </span>
            <ol>
                {props.comments && props.comments.map((comment) => {
                    return (
                        <li className="border-box" key={comment.id}>
                            <div className="row">
                                <h5>{comment.user.username}</h5>
                                <p>{comment.text}</p>
                                <ReplyDisplay user={props.user} comment={comment} deleteReply={props.deleteReply} updateReply={props.updateReply} />
                            </div>
                        </li>

                    )
                }
                )}
            </ol>

        </div>
    );
}

export default CommentDisplay;