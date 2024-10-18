import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
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
      className="news-box"
    >
      <p>{data.newsParagraph}</p>
    </Link>
  );
}

export default News;
