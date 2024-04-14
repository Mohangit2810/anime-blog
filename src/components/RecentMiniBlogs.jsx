import MiniCard from "./MiniCard";
function RecentMiniBlogs() {
  return (
    <div>
      <h3 className="text-center font-bold text-xl mb-6">
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
        Recent Blogs
      </h3>
      <div className="flex flex-col gap-4">
        <MiniCard />
        <MiniCard />
        <MiniCard />
      </div>
    </div>
  );
}

export default RecentMiniBlogs;
