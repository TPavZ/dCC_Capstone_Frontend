import React, { useState, useEffect } from "react";
import axios from "axios";

const ReplyDisplay = (props) => {
    const [replies, setReplies] = useState([]);
    const [showReplies, setShowReplies] = useState(false);

    useEffect(() => {
        getReplies();
        // eslint-disable-next-line
    }, [props.comment])


    async function getReplies() {
        await axios({
            method: "get",
            url: `http://127.0.0.1:8000/api/comments/replies/${props.comment.id}/`,
            headers: {},
        }).then(response => {
            setReplies(response.data);
        })

    }

    if (props.user != null) {
        return (
            <span>
                <button type="button" style={{ "marginLeft": "-0.75em" }} className="btn btn-link" onClick={() => setShowReplies(!showReplies)}>
                    Show Replies ({replies.length})</button>
                <ol>
                    {replies && replies.map((reply) => {
                        if (showReplies) {
                            return (
                                <div>
                                    <li key={reply.id}>

                                        <div className="row">
                                            <div className="col-4">
                                                <h5>{reply.user.username}<small className="text-muted fst-italic"> reply</small></h5>
                                                <p>{reply.text}</p>
                                            </div>

                                            <div className="col-2">
                                                {props.user.user_id === reply.user.id &&
                                                    <span>
                                                        <button style={{ "marginLeft": "1em", "marginTop": "1em" }} className="btn btn-outline-secondary" onClick={() => props.deleteReply(reply)} data-toggle="popover" title="Delete Reply" data-content="Delete Reply" trigger="hover"><i className="bi bi-trash" /></button>
                                                    </span>}
                                            </div>

                                            <div className="col-6">
                                                {/* empty column for spacing */}
                                            </div>

                                        </div>
                                    </li>
                                </div>
                            )
                        }
                    })}
                </ol>
            </span>
        )
    }


    return (
        <span>
            <button type="button" style={{ "marginLeft": "-0.75em" }} className="btn btn-link" onClick={() => setShowReplies(!showReplies)}>
                Show Replies ({replies.length})</button>
            <ol>
                {replies && replies.map((reply) => {
                    if (showReplies) {
                        return (
                            <div>
                                <li id={reply.id}>
                                    <h5>{reply.user.username}<small className="text-muted fst-italic"> reply</small></h5>
                                    <p>{reply.text}</p>
                                </li>
                            </div>
                        )
                    }
                })}
            </ol>
        </span>
    );

};

export default ReplyDisplay;