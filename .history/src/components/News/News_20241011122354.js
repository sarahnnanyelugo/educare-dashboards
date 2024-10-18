import React from "react";
import "./news.scss";
function News({ data }) {
  return (
    <div className="news-box">
      <p>{data.newsParagraph}</p>
    </div>
  );
}

export default News;
