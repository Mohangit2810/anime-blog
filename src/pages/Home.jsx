import { useEffect } from "react";
import { Suspense } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Trending from "../components/Trending";
import FeaturedBlogs from "../components/FeaturedBlogs";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";

function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div>
      <Suspense
        fallback={
          <div>
            <img src="/mai.jpg" alt="loading please wait" />
          </div>
        }
      >
        <Header />
        <Hero />
        <Trending />
        <FeaturedBlogs />
        <Subscribe />
        <Footer />
      </Suspense>
    </div>
  );
}
export default Home;
