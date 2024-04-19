import { Link } from "react-router-dom";
function CategoriesCard() {
  return (
    <div className="mx-52">
      <h1 className="text-4xl font-bold text-center mt-12 mb-8">
        Explore Our Catogories
        <svg
          className="w-12 h-12 fill-accent inline ml-2 align-middle"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="100"
          height="100"
          viewBox="0 0 24 24"
        >
          <path d="M23.692 13.038l-5.457-2.273-2.273-5.457c-.156-.373-.768-.373-.924 0l-2.273 5.457-5.457 2.273C7.121 13.116 7 13.298 7 13.5s.121.384.308.462l5.457 2.273 2.273 5.457C15.116 21.879 15.298 22 15.5 22s.384-.121.462-.308l2.273-5.457 5.457-2.273C23.879 13.884 24 13.702 24 13.5S23.879 13.116 23.692 13.038zM10.658 6.025L7.146 4.854 5.975 1.342c-.137-.408-.813-.408-.949 0L3.854 4.854.342 6.025C.138 6.094 0 6.285 0 6.5s.138.406.342.475l3.513 1.171 1.171 3.513C5.094 11.862 5.285 12 5.5 12s.406-.138.475-.342l1.171-3.513 3.513-1.171C10.862 6.906 11 6.715 11 6.5S10.862 6.094 10.658 6.025zM8.658 19.025l-2.013-.671-.671-2.013c-.137-.408-.813-.408-.949 0l-.671 2.013-2.013.671C2.138 19.094 2 19.285 2 19.5s.138.406.342.475l2.013.671.671 2.013C5.094 22.862 5.285 23 5.5 23s.406-.138.475-.342l.671-2.013 2.013-.671C8.862 19.906 9 19.715 9 19.5S8.862 19.094 8.658 19.025z"></path>
        </svg>
      </h1>
      <p className="text-base text-center mx-56 leading-relaxed tracking-wider">
        Whether you&apos;re a photography aficionado or simply intrigued by the
        art of visual storytelling, our blog is your gateway to exploring the
        mesmerizing world of renowned photographers and the captivating
        narratives.
      </p>
      <ul className="my-20 bg-white rounded grid grid-cols-4 py-12 pl-16 gap-y-8">
        <Link to="/categories/1">
          <li className="trending-icon cursor-pointer flex items-center justify-start gap-3">
            <div className="gif-container relative before:bg-[#f266ee] ">
              <img
                className="category-gif rounded-full w-16 h-16 object-cover"
                src="/slice.webp"
                alt="SOL"
              />
            </div>
            <div className=" ">
              <p className="font-semibold text-start">Slice of Life</p>
              <p className="text-left">3 Articles</p>
            </div>
          </li>
        </Link>
        <Link to="/categories/2">
          <li className="trending-icon cursor-pointer flex items-center justify-start gap-3">
            <div className="gif-container relative before:bg-[#e81a1a] ">
              <img
                className="category-gif rounded-full w-16 h-16 object-cover"
                src="/shounen.gif"
                alt="SOL"
              />
            </div>
            <div className=" ">
              <p className="font-semibold text-start">Shounen</p>
              <p className="text-left">2 Articles</p>
            </div>
          </li>
        </Link>
        <Link to="/categories/3">
          <li className="trending-icon cursor-pointer flex items-center justify-start gap-3">
            <div className="gif-container relative before:bg-[#4ebae6] ">
              <img
                className="category-gif rounded-full w-16 h-16 object-cover"
                src="/romcom.gif"
                alt="SOL"
              />
            </div>
            <div className=" ">
              <p className="font-semibold text-start">Rom-Com</p>
              <p className="text-left">6 Articles</p>
            </div>
          </li>
        </Link>
        <Link to="/categories/4">
          <li className="trending-icon cursor-pointer flex items-center justify-start gap-3">
            <div className="gif-container relative before:bg-[#4ee681] ">
              <img
                className="category-gif rounded-full w-16 h-16 object-cover"
                src="/community.gif"
                alt="SOL"
              />
            </div>
            <div className=" ">
              <p className="font-semibold text-start">Community</p>
              <p className="text-left">7 Articles</p>
            </div>
          </li>
        </Link>
        <Link to="/categories/5">
          <li className="trending-icon cursor-pointer flex items-center justify-start gap-3">
            <div className="gif-container relative before:bg-[#e8881a] ">
              <img
                className="category-gif rounded-full w-16 h-16 object-cover"
                src="/gacha.gif"
                alt="SOL"
              />
            </div>
            <div className=" ">
              <p className="font-semibold text-start">Gacha</p>
              <p className="text-left">2 Articles</p>
            </div>
          </li>
        </Link>
        <Link to="/categories/6">
          <li className="trending-icon cursor-pointer flex items-center justify-start gap-3">
            <div className="gif-container relative before:bg-[#4682B4] ">
              <img
                className="category-gif rounded-full w-16 h-16 object-cover"
                src="/bgmi.gif"
                alt="SOL"
              />
            </div>
            <div className=" ">
              <p className="font-semibold text-start">BGMI</p>
              <p className="text-left">1 Articles</p>
            </div>
          </li>
        </Link>
        <Link to="/categories/7">
          <li className="trending-icon cursor-pointer flex items-center justify-start gap-3">
            <div className="gif-container relative before:bg-[#BA55D3] ">
              <img
                className="category-gif rounded-full w-16 h-16 object-cover"
                src="/isekai.gif"
                alt="SOL"
              />
            </div>
            <div className=" ">
              <p className="font-semibold text-start">Isekai</p>
              <p className="text-left">3 Articles</p>
            </div>
          </li>
        </Link>
        <Link to="/categories/8">
          <li className="trending-icon cursor-pointer flex items-center justify-start gap-3">
            <div className="gif-container relative before:bg-[#FFA07A] ">
              <img
                className="category-gif rounded-full w-16 h-16 object-cover"
                src="/random.gif"
                alt="SOL"
              />
            </div>
            <div className=" ">
              <p className="font-semibold text-start">Random</p>
              <p className="text-left">4 Articles</p>
            </div>
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default CategoriesCard;
