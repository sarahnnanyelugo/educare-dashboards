import logo from "./logo.svg";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import { ParentsLayout } from "./Layouts/ParentsLayout";
import { MainNews } from "./pages/NewsPage/MainNews/MainNews";
import { NewsPage } from "./pages/NewsPage/NewsPage";
function App() {
  return (
    <>
      {" "}
      <Routes>
        <Route path="/*" element={<ParentsLayout />} />{" "}
        <Route path="news-page" element={<NewsPage />} />
        <Route path="main-news/:blog_id" element={<MainNews />} />
      </Routes>
    </>
  );
}

export default App;
