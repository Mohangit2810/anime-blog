import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="px-6 md:px-12 xl:!px-48 py-8 xl:!py-12">
      <div className="flex flex-col md:flex-row items-center gap-16 md:gap-32 xl:!gap-60">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 xl:!gap-24">
          <div>
            <h4 className="ml-2 md:ml-0 font-bold text-lg md:text-xl relative">
              <svg
                className="w-4 h-4 fill-accent inline absolute top-1/2 -left-6 transform -translate-y-1/2"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0 0 24 24"
              >
                <path d="M23.692 13.038l-5.457-2.273-2.273-5.457c-.156-.373-.768-.373-.924 0l-2.273 5.457-5.457 2.273C7.121 13.116 7 13.298 7 13.5s.121.384.308.462l5.457 2.273 2.273 5.457C15.116 21.879 15.298 22 15.5 22s.384-.121.462-.308l2.273-5.457 5.457-2.273C23.879 13.884 24 13.702 24 13.5S23.879 13.116 23.692 13.038zM10.658 6.025L7.146 4.854 5.975 1.342c-.137-.408-.813-.408-.949 0L3.854 4.854.342 6.025C.138 6.094 0 6.285 0 6.5s.138.406.342.475l3.513 1.171 1.171 3.513C5.094 11.862 5.285 12 5.5 12s.406-.138.475-.342l1.171-3.513 3.513-1.171C10.862 6.906 11 6.715 11 6.5S10.862 6.094 10.658 6.025zM8.658 19.025l-2.013-.671-.671-2.013c-.137-.408-.813-.408-.949 0l-.671 2.013-2.013.671C2.138 19.094 2 19.285 2 19.5s.138.406.342.475l2.013.671.671 2.013C5.094 22.862 5.285 23 5.5 23s.406-.138.475-.342l.671-2.013 2.013-.671C8.862 19.906 9 19.715 9 19.5S8.862 19.094 8.658 19.025z"></path>
              </svg>
              Follow Me !
            </h4>
            <ul className="grid grid-cols-2 md:flex md:flex-col gap-x-4 md:gap-2 md:gap-6 mt-6">
              <a href="https://twitter.com/MohanRaji212855" target="_blank">
                <li className="flex items-center justify-between gap-4 md:gap-12 xl:!gap-24 py-2 border-b border-[#feeaec] cursor-pointer hover:text-accent">
                  <p className="text-sm">
                    Follow on <span className="font-semibold">Twitter</span>
                  </p>
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
              </a>
              <a
                href="https://instagram.com/mohan_raji_28?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"
                target="_blank"
              >
                <li className="flex items-center justify-between gap-4 md:gap-12 xl:!gap-24 py-2 border-b border-[#feeaec] cursor-pointer hover:text-accent">
                  <p className="text-sm">
                    Follow on <span className="font-semibold">Instagram</span>
                  </p>
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
              </a>
              <a
                href="https://myanimelist.net/profile/_Homo_Sapien_"
                target="_blank"
              >
                <li className="flex items-center justify-between gap-4 md:gap-12 xl:!gap-24 py-2 border-b border-[#feeaec] cursor-pointer hover:text-accent">
                  <p className="text-sm">
                    Follow on <span className="font-semibold">MAL</span>
                  </p>
                  <img className="w-5 h-5" src="/MAL.svg" alt="MAL" />
                </li>
              </a>
              <a href="https://github.com/Mohangit2810" target="_blank">
                <li className="flex items-center justify-between gap-4 md:gap-12 xl:!gap-24 py-2 border-b border-[#feeaec] cursor-pointer hover:text-accent">
                  <p className="text-sm">
                    Follow on <span className="font-semibold">GitHub</span>
                  </p>
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="100"
                    height="100"
                    viewBox="0 0 50 50"
                  >
                    <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"></path>
                  </svg>
                </li>
              </a>
            </ul>
          </div>
          <div>
            <h4 className="ml-2 md:ml-0 font-bold text-lg md:text-xl relative">
              <svg
                className="w-4 h-4 fill-accent inline absolute top-1/2 -left-6 transform -translate-y-1/2"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0 0 24 24"
              >
                <path d="M23.692 13.038l-5.457-2.273-2.273-5.457c-.156-.373-.768-.373-.924 0l-2.273 5.457-5.457 2.273C7.121 13.116 7 13.298 7 13.5s.121.384.308.462l5.457 2.273 2.273 5.457C15.116 21.879 15.298 22 15.5 22s.384-.121.462-.308l2.273-5.457 5.457-2.273C23.879 13.884 24 13.702 24 13.5S23.879 13.116 23.692 13.038zM10.658 6.025L7.146 4.854 5.975 1.342c-.137-.408-.813-.408-.949 0L3.854 4.854.342 6.025C.138 6.094 0 6.285 0 6.5s.138.406.342.475l3.513 1.171 1.171 3.513C5.094 11.862 5.285 12 5.5 12s.406-.138.475-.342l1.171-3.513 3.513-1.171C10.862 6.906 11 6.715 11 6.5S10.862 6.094 10.658 6.025zM8.658 19.025l-2.013-.671-.671-2.013c-.137-.408-.813-.408-.949 0l-.671 2.013-2.013.671C2.138 19.094 2 19.285 2 19.5s.138.406.342.475l2.013.671.671 2.013C5.094 22.862 5.285 23 5.5 23s.406-.138.475-.342l.671-2.013 2.013-.671C8.862 19.906 9 19.715 9 19.5S8.862 19.094 8.658 19.025z"></path>
              </svg>
              Quick Links
            </h4>
            <ul className="grid grid-cols-2 md:flex md:flex-col gap-x-4 md:gap-6 mt-6">
              <li className="py-2 border-b border-[#feeaec] cursor-pointer hover:text-accent">
                <Link to="/">Home</Link>
              </li>
              <li className="py-2 border-b border-[#feeaec] cursor-pointer hover:text-accent">
                <Link to="/about">About</Link>
              </li>
              <li className="py-2 border-b border-[#feeaec] cursor-pointer hover:text-accent">
                <Link to="/categories">Categories</Link>
              </li>
              <li className="py-2 border-b border-[#feeaec] cursor-pointer hover:text-accent">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="self-start flex flex-col gap-8">
          <img className="w-48" src="/logo-zento-personal-1.png" alt="logo" />
          <p className="leading-relaxed">
            Join youself in this <b>Community</b> of outrageous takes <br />
            about
            <b> anime</b> , <b>manga</b> and in video games.
          </p>
          <a
            className="self-center w-full"
            href="https://youtube.com/@DivertidoAnimeClips-ho6rd?si=PmAiKAtwq7P2gPZJ"
            target="_blank"
          >
            <button className="w-3/5 mx-auto bg-accent hover:bg-darkAccent text-white rounded px-6 py-2">
              Go to Youtube
            </button>
          </a>
        </div>
      </div>
      <p className="mt-12 mb-6 text-center">
        <b>Zento</b> Theme by <b>EstudioPatagon</b>
        <span className="w-1 h-1 bg-accent align-middle inline-block rounded-full mx-2"></span>
        Copied by <b>MohanRaji</b>
      </p>
    </footer>
  );
}

export default Footer;
