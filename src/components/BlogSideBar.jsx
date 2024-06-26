/* eslint-disable react/prop-types */

// import { useEffect } from "react";
import StarRating from "../components/StarRating";
// import { useState } from "react";

function BlogSideBar({ blogData, ratingData }) {
  // function extractH2Headings(htmlContent) {
  //   const parser = new DOMParser();
  //   const doc = parser.parseFromString(htmlContent, "text/html");
  //   const h2Elements = doc.querySelectorAll("h2");
  //   const h2Headings = [];
  //   h2Elements.forEach((element) => {
  //     h2Headings.push(element.textContent.trim());
  //   });
  //   return h2Headings;
  // }
  // console.log(extractH2Headings(blogData.content));
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
  return (
    <aside className="static md:flex md:gap-24 lg:!block lg:sticky lg:top-32 lg:z-2 ml-4 lg:ml-0 w-max h-max mb-12 lg:!mb-28 ">
      <div className="">
        <h4 className="font-bold text-xl ml-2">
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
        <ul className=" bg-white ml-3 mt-6 text-sm p-4 pl-2 lg:p-8 lg:pr-6 xl:!pr-16 rounded flex flex-col items-start gap-4 w-64 lg:!w-max">
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

            <StarRating
              rating={ratingData.averageRating}
              total={ratingData.totalRating}
            />
          </li>
        </ul>
      </div>
      <div className="mt-12 md:mt-0 lg:!mt-12 w-64 sm:w-80 lg:!w-80">
        <h4 className="font-bold text-xl ml-2">
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
          {blogData.headings.map((heading, index) => (
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
  );
}

export default BlogSideBar;
