import Header from "../components/Header";
import Hero from "../components/Hero";
import Trending from "../components/Trending";
import FeaturedBlogs from "../components/FeaturedBlogs";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Trending />
      <FeaturedBlogs />
      <Subscribe />
      <Footer />
    </div>
  );
}
export default Home;
