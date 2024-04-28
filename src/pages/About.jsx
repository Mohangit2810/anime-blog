import Header from "../components/Header";
import AboutUs from "../components/AboutUs";
import OurTeam from "../components/OurTeam";
import Footer from "../components/Footer";
import FeaturedMiniBlogs from "../components/FeaturedMiniBlogs";
import RecentMiniBlogs from "../components/RecentMiniBlogs";
import Subscribe from "../components/Subscribe";
function About() {
  return (
    <div>
      <Header />
      <AboutUs />
      <OurTeam />
      <div className="flex flex-col md:flex-row gap-12 md:gap-24 my-20 mx-4 sm:mx-12 xl:mx-56 justify-center">
        <FeaturedMiniBlogs />
        <RecentMiniBlogs />
      </div>
      <Subscribe />
      <Footer />
    </div>
  );
}

export default About;
