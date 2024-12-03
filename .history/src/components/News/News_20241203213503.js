import React, { useEffect, useState } from "react";
import { IoIosHeartEmpty } from "react-icons/io";
import { BiCommentDetail } from "react-icons/bi";

import "./news.scss";

function News({ data }) {
  const [blogId, setBlogId] = useState(0);
  const [showCommentInput, setShowCommentInput] = useState(false);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]); // Array to hold comments
  const [postLikes, setPostLikes] = useState(data.likes || 0); // State for post likes
  const [postLiked, setPostLiked] = useState(false); // State for tracking if post is liked

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
        user: "Mary Simi", // Placeholder for the username
        avatar: `https://api.dicebear.com/6.x/personas/svg?seed=${
          comments.length + 1
        }`,

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

  const handlePostLike = () => {
    setPostLikes((prevLikes) => prevLikes + 1); // Increment post likes
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
        <button onClick={handlePostLike} className="post-like-button">
          <IoIosHeartEmpty /> <strong>{postLikes}</strong>
          <span>Likes</span>
        </button>
        <button onClick={handleCommentToggle}>
          <BiCommentDetail /> <strong>{comments.length}</strong>
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
                <div className="comment-header">
                  <img src={c.avatar} alt="avatar" className="comment-avatar" />
                  <strong>{c.user}</strong>
                </div>
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
