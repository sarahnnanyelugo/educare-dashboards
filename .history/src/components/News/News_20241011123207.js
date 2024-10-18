import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./news.scss";
function News({ data }) {
  const [blogId, setBlogId] = useState(0);
  const location = useLocation();

  return (
    <div className="news-box">
      <p>{data.newsParagraph}</p>
    </div>
  );
}

export default News;
