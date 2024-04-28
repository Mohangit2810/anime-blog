/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import StarRating from "./StarRating";

function BlogCard({ blog }) {
  return (
    <article className="flex flex-col md:flex-row gap-6 xl:gap-12 rounded-lg px-3 py-4 bg-white h-full xl:h-80">
      <div className="shrink-0 relative overflow-hidden my-auto">
        <Link to={`/blog/${blog.id}`}>
          <img
            className="blog-card-image w-full md:w-64 xl:!w-72 xl:!h-72 rounded-lg"
            src={blog.titleImage.potrait}
            alt={blog.title}
          />
        </Link>
        <Link to={`/categories/${blog.categoryId}`}>
          <span className="absolute top-6 -left-5 bg-[#0077b5] text-white text-xs rounded-full py-2 pl-10 pr-8 transition-all duration-300 ease-in-out hover:-left-3">
            {blog.mainCategory}
          </span>
        </Link>
      </div>
      <div className="flex flex-col gap-3 md:gap-6 pr-4 md:pr-8">
        <ul className="flex flex-col md:flex-row items-center gap-3 md:gap-6 text-sm mt-0 md:mt-4">
          <li className="hidden md:block flex items-center text-center">
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
            {blog.updated}
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
            {blog.minsRead} Min Read
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
            Rating
            <StarRating rating={blog.rating} total="none" />
          </li>
        </ul>
        <Link to={`/blog/${blog.id}`}>
          <h3 className="mt-2 md:mt-0 text-xl md:text-2xl text-center md:text-start font-bold hover:underline">
            {blog.title}
          </h3>
        </Link>
        <p className="text-sm md:text-base tracking-wide md:tracking-wider leading-normal xl:leading-relaxed text-center md:text-start">
          {blog.description} ...
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 items-center justify-between mt-4">
          <ul className="flex gap-4 text-sm md:text-base">
            {blog.tags.map((tag, index) => (
              <li
                key={index}
                className="relative tags pl-4 font-medium before:bg-accent"
              >
                {tag}
              </li>
            ))}
          </ul>
          <Link to={`/about/#ourTeam`}>
            <div className="flex gap-2 items-center">
              <img
                className="w-6 h-6 rounded-full"
                src={
                  blog.author === "MohanRaji" ? "/team-1.jpeg" : "/team-2.jpeg"
                }
                alt="nuu"
              />
              <p className="hover:text-accent text-sm">{blog.author}</p>
            </div>
          </Link>
        </div>
      </div>
    </article>
  );
}

export default BlogCard;
