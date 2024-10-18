import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoIosHeartEmpty } from "react-icons/io";
import { BiCommentDetail } from "react-icons/bi";

import "./news.scss";
function News({ data }) {
  const [blogId, setBlogId] = useState(0);
  const location = useLocation();
  useEffect(() => {
    setBlogId(data.id);
  });
  return (
    <Link
      to={"/main-news/" + data.id}
      state={{ blog_id: blogId }}
      className="news-box card"
    >
      <p>{data.newsDetails}</p>
      <hr />
      <div className="d-flex reactions">
        {" "}
        <small>
          <IoIosHeartEmpty />
          <strong>{data.likes}</strong>
          <span>Likes</span>
        </small>{" "}
        <small>
          <BiCommentDetail />
          <strong> {data.likes}</strong>Comments
        </small>
      </div>{" "}
    </Link>
  );
}

export default News;
