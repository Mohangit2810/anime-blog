import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import SideBar from "./SideBar";

function Header() {
  const [sticky, setSticky] = useState(false);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const changeSticky = () => {
    if (window.scrollY >= 5) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  window.addEventListener("scroll", changeSticky);
  return (
    <>
      <nav
        className={`bg-white h-20 flex items-center justify-around transition-all duration-300 ease shadow ${
          sticky
            ? "rounded-none w-full fixed top-0 z-[100]"
            : "rounded-none lg:rounded-full w-full lg:w-4/5 lg:p-0 mx-auto mt-0 lg:mt-8"
        }`}
      >
        <Link to="/">
          <img
            className="w-24 md:w-32 lg:w-40"
            src="/logo-zento-personal-1.png"
            alt="logo"
          />
        </Link>
        <ul className="hidden lg:flex  items-center gap-8">
          <li className="font-medium">
            <NavLink to="/"> Home</NavLink>
          </li>
          <li className="font-medium">
            <NavLink to="/blog"> Blogs</NavLink>
          </li>
          <li className="font-medium">
            <NavLink to="/about"> About</NavLink>
          </li>
          <li className="font-medium">
            <NavLink to="/categories"> Categories</NavLink>
          </li>
          <li className="font-medium">
            <NavLink to="/contact"> Contact</NavLink>
          </li>
        </ul>

        <a
          className="order-first lg:order-last cursor-pointer"
          href="https://youtube.com/@DivertidoAnimeClips-ho6rd?si=PmAiKAtwq7P2gPZJ"
          target="_blank"
        >
          <svg
            className="h-12 md:h-16 yt-icon"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="50"
            height="50"
            viewBox="0 0 48 48"
          >
            <path
              fill="#FF3D00"
              d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"
            ></path>
            <path fill="#FFF" d="M20 31L20 17 32 24z"></path>
          </svg>
        </a>
        <button
          className=" lg:hidden cursor-pointer"
          onClick={() => setIsSideBarOpen(!isSideBarOpen)}
        >
          <svg
            className="w-6 h-6 md:w-8 md:h-8"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 50 50"
          >
            <path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"></path>
          </svg>
        </button>
      </nav>
      <SideBar
        isSideBarOpen={isSideBarOpen}
        setIsSideBarOpen={setIsSideBarOpen}
      />
    </>
  );
}

export default Header;
