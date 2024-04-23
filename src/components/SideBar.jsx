/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

function SideBar({ isSideBarOpen, setIsSideBarOpen }) {
  return (
    <div
      className={
        isSideBarOpen
          ? "w-60 md:w-96 p-8 md:p-24 bg-primary fixed right-0 top-0 h-full z-[105] overflow-hidden transition-all duration-300 ease-in-out"
          : "hidden transition-all duration-300 ease-in-out"
      }
    >
      <button
        onClick={() => setIsSideBarOpen(!isSideBarOpen)}
        className="bg-accent py-1 pr-6 pl-8 rounded-full absolute top-3 -left-4"
      >
        <svg
          className="w-8 h-8"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="100"
          height="100"
          viewBox="0 0 50 50"
        >
          <path d="M 15.125 12.28125 L 12.28125 15.125 L 22.21875 25 L 12.28125 34.875 L 15.125 37.71875 L 25.0625 27.84375 L 35 37.71875 L 37.8125 34.875 L 27.90625 25 L 37.8125 15.125 L 35 12.28125 L 25.0625 22.15625 Z"></path>
        </svg>
      </button>
      <div className=" mt-12 md:mt-0">
        <img src="/logo-zento-personal-1.png" alt="logo" />
        <p className="text-center mt-4">Anime Blogz</p>
      </div>
      <ul
        id="sideNavBar"
        className="flex flex-col mt-12 items-start gap-8 text-lg "
      >
        <li className="font-medium">
          <NavLink className="pl-2" to="/">
            Home
          </NavLink>
        </li>
        <li className="font-medium">
          <NavLink className="pl-2" to="/blog">
            Blogs
          </NavLink>
        </li>
        <li className="font-medium">
          <NavLink className="pl-2" to="/about">
            About
          </NavLink>
        </li>
        <li className="font-medium">
          <NavLink className="pl-2" to="/categories">
            Categories
          </NavLink>
        </li>
        <li className="font-medium">
          <NavLink className="pl-2" to="/contact">
            Contact
          </NavLink>
        </li>
      </ul>

      {/* <a
        className=""
        href="https://youtube.com/@DivertidoAnimeClips-ho6rd?si=PmAiKAtwq7P2gPZJ"
        target="_blank"
      >
        <svg
          className="h-24 yt-icon mx-auto mt-12"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="100"
          height="100"
          viewBox="0 0 48 48"
        >
          <path
            fill="#FF3D00"
            d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"
          ></path>
          <path fill="#FFF" d="M20 31L20 17 32 24z"></path>
        </svg>
      </a> */}
    </div>
  );
}

export default SideBar;
