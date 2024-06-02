import { useState, lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loading from "./components/Loading";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Categories = lazy(() => import("./pages/Categories"));
const CategoryPage = lazy(() => import("./pages/CategoryPage"));
const Blog = lazy(() => import("./pages/Blog"));
const AllBlogs = lazy(() => import("./pages/AllBlogs"));

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
        <Suspense fallback={<Loading />}>
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
        </Suspense>
      </BrowserRouter>

      <a
        href="#top"
        id="back-to-top"
        className={`z-[999] fixed bottom-4 right-4 bg-accent cursor-pointer hover:bg-darkAccent p-2 sm:p-3 rounded-full transition-all duration-300 ease-in-out ${
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
