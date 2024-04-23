import Header from "../components/Header";
import { useParams } from "react-router-dom";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";
import categories from "../blogs/categories";
import GridBlogCard from "../components/GridBlogCard";

function CategoryPage() {
  let { categoryId } = useParams();
  const category = categories.find(
    (category) => category.id === parseInt(categoryId)
  );

  return (
    <div>
      <Header />

      <div className="flex flex-col md:flex-row my-12 xl:!my-28 items-center justify-center gap-6">
        <div className="article-cat cursor-pointer flex flex-col md:flex-row items-center justify-center gap-8 border-b md:border-b-0 md:border-r border-accent pb-6 md:pb-0 md:pr-12">
          <div className="gif-container relative before:bg-[#f266ee]">
            <img
              className="category-gif rounded-full w-16 h-16 object-cover"
              src={category.image}
              alt="SOL"
            />
          </div>
          <div className="flex flex-col gap-3">
            <b className="text-2xl xs:text-3xl text-center">{category.name}</b>
            <p className="font-light">
              A Collection of
              <span className="font-semibold ml-1">
                {category.blogsNumber} posts
              </span>
            </p>
          </div>
        </div>
        <div className="w-4/5 md:w-2/5">
          <p className="p-2 xs:p-4 md:p-12 text-base tracking-wide md:tracking-wider leading-loose">
            {category.description}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 mb-16 gap-6 xl:!gap-12 mx-2 xs:mx-6 md:mx-12 xl:!mx-56">
        {category.blogs.map((blog, index) => (
          <GridBlogCard key={index} blog={blog} />
        ))}
      </div>

      <Subscribe />
      <Footer />
    </div>
  );
}

export default CategoryPage;
