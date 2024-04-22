import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Categories from "./pages/Categories";
import CategoryPage from "./pages/CategoryPage";
import Blog from "./pages/Blog";
import AllBlogs from "./pages/AllBlogs";

function App() {
  const [backToTop, setBackToTop] = useState(false);
  const changeBackToTop = () => {
    if (window.scrollY >= 5) {
      setBackToTop(true);
    } else {
      setBackToTop(false);
    }
  };
  window.addEventListener("scroll", changeBackToTop);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="categories">
            <Route index element={<Categories />} />
            <Route path=":categoryId" element={<CategoryPage />} />
          </Route>
          <Route path="contact" element={<Contact />} />
          <Route path="blog">
            <Route index element={<AllBlogs />} />
            <Route path=":blogId" element={<Blog />} />
          </Route>
        </Routes>
      </BrowserRouter>

      <a
        href="#top"
        id="back-to-top"
        className={`fixed bottom-4 right-4 bg-accent cursor-pointer hover:bg-darkAccent p-3 rounded-full transition-all duration-300 ease-in-out ${
          backToTop ? "block" : "hidden"
        }`}
      >
        <svg
          className="w-8 h-8"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="none"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m12 5l6 6m-6-6l-6 6m6-6v14"
          ></path>
        </svg>
      </a>
    </>
  );
}

export default App;
