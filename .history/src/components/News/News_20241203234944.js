import React, { useEffect, useState } from "react";
import { IoIosHeartEmpty } from "react-icons/io";
import { BiCommentDetail } from "react-icons/bi";
import { IoIosHeart } from "react-icons/io";
import { formatDistanceToNow } from "date-fns"; // Import date-fns for relative time formatting

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
        }`, // Random avatar URL
        text: comment,
        timestamp: new Date(), // Current timestamp
        likes: 0, // Initialize likes as a number
        liked: false, // Track if the comment is liked
      };
      setComments((prevComments) => [...prevComments, newComment]); // Add new comment to the array
      setComment(""); // Clear the input field
    }
  };

  const handleCommentLike = (id) => {
    setComments((prevComments) =>
      prevComments.map((comment) =>
        comment.id === id
          ? {
              ...comment,
              likes: (comment.likes || 0) + 1,
              liked: !comment.liked,
            }
          : comment
      )
    );
  };

  const handlePostLike = () => {
    setPostLikes((prevLikes) => Number(prevLikes) + 1); // Convert prevLikes to a number
    setPostLiked(!postLiked); // Toggle the liked state
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
          {postLiked ? (
            <IoIosHeart color="red" /> // Filled red heart when liked
          ) : (
            <IoIosHeartEmpty />
          )}
          <strong>{postLikes}</strong>
          <span>Likes</span>
        </button>
        <button onClick={handleCommentToggle} className="post-like-button">
          <BiCommentDetail /> <strong>{comments.length}</strong>
          <span>Comments</span>
        </button>
      </div>
      {showCommentInput && (
        <>
          <form onSubmit={handleCommentSubmit} className="comment-input">
            <div className="input-holder d-flex col-md-12">
              {" "}
              <input
                type="text"
                placeholder="Write a comment..."
                value={comment}
                onChange={handleCommentChange}
              />
              <button type="submit">Send</button>
            </div>
          </form>
          <div className="comments-section2">
            {comments.map((c) => (
              <div key={c.id} className="comment">
                <div className="comment-header">
                  <img src={c.avatar} alt="Avatar" className="comment-avatar" />
                  <h6>{c.user}</h6>
                </div>
                <small>
                  {formatDistanceToNow(new Date(c.timestamp), {
                    addSuffix: true,
                  })}
                </small>

                <p>{c.text}</p>
                <div className="comment-reactions">
                  <button
                    onClick={() => handleCommentLike(c.id)}
                    className="like-button"
                  >
                    {c.liked ? (
                      <IoIosHeart color="red" /> // Filled red heart for liked comment
                    ) : (
                      <IoIosHeartEmpty />
                    )}
                    {c.likes}
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
