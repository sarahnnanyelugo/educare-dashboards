import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoIosHeartEmpty } from "react-icons/io";
import { BiCommentDetail } from "react-icons/bi";

import "./news.scss";
function News({ data }) {
  const [blogId, setBlogId] = useState(0);
  const [showCommentInput, setShowCommentInput] = useState(false);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]); // Array to hold comments

  const location = useLocation();
  useEffect(() => {
    setBlogId(data.id);
  });

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
      };
      setComments((prevComments) => [...prevComments, newComment]); // Add new comment to the array
      setComment(""); // Clear the input field
    }
  };

  return (
    <div className="news-box card">
      <div className="d-flex">
        <img src={data.schLogo} height="24px" width="24px" />
        <div>
          {" "}
          <h6>{data.schName}</h6>
          <small>
            {data.date}.{data.time}
          </small>
        </div>
      </div>
      <p>{data.newsDetails}</p>
      <hr />
      <div className="d-flex reactions">
        {" "}
        <small>
          <IoIosHeartEmpty />
          <strong>{data.likes}</strong>
          <span>Likes</span>
        </small>{" "}
        <button onClick={handleCommentToggle}>
          <BiCommentDetail />
          <strong> {data.likes}</strong>
          <span>Comments</span>
        </button>
      </div>{" "}
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
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default News;
