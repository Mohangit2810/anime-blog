/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom";
function GridBlogCard({ blog }) {
  const navigation = useNavigate();
  function handleCategoryClick(categoryId) {
    navigation.navigate(`/categories/${categoryId}`);
  }
  return (
    <Link to={`/blog/${blog.id}`}>
      <article className="flex flex-col gap-6 rounded-2xl bg-white">
        <div className="shrink-0 relative overflow-hidden">
          <img
            className="blog-card-image max-h-52 w-full rounded-t-2xl"
            src={blog.titleImage.landscape}
            alt={blog.title}
          />

          <span
            onClick={() => handleCategoryClick(blog.categoryId)}
            className="absolute top-6 -left-5 bg-[#0077b5] text-white text-sm rounded-full py-2 pl-8 pr-6 transition-all duration-300 ease-in-out hover:-left-3"
          >
            {blog.mainCategory}
          </span>
        </div>
        <div className="flex flex-col gap-4 p-4">
          <h3 className="text-xl font-bold text-center hover:underline">
            {blog.title}
          </h3>
          <p className="text-center text-sm tracking-wider leading-relaxed">
            {blog.description.split(" ").slice(0, 15).join(" ")} ...
          </p>
          <div className="flex items-center justify-around mt-4 md:pb-4">
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
            <p className="text-sm">
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
            </p>
          </div>
        </div>
      </article>
    </Link>
  );
}

export default GridBlogCard;
