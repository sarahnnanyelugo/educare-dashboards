import React, { useEffect, useState } from "react";
import { IoIosHeartEmpty } from "react-icons/io";
import { BiCommentDetail } from "react-icons/bi";

import "./news.scss";

function News({ data }) {
  const [blogId, setBlogId] = useState(0);
  const [showCommentInput, setShowCommentInput] = useState(false);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]); // Array to hold comments

  useEffect(() => {
    setBlogId(data.id);
  }, [data.id]);

  const handleCommentToggle = () => {
    setShowCommentInput((prev) => !prev);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment.trim() !== "") {
      const newComment = {
        id: comments.length + 1, // Unique ID for the comment
        user: "User", // Placeholder for the username
        text: comment,
        timestamp: new Date(), // Current timestamp
        likes: 0, // Initialize likes as a number
      };
      setComments((prevComments) => [...prevComments, newComment]); // Add new comment to the array
      setComment(""); // Clear the input field
    }
  };

  const handleCommentLike = (id) => {
    setComments((prevComments) =>
      prevComments.map((comment) =>
        comment.id === id
          ? { ...comment, likes: (comment.likes || 0) + 1 } // Increment likes, ensure it's numeric
          : comment
      )
    );
  };

  return (
    <div className="news-box card">
      <div className="d-flex">
        <img src={data.schLogo} height="24px" width="24px" alt="School Logo" />
        <div>
          <h6>{data.schName}</h6>
          <small>
            {data.date}.{data.time}
          </small>
        </div>
      </div>
      <p>{data.newsDetails}</p>
      <hr />
      <div className="d-flex reactions">
        <small>
          <IoIosHeartEmpty />
          <strong>{data.likes}</strong>
          <span>Likes</span>
        </small>
        <button onClick={handleCommentToggle}>
          <BiCommentDetail />
          <strong>{comments.length}</strong>
          <span>Comments</span>
        </button>
      </div>
      {showCommentInput && (
        <>
          <form onSubmit={handleCommentSubmit} className="comment-input">
            <input
              type="text"
              placeholder="Write a comment..."
              value={comment}
              onChange={handleCommentChange}
            />
            <button type="submit">Post</button>
          </form>
          <div className="comments-section">
            {comments.map((c) => (
              <div key={c.id} className="comment">
                <strong>{c.user}</strong>
                <small>{c.timestamp.toLocaleString()}</small>
                <p>{c.text}</p>
                <div className="comment-reactions">
                  <button
                    onClick={() => handleCommentLike(c.id)}
                    className="like-button"
                  >
                    <IoIosHeartEmpty /> {c.likes} Likes
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default News;