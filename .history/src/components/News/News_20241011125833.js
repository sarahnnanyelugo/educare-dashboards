import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoIosHeartEmpty } from "react-icons/io";

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
    </Link>
  );
}

export default News;
