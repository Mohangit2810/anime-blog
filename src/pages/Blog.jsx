/* eslint-disable react/prop-types */
import Header from "../components/Header";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";
import blogs from "../blogs/blogs";
import categories from "../blogs/categories";
import StarRating from "../components/StarRating";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import AddComment from "../components/AddComment";
import { getComments } from "../comment-section/commentSecion";

function Blog() {
  let { blogId } = useParams();
  const [htmlContent, setHtmlContent] = useState("");
  const [comments, setComments] = useState([]);
  const [activeHeadingId, setActiveHeadingId] = useState(null);
  const blogData = blogs.find((blog) => blog.id === parseInt(blogId));
  const categoryData = categories.find(
    (category) => category.id === blogData.categoryId
  );
  const mainHeadings = blogData.headings;

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const commentsData = await getComments(blogId);
        setComments(commentsData);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchComments();
  }, [blogId]);

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

  function scrollToHeading(event, index) {
    event.preventDefault();
    console.log(index);

    const targetHeading = document.getElementById(`heading-${index}`);
    const windowHeight = window.innerHeight;
    const offset = windowHeight * 0.2; // Adjust this value as needed

    if (targetHeading) {
      console.log(targetHeading.offsetTop);
      const targetPosition = targetHeading.offsetTop - offset;
      window.scrollTo({ top: targetPosition, behavior: "smooth" });
    }
  }

  function copyLink() {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    alert("Link copied to clipboard");
  }

  return (
    <div>
      <Header />
      <div className="mx-40 my-24 flex gap-12">
        <aside className="sticky top-32 z-2 w-max h-max mb-28">
          <div>
            <h4 className="font-bold text-xl">
              <svg
                className="w-4 h-4 fill-accent inline mr-2"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0 0 24 24"
              >
                <path d="M23.692 13.038l-5.457-2.273-2.273-5.457c-.156-.373-.768-.373-.924 0l-2.273 5.457-5.457 2.273C7.121 13.116 7 13.298 7 13.5s.121.384.308.462l5.457 2.273 2.273 5.457C15.116 21.879 15.298 22 15.5 22s.384-.121.462-.308l2.273-5.457 5.457-2.273C23.879 13.884 24 13.702 24 13.5S23.879 13.116 23.692 13.038zM10.658 6.025L7.146 4.854 5.975 1.342c-.137-.408-.813-.408-.949 0L3.854 4.854.342 6.025C.138 6.094 0 6.285 0 6.5s.138.406.342.475l3.513 1.171 1.171 3.513C5.094 11.862 5.285 12 5.5 12s.406-.138.475-.342l1.171-3.513 3.513-1.171C10.862 6.906 11 6.715 11 6.5S10.862 6.094 10.658 6.025zM8.658 19.025l-2.013-.671-.671-2.013c-.137-.408-.813-.408-.949 0l-.671 2.013-2.013.671C2.138 19.094 2 19.285 2 19.5s.138.406.342.475l2.013.671.671 2.013C5.094 22.862 5.285 23 5.5 23s.406-.138.475-.342l.671-2.013 2.013-.671C8.862 19.906 9 19.715 9 19.5S8.862 19.094 8.658 19.025z"></path>
              </svg>
              Article Info
            </h4>
            <ul className=" bg-white mt-6 text-sm p-8 pr-16 rounded flex flex-col items-start gap-4 w-max">
              <li className="flex items-center text-center">
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
                <span className="font-medium mr-2">Updated : </span>
                {blogData.updated}
              </li>
              <li className="flex items-center text-center">
                <svg
                  className="inline-block mr-2 w-5 h-5 fill-accent"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0 0 50 50"
                >
                  <path d="M 28.625 2 C 28.285156 2.003906 27.941406 2.019531 27.59375 2.0625 C 26.902344 2.152344 26.144531 2.386719 25.5625 2.96875 L 2.84375 25.6875 C 1.722656 26.808594 1.722656 28.660156 2.84375 29.78125 L 20.21875 47.15625 C 21.339844 48.277344 23.191406 48.277344 24.3125 47.15625 L 47.03125 24.4375 C 47.609375 23.859375 47.847656 23.09375 47.9375 22.40625 C 48.027344 21.71875 48 21.039063 48 20.375 L 48 5.5 C 48 3.578125 46.421875 2 44.5 2 L 29.625 2 C 29.300781 2 28.964844 1.996094 28.625 2 Z M 28.65625 4 C 28.949219 3.992188 29.285156 4 29.625 4 L 44.5 4 C 45.339844 4 46 4.660156 46 5.5 L 46 20.375 C 46 21.070313 45.996094 21.699219 45.9375 22.15625 C 45.878906 22.613281 45.785156 22.839844 45.625 23 L 22.90625 45.75 C 22.550781 46.105469 21.980469 46.105469 21.625 45.75 L 21.5 45.59375 L 4.25 28.375 C 3.894531 28.019531 3.894531 27.449219 4.25 27.09375 L 27 4.375 C 27.15625 4.21875 27.414063 4.121094 27.875 4.0625 C 28.105469 4.03125 28.363281 4.007813 28.65625 4 Z M 39 7 C 36.800781 7 35 8.800781 35 11 C 35 13.199219 36.800781 15 39 15 C 41.199219 15 43 13.199219 43 11 C 43 8.800781 41.199219 7 39 7 Z M 39 9 C 40.117188 9 41 9.882813 41 11 C 41 12.117188 40.117188 13 39 13 C 37.882813 13 37 12.117188 37 11 C 37 9.882813 37.882813 9 39 9 Z"></path>
                </svg>
                <span className="font-medium mr-2">Catogory : </span>
                {blogData.mainCategory}
              </li>
              <li className="flex items-center text-center">
                <svg
                  className="inline-block mr-2 w-5 h-5 fill-accent"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0 0 30 30"
                >
                  <path d="M 13.029297 3 C 12.479248 3 12.029297 3.4499512 12.029297 4 C 12.029297 4.5499878 12.479248 5 13.029297 5 L 14 5 L 14 6.0507812 C 12.609985 6.1707763 11.249756 6.5704345 10.009766 7.2304688 L 9.359375 6.2792969 C 9.0493164 5.8192749 8.43042 5.699768 7.9804688 6.0097656 C 7.5205078 6.3197631 7.3989258 6.9503784 7.7089844 7.4003906 L 8.3398438 8.3300781 C 5.90979 10.320068 4.4707031 13.290711 4.4707031 16.470703 C 4.4707031 22.285574 9.1707993 27 15 27 C 20.791227 27 25.529297 22.308399 25.529297 16.470703 C 25.529297 13.30072 24.10022 10.330078 21.660156 8.3300781 L 22.291016 7.4003906 C 22.600952 6.9503784 22.479492 6.3197631 22.019531 6.0097656 C 21.569458 5.699768 20.950684 5.819275 20.640625 6.2792969 L 19.990234 7.2304688 C 18.750244 6.5704345 17.389893 6.1690674 16 6.0390625 L 16 5 L 16.958984 5 C 17.519043 5 17.958984 4.5499878 17.958984 4 C 17.958984 3.4499512 17.519043 3 16.958984 3 L 13.029297 3 z M 15.001953 8.8144531 C 16.506958 8.8144531 18.009521 9.2398377 19.269531 10.089844 C 21.409424 11.529846 22.679688 13.910706 22.679688 16.470703 C 22.679687 20.741846 19.189094 24.150391 15 24.150391 C 10.725285 24.150391 7.3105469 20.700211 7.3105469 16.470703 C 7.3105469 13.900696 8.5906982 11.519836 10.720703 10.089844 C 11.990723 9.2398377 13.496948 8.8144531 15.001953 8.8144531 z M 14.800781 10.689453 C 14.250854 10.689453 13.800781 11.129395 13.800781 11.689453 L 13.800781 13.939453 C 13.800781 14.029419 13.82959 14.109253 13.849609 14.199219 C 13.229614 14.539246 12.800781 15.18927 12.800781 15.949219 C 12.800781 17.049255 13.700806 17.949219 14.800781 17.949219 C 15.900757 17.949219 16.800781 17.049255 16.800781 15.949219 C 16.800781 15.18927 16.369873 14.539246 15.75 14.199219 C 15.77002 14.119263 15.800781 14.029419 15.800781 13.939453 L 15.800781 11.689453 C 15.800781 11.129395 15.35083 10.689453 14.800781 10.689453 z"></path>
                </svg>
                <span className="font-medium mr-2">Reading Time : </span>
                {blogData.minsRead} Min Read
              </li>
              <li className="flex items-center text-center">
                <svg
                  className="inline-block mr-2 w-5 h-5 fill-accent"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0 0 24 24"
                >
                  <path d="M 12 3 A 4 4 0 0 0 8 7 A 4 4 0 0 0 12 11 A 4 4 0 0 0 16 7 A 4 4 0 0 0 12 3 z M 12 14 C 8.996 14 3 15.508 3 18.5 L 3 20 C 3 20.552 3.448 21 4 21 L 20 21 C 20.552 21 21 20.552 21 20 L 21 18.5 C 21 15.508 15.004 14 12 14 z"></path>
                </svg>
                <span className="font-medium mr-2">Author : </span>
                {blogData.author}
              </li>
              <li className="flex items-center text-center">
                <svg
                  className="inline-block mr-2 w-5 h-5 fill-accent"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0 0 30 30"
                >
                  <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M22.805,12.942 l-4.295,3.197l1.596,5.111c0.137,0.44-0.362,0.802-0.738,0.536L15,18.689l-4.368,3.097c-0.376,0.266-0.875-0.096-0.738-0.536 l1.596-5.111l-4.295-3.197c-0.37-0.275-0.179-0.862,0.282-0.867l5.354-0.062l1.713-5.073c0.147-0.436,0.765-0.436,0.912,0 l1.713,5.073l5.354,0.062C22.984,12.08,23.175,12.667,22.805,12.942z"></path>
                </svg>
                <span className="font-medium mr-2">Rating : </span>

                <StarRating rating={blogData.rating} />
              </li>
            </ul>
          </div>
          <div className="mt-12">
            <h4 className="font-bold text-xl">
              <svg
                className="w-4 h-4 fill-accent inline mr-2"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0 0 24 24"
              >
                <path d="M23.692 13.038l-5.457-2.273-2.273-5.457c-.156-.373-.768-.373-.924 0l-2.273 5.457-5.457 2.273C7.121 13.116 7 13.298 7 13.5s.121.384.308.462l5.457 2.273 2.273 5.457C15.116 21.879 15.298 22 15.5 22s.384-.121.462-.308l2.273-5.457 5.457-2.273C23.879 13.884 24 13.702 24 13.5S23.879 13.116 23.692 13.038zM10.658 6.025L7.146 4.854 5.975 1.342c-.137-.408-.813-.408-.949 0L3.854 4.854.342 6.025C.138 6.094 0 6.285 0 6.5s.138.406.342.475l3.513 1.171 1.171 3.513C5.094 11.862 5.285 12 5.5 12s.406-.138.475-.342l1.171-3.513 3.513-1.171C10.862 6.906 11 6.715 11 6.5S10.862 6.094 10.658 6.025zM8.658 19.025l-2.013-.671-.671-2.013c-.137-.408-.813-.408-.949 0l-.671 2.013-2.013.671C2.138 19.094 2 19.285 2 19.5s.138.406.342.475l2.013.671.671 2.013C5.094 22.862 5.285 23 5.5 23s.406-.138.475-.342l.671-2.013 2.013-.671C8.862 19.906 9 19.715 9 19.5S8.862 19.094 8.658 19.025z"></path>
              </svg>
              Table of Contents
            </h4>
            <ul id="sidebar" className="flex flex-col gap-4 mt-6">
              {mainHeadings.map((heading, index) => (
                <li
                  key={index}
                  className="pl-6 cursor-pointer"
                  onClick={(event) => scrollToHeading(event, index)}
                >
                  {heading}
                </li>
              ))}
            </ul>
          </div>
        </aside>
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
              src={blogData.titleImage}
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
            </p>
            <div className=" my-12 w-full gap-4 flex items-center justify-center">
              <p className="font-semibold">Share Article :</p>
              <ul className="flex gap-6 ml-2">
                <li className="twitter-icon relative cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-1/4">
                  <span className="twitter-share transition-all duration-500 ease-in-out hidden text-xs absolute -top-10 -translate-x-[35%] bg-white rounded w-max shadow p-2">
                    Share on Twitter
                  </span>
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
                </li>
                <li className="insta-icon relative cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-1/4">
                  <span className="insta-share transition-all duration-500 ease-in-out hidden text-xs absolute -top-10 -translate-x-[35%] bg-white rounded w-max shadow p-2">
                    Share on Instagram
                  </span>
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
                </li>
                <li className="mail-icon relative cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-1/4">
                  <span className="mail-share transition-all duration-500 ease-in-out hidden text-xs absolute -top-10 -translate-x-[35%] bg-white rounded w-max shadow p-2">
                    Share on Mail
                  </span>
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
                </li>
                <li className="whatsapp-icon relative cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-1/4">
                  <span className="whatsapp-share transition-all duration-500 ease-in-out hidden text-xs absolute -top-10 -translate-x-[35%] bg-white rounded w-max shadow p-2">
                    Share on Whatsapp
                  </span>
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
            <div className="mt-12 flex flex-col gap-6">
              {comments.length ? (
                comments.map((comment, index) => (
                  <div key={index} className="p-3 flex items-center gap-8">
                    <img
                      className="self-start w-16 h-16 rounded-full"
                      src={`https://ui-avatars.com/api/?name=${comment.name}&background=random&rounded=true`}
                      alt={comment.name}
                    />
                    <div className="">
                      <p className="font-semibold">
                        {comment.name}
                        <span className="text-sm ml-2 font-normal align-middle">
                          {comment.timestamp}
                        </span>
                      </p>
                      <p className="mt-3 leading-relaxed tracking-wide">
                        {comment.comment}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center text-semibold">
                  Be the first to Comment!
                </p>
              )}
            </div>
            <div className="my-8">
              <h4 className="font-bold text-lg mb-8">Leave a Reply!</h4>
              <AddComment blogId={blogData.id} />
            </div>
          </div>
        </div>
      </div>
      <Subscribe />
      <Footer />
    </div>
  );
}

export default Blog;
