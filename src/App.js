import "./App.css";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
// import Header from "./components/Header";
// import Pagination from "./components/Pagination";
import TagPage from "./pages/TagPage";
import CategoryPage from "./pages/CategoryPage";
import { Route, Routes, useLocation, useSearchParams } from "react-router-dom";
import Home from "./pages/Home";
import BlogPage from "./pages/BlogPage";
import Header from "./components/Header";



export default function App() {
  const { fetchBlogPosts } = useContext(AppContext);
  const [searchParam, setSearchParam] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    // // Fetch the inital Blogposts data
    // fetchBlogPosts();


    const page = searchParam.get("page") ?? 1;

    if (location.pathname.includes("tag")) {
      const tag = location.pathname.split("/").at(-1).replaceAll("-"," ");
      console.log("app tag")
      fetchBlogPosts(Number(page), tag)
    } else if (location.pathname.includes("categories")) {
      let category = location.pathname.split("/").at(-1).replaceAll("-", " ");
      fetchBlogPosts(Number(page), null, category);
    } else {
      console.log("app blog")
      fetchBlogPosts(Number(page))
    }


  }, [location.pathname, location.search]);

  // :blogId -> dynamic parameter

  return (
    <div className="w-screen h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs/:blogId" element={<BlogPage />} />
        <Route path="/categories/:category" element={<CategoryPage />} />
        <Route path="/tags/:tag" element={<TagPage />} />
      </Routes>
    </div>

  );
}
