/* eslint-disable react/prop-types */
import Header from "../components/Header";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";
import blogs from "../blogs/blogs";
import categories from "../blogs/categories";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import CommentSection from "../components/CommentSection";
import RateArticle from "../components/RateArticle";
import { v4 as uuidv4 } from "uuid";
import { getRating, getBlogRating } from "../comment-section/commentSecion";
import BlogSideBar from "../components/BlogSideBar";

function Blog() {
  const url = window.location.href;
  let { blogId } = useParams();
  const [htmlContent, setHtmlContent] = useState("");
  const [userId, setUserId] = useState(1);
  const [activeHeadingId, setActiveHeadingId] = useState(null);
  const [rating, setRating] = useState(0);
  const [updateRating, setUpdateRating] = useState(true);
  const [ratingData, setRatingData] = useState({
    averageRating: 0,
    totalRating: 0,
  });
  const blogData = blogs.find((blog) => blog.id === parseInt(blogId));
  const categoryData = categories.find(
    (category) => category.id === blogData.categoryId
  );
  const mainHeadings = blogData.headings;

  useEffect(() => {
    // Check if user ID is already stored in local storage
    const storedUserId = localStorage.getItem("userId");

    if (storedUserId) {
      // User ID exists in local storage, use it
      setUserId(storedUserId);
    } else {
      // User ID doesn't exist in local storage, generate a new one
      const newUserId = uuidv4();
      setUserId(newUserId);
      // Store the new user ID in local storage
      localStorage.setItem("userId", newUserId);
    }
  }, []);

  useEffect(() => {
    const fetchRating = async () => {
      const rating = await getRating(userId, blogId);
      if (rating) {
        setRating(rating);
      }
    };
    const fetchBlogRating = async () => {
      const ratingData = await getBlogRating(blogId);
      setRatingData(ratingData);
    };

    fetchRating();
    fetchBlogRating();
  }, [userId, blogId, updateRating]);

  useEffect(() => {
    const fetchBlogContent = async () => {
      try {
        const content = await blogData.content;
        setHtmlContent(content);
      } catch (error) {
        console.error("Error fetching blog content:", error);
      }
    };

    fetchBlogContent();
  }, [blogData.content]);

  useEffect(() => {
    const contentDiv = document.getElementById("blog-content");
    if (contentDiv) {
      contentDiv.innerHTML = htmlContent;
    }
  }, [htmlContent]);

  window.addEventListener("scroll", () => {
    const blogHeadings = document.querySelectorAll("h2");
    const sidebarListItems = document.querySelectorAll("#sidebar li");

    const scrollPosition = window.scrollY;
    const halfwayPoint = window.innerHeight / 2;
    // let activeHeadingId = null; // Default to the first heading

    blogHeadings.forEach((heading, index) => {
      heading.id = `heading-${index}`;
      const headingTop = heading.offsetTop;
      const headingBottom = headingTop + heading.offsetHeight;
      const isHeadingInView =
        headingTop <= scrollPosition + halfwayPoint &&
        headingBottom >= scrollPosition + halfwayPoint;

      if (isHeadingInView) {
        // activeHeadingId = heading.id;
        setActiveHeadingId(heading.id);
      }
    });

    // Set the active heading to the last active heading found

    sidebarListItems.forEach((item, index) => {
      if (`heading-${index}` === activeHeadingId) {
        item.classList.add("active"); // Add a class to highlight the active item
      } else {
        item.classList.remove("active"); // Remove the class from inactive items
      }
    });
  });

  function copyLink() {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    alert("Link copied to clipboard");
  }

  return (
    <div>
      <Header />
      <div className="mx-40 my-24 flex gap-12">
        <BlogSideBar
          blogData={blogData}
          ratingData={ratingData}
          mainHeadings={mainHeadings}
        />
        <div className="">
          <article className="bg-white rounded w-full p-12">
            <h1 className="text-4xl font-bold text-center mt-6">
              {blogData.title}
            </h1>
            <p className="text-center mt-6 text-xs font-medium">
              <svg
                className="inline-block mr-2 w-5 h-5 fill-accent"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0 0 32 32"
              >
                <path d="M 9 4 L 9 5 L 5 5 L 5 27 L 27 27 L 27 5 L 23 5 L 23 4 L 21 4 L 21 5 L 11 5 L 11 4 Z M 7 7 L 9 7 L 9 8 L 11 8 L 11 7 L 21 7 L 21 8 L 23 8 L 23 7 L 25 7 L 25 9 L 7 9 Z M 7 11 L 25 11 L 25 25 L 7 25 Z M 13 13 L 13 15 L 15 15 L 15 13 Z M 17 13 L 17 15 L 19 15 L 19 13 Z M 21 13 L 21 15 L 23 15 L 23 13 Z M 9 17 L 9 19 L 11 19 L 11 17 Z M 13 17 L 13 19 L 15 19 L 15 17 Z M 17 17 L 17 19 L 19 19 L 19 17 Z M 21 17 L 21 19 L 23 19 L 23 17 Z M 9 21 L 9 23 L 11 23 L 11 21 Z M 13 21 L 13 23 L 15 23 L 15 21 Z M 17 21 L 17 23 L 19 23 L 19 21 Z"></path>
              </svg>
              Published : {blogData.published}
            </p>
            <img
              className="rounded my-8 max-h-96 mx-auto"
              src={blogData.titleImage.landscape}
              alt="art"
            />
            <div id="blog-content" className="mt-16"></div>
            <div className="relative mt-12 border-y border-accent p-12">
              <p className="text-lg text-center tracking-wide leading-relaxed">
                {blogData.quote}
                <svg
                  className="w-12 h-12 fill-accent absolute bottom-2 right-0"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0,0,256,256"
                >
                  <g
                    fill="#f0b5da"
                    fillRule="nonzero"
                    stroke="none"
                    strokeWidth="1"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    strokeMiterlimit="10"
                    strokeDasharray=""
                    strokeDashoffset="0"
                    fontFamily="none"
                    fontWeight="none"
                    fontSize="none"
                    textAnchor="none"
                    style={{ mixBlendMode: "normal" }}
                  >
                    <g transform="scale(5.33333,5.33333)">
                      <path d="M5.009,38.88v0c0,-0.459 0.28,-0.882 0.712,-1.036c3.66,-1.305 9.279,-6.104 9.279,-13.833c0,-1.328 -0.227,-2 -0.74,-2c-0.601,0 -1.554,1 -4.26,1c-3.289,0 -7,-2.622 -7,-7.059c0,-3.883 2.912,-7.941 8,-7.941c4.135,0 10,3.083 10,12.093c0,12.478 -9.397,17.774 -14.432,19.811c-0.743,0.3 -1.559,-0.233 -1.559,-1.035z"></path>
                      <path d="M29.009,38.88v0c0,-0.459 0.28,-0.882 0.712,-1.036c3.66,-1.305 9.279,-6.104 9.279,-13.833c0,-1.328 -0.227,-2 -0.74,-2c-0.601,0 -1.554,1 -4.26,1c-3.289,0 -7,-2.622 -7,-7.059c0,-3.883 2.912,-7.941 8,-7.941c4.135,0 10,3.083 10,12.093c0,12.478 -9.397,17.774 -14.432,19.811c-0.743,0.3 -1.559,-0.233 -1.559,-1.035z"></path>
                    </g>
                  </g>
                </svg>
              </p>
            </div>
            <p className=" py-16 border-b border-[#ff8ac7c0] text-center font-semibold">
              Tags :
              {blogData.tags.map((tag, index) => (
                <span key={index} className="ml-2 font-bold text-accent">
                  {tag} {index !== blogData.tags.length - 1 ? "," : " "}
                </span>
              ))}
            </p>{" "}
            <RateArticle
              setUpdateRating={setUpdateRating}
              userId={userId}
              rating={rating}
              blogId={blogData.id}
            />
            <div className=" my-12 w-full gap-4 flex items-center justify-center">
              <p className="font-semibold">Share Article :</p>
              <ul className="flex gap-6 ml-2">
                <li className="twitter-icon relative cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-1/4">
                  <span className="twitter-share transition-all duration-500 ease-in-out hidden text-xs absolute -top-10 -translate-x-[35%] bg-white rounded w-max shadow p-2">
                    Share on Twitter
                  </span>
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                      url
                    )}`}
                    target="_blank"
                  >
                    <svg
                      className="w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="100"
                      height="100"
                      viewBox="0 0 50 50"
                    >
                      <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"></path>
                    </svg>
                  </a>
                </li>
                <li className="insta-icon relative cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-1/4">
                  <span className="insta-share transition-all duration-500 ease-in-out hidden text-xs absolute -top-10 -translate-x-[35%] bg-white rounded w-max shadow p-2">
                    Share on Instagram
                  </span>
                  <a href={`https://www.instagram.com/`} target="_blank">
                    <svg
                      className="w-5 h-5 fill-accent"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="100"
                      height="100"
                      viewBox="0 0 50 50"
                    >
                      <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"></path>
                    </svg>
                  </a>
                </li>
                <li className="mail-icon relative cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-1/4">
                  <span className="mail-share transition-all duration-500 ease-in-out hidden text-xs absolute -top-10 -translate-x-[35%] bg-white rounded w-max shadow p-2">
                    Share on Mail
                  </span>
                  <a
                    href={`mailto:?subject=Check out this article&body=Hey, I found this article and thought you might like it. ${url}`}
                    target="_blank"
                  >
                    <svg
                      className="w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="100"
                      height="100"
                      viewBox="0 0 24 24"
                    >
                      <path d="M 4 4 C 3.334 4 2.7467656 4.3270781 2.3847656 4.8300781 C 2.1407656 5.1680781 2.2485625 5.6471875 2.6015625 5.8671875 L 11.382812 11.339844 C 11.760812 11.575844 12.239187 11.575844 12.617188 11.339844 L 21.361328 5.8203125 C 21.728328 5.5883125 21.819828 5.0840937 21.548828 4.7460938 C 21.183828 4.2920937 20.627 4 20 4 L 4 4 z M 21.515625 8.0859375 C 21.432 8.0868594 21.347078 8.1099062 21.267578 8.1601562 L 12.617188 13.615234 C 12.239187 13.850234 11.760812 13.849281 11.382812 13.613281 L 2.7304688 8.2226562 C 2.4124687 8.0246562 2 8.2539062 2 8.6289062 L 2 18 C 2 19.105 2.895 20 4 20 L 20 20 C 21.105 20 22 19.105 22 18 L 22 8.5644531 C 22 8.2824531 21.7665 8.0831719 21.515625 8.0859375 z"></path>
                    </svg>
                  </a>
                </li>
                <li className="whatsapp-icon relative cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-1/4">
                  <span className="whatsapp-share transition-all duration-500 ease-in-out hidden text-xs absolute -top-10 -translate-x-[35%] bg-white rounded w-max shadow p-2">
                    Share on Whatsapp
                  </span>
                  <a href={`https://api.whatsapp.com/send?text=${url}`}></a>
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="100"
                    height="100"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#fff"
                      d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"
                    ></path>
                    <path
                      fill="#fff"
                      d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"
                    ></path>
                    <path
                      fill="#cfd8dc"
                      d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"
                    ></path>
                    <path
                      fill="#40c351"
                      d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"
                    ></path>
                    <path
                      fill="#fff"
                      fillRule="evenodd"
                      d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </li>
              </ul>
            </div>
            <div className="form-group relative rounded hover:outline-none hover:ring-1 hover:ring-accent hover:border-accent">
              <input
                className="p-5 pr-36 w-full border border-[#feeaec] rounded focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent"
                type="text"
                name="link"
                value={window.location.href}
                readOnly
              />
              <button
                className="copy-link absolute right-2 top-2 bottom-2 w-max rounded bg-accent text-white p-3"
                type="submit"
                onClick={() => copyLink()}
              >
                Copy Link
              </button>
            </div>
          </article>
          <div className="my-24 flex items-center justify-between">
            <Link to={`/blog/${blogData.id - 1}`}>
              <div
                className={
                  blogData.id === 1
                    ? "hidden"
                    : "move-article relative overflow-hidden py-8 pl-16 pr-12 rounded-md bg-[#4EC1D8] text-white cursor-pointer"
                }
              >
                <p className="text-sm mb-2 text-start">Previous Article</p>
                <p className="text-left">Why you should Watch K-On?</p>
                <span className="arrow-icon-left py-2 pl-[50px] pr-2 bg-white rounded-full absolute -left-12 top-[30%] transition-all duration-300 ease-in-out">
                  <svg
                    className="w-8 h-8 fill-black"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="100"
                    height="100"
                    viewBox="0 0 50 50"
                  >
                    <path d="M 19.8125 13.09375 C 19.59375 13.132813 19.398438 13.242188 19.25 13.40625 L 8.34375 24.28125 L 7.65625 25 L 8.34375 25.71875 L 19.25 36.59375 C 19.492188 36.890625 19.878906 37.027344 20.253906 36.941406 C 20.625 36.855469 20.917969 36.5625 21.003906 36.191406 C 21.089844 35.816406 20.953125 35.429688 20.65625 35.1875 L 11.46875 26 L 41 26 C 41.359375 26.003906 41.695313 25.816406 41.878906 25.503906 C 42.058594 25.191406 42.058594 24.808594 41.878906 24.496094 C 41.695313 24.183594 41.359375 23.996094 41 24 L 11.46875 24 L 20.65625 14.8125 C 20.980469 14.511719 21.066406 14.035156 20.871094 13.640625 C 20.679688 13.242188 20.246094 13.023438 19.8125 13.09375 Z"></path>
                  </svg>
                </span>
              </div>
            </Link>
            <Link to={`/blog/${blogData.id + 1}`}>
              <div
                className={
                  blogData.id === blogs.length
                    ? "hidden"
                    : "move-article justify-self-end relative overflow-hidden py-8 pr-16 pl-12 rounded-md bg-[#F976D0] text-white cursor-pointer"
                }
              >
                <p className="text-sm mb-2 text-end">Next Article</p>
                <p className="text-right">Why you should Watch K-On?</p>
                <span className="arrow-icon-right py-2 pr-[50px] pl-2 bg-white rounded-full absolute -right-12 top-[30%] transition-all duration-300 ease-in-out">
                  <svg
                    className="w-8 h-8 fill-black"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="100"
                    height="100"
                    viewBox="0 0 50 50"
                  >
                    <path d="M 29.84375 13.09375 C 29.46875 13.160156 29.167969 13.433594 29.0625 13.796875 C 28.957031 14.164063 29.066406 14.554688 29.34375 14.8125 L 38.53125 24 L 9 24 C 8.96875 24 8.9375 24 8.90625 24 C 8.355469 24.027344 7.925781 24.496094 7.953125 25.046875 C 7.980469 25.597656 8.449219 26.027344 9 26 L 38.53125 26 L 29.34375 35.1875 C 29.046875 35.429688 28.910156 35.816406 28.996094 36.191406 C 29.082031 36.5625 29.375 36.855469 29.746094 36.941406 C 30.121094 37.027344 30.507813 36.890625 30.75 36.59375 L 41.65625 25.71875 L 42.34375 25 L 41.65625 24.28125 L 30.75 13.40625 C 30.542969 13.183594 30.242188 13.070313 29.9375 13.09375 C 29.90625 13.09375 29.875 13.09375 29.84375 13.09375 Z"></path>
                  </svg>
                </span>
              </div>
            </Link>
          </div>
          <div className="p-12 bg-white rounded">
            <div className="flex items-center justify-between">
              <div className="article-cat flex items-center justify-center gap-8">
                <div className="gif-container relative before:bg-[#f266ee] ">
                  <img
                    className="category-gif rounded-full w-16 h-16 object-cover"
                    src={categoryData.image}
                    alt="SOL"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <p className="font-light">
                    More in this <span className="font-semibold">Category</span>{" "}
                  </p>
                  <b className="text-3xl">{blogData.mainCategory}</b>
                </div>
              </div>
              <Link to={`/category/${blogData.categoryId}`}>
                <button className="bg-accent text-white rounded px-6 py-2">
                  View All Articles
                </button>
              </Link>
            </div>
            <ul className="mt-12">
              {categoryData.blogs.slice(0, 4).map((blog, index) => (
                <li
                  key={index}
                  className="cat-list ml-4 font-medium cursor-pointer mt-2 pb-4 pl-4 border-b border-[#FEF4F5] hover:underline"
                >
                  <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="my-12">
            <h4 className="ml-6 font-bold text-xl relative">
              <svg
                className="w-4 h-4 fill-accent inline absolute top-1/2 -left-6 transform -translate-y-1/4"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0 0 24 24"
              >
                <path d="M23.692 13.038l-5.457-2.273-2.273-5.457c-.156-.373-.768-.373-.924 0l-2.273 5.457-5.457 2.273C7.121 13.116 7 13.298 7 13.5s.121.384.308.462l5.457 2.273 2.273 5.457C15.116 21.879 15.298 22 15.5 22s.384-.121.462-.308l2.273-5.457 5.457-2.273C23.879 13.884 24 13.702 24 13.5S23.879 13.116 23.692 13.038zM10.658 6.025L7.146 4.854 5.975 1.342c-.137-.408-.813-.408-.949 0L3.854 4.854.342 6.025C.138 6.094 0 6.285 0 6.5s.138.406.342.475l3.513 1.171 1.171 3.513C5.094 11.862 5.285 12 5.5 12s.406-.138.475-.342l1.171-3.513 3.513-1.171C10.862 6.906 11 6.715 11 6.5S10.862 6.094 10.658 6.025zM8.658 19.025l-2.013-.671-.671-2.013c-.137-.408-.813-.408-.949 0l-.671 2.013-2.013.671C2.138 19.094 2 19.285 2 19.5s.138.406.342.475l2.013.671.671 2.013C5.094 22.862 5.285 23 5.5 23s.406-.138.475-.342l.671-2.013 2.013-.671C8.862 19.906 9 19.715 9 19.5S8.862 19.094 8.658 19.025z"></path>
              </svg>
              Comments
            </h4>
            <CommentSection blogId={blogData.id} />
          </div>
        </div>
      </div>
      <Subscribe />
      <Footer />
    </div>
  );
}

export default Blog;
