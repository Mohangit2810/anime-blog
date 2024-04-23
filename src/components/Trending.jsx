import { Link } from "react-router-dom";
import categories from "../blogs/categories";

function Trending() {
  const trendingCategories = categories.slice(0, 6);
  return (
    <div className="my-24">
      <h2 className="text-center font-bold text-xl mb-6">
        <svg
          className="inline-block mr-2 w-6 h-6 fill-accent"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="100"
          height="100"
          viewBox="0,0,256,256"
        >
          <g
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
            <g transform="scale(10.66667,10.66667)">
              <path d="M17.671,9.665c-0.581,-1.165 -1.122,-2.118 -1.644,-3.041c-0.93722,-1.53632 -1.71334,-3.16529 -2.316,-4.861c-0.08237,-0.24623 -0.28623,-0.43235 -0.53893,-0.49201c-0.2527,-0.05966 -0.51827,0.01562 -0.70207,0.19901c-1.53495,1.81999 -2.32762,4.15159 -2.22,6.53c0.02759,0.86495 -0.2089,1.71778 -0.678,2.445c-0.27518,-1.30664 -1.08697,-2.43742 -2.237,-3.116c-0.23253,-0.11546 -0.5082,-0.10264 -0.72901,0.03391c-0.22081,0.13655 -0.35542,0.37747 -0.35599,0.63709c-0.05293,1.27247 -0.36639,2.52054 -0.921,3.667c-1.76479,3.42702 -0.81391,7.62647 2.255,9.959c1.2197,0.79924 2.64986,1.21701 4.108,1.2c2.16846,0.00778 4.25755,-0.81526 5.838,-2.3c2.258,-2.253 2.313,-6.518 0.141,-10.861z"></path>
            </g>
          </g>
        </svg>
        Trending Topics
      </h2>
      <div className="flex flex-col md:flex-row gap-8 md:gap-0 items-center justify-around mx-0 md:mx-12 xl:!mx-64 py-4 px-6 xl:!px-12 bg-white rounded-none md:rounded-full">
        <ul className=" grid grid-cols-3 mt-4 md:mt-0 gap-6 md:flex md:items-center md:justify-center md:gap-12">
          {trendingCategories.map((category, index) => (
            <Link
              className="md:last:hidden"
              key={index}
              to={`/categories/${category.id}`}
            >
              <li className=" trending-icon flex flex-col items-center justify-center gap-3">
                <div className="gif-container relative before:bg-[#f266ee]">
                  <img
                    className="category-gif rounded-full w-16 h-16 object-cover"
                    src={category.image}
                    alt={category.name}
                  />
                  <span className="absolute z-10 -top-[5px] -right-[5px] bg-accent text-white rounded-full px-[8px] py-[2px] text-center text-sm">
                    {category.blogsNumber}
                  </span>
                </div>
                <p className="font-semibold text-center">{category.name}</p>
              </li>
            </Link>
          ))}
        </ul>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <p className="font-semibold text-center">Or...</p>
          <Link to="/categories">
            <button className="bg-accent text-white rounded px-6 py-2 hover:bg-darkAccent mb-4 md:mt-0">
              Explore All
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Trending;
