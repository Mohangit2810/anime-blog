import { NavLink } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [sticky, setSticky] = useState(false);
  const changeSticky = () => {
    if (window.scrollY >= 5) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  window.addEventListener("scroll", changeSticky);
  return (
    <nav
      className={`bg-white w-4/5 h-20 flex items-center justify-around transition-all duration-300 ease ${
        sticky
          ? "rounded-none w-full fixed top-0 z-[100]"
          : "rounded-full  mx-auto mt-8"
      }`}
    >
      <img className="w-40" src="/logo-zento-personal-1.png" alt="logo" />
      <ul className="flex items-center gap-8">
        <li>
          <NavLink to="/"> Home</NavLink>
        </li>
        <li>
          <NavLink to="about"> About</NavLink>
        </li>
        <li>
          <NavLink to="/"> Categories</NavLink>
        </li>
      </ul>
      {/* <div className="input-wrapper">
        <button className="icon">
          <svg
            className=""
            width="25px"
            height="25px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
              stroke="#000"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M22 22L20 20"
              stroke="#000"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </button>
        <input
          type="text"
          name="text"
          className="input"
          placeholder="search.."
        />
      </div> */}
      <svg
        className="h-16 yt-icon"
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
    </nav>
  );
}

export default Header;
