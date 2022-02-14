import React, { useState } from "react";

const CommentForm = (props) => {

    const [comment, setComment] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        let commentPost = {
            "service_id": props.serviceId,
            "text": comment,
        }

        props.addComment(commentPost);
        setComment("");
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Comment..." value={comment} onChange={(el) => setComment(el.target.value)}></input>
                <button type="submit">Comment</button>
            </form>
        </div>
    );
}

export default CommentForm;