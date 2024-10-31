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
        <small>
          <BiCommentDetail />
          <strong> {data.likes}</strong>
          <span>Comments</span>
        </small>
      </div>{" "}
    </div>
  );
}

export default News;
