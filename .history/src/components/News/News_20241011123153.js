import React from "react";

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
