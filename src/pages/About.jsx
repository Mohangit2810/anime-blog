import Header from "../components/Header";
import AboutUs from "../components/AboutUs";
import OurTeam from "../components/OurTeam";
import Footer from "../components/Footer";
import FeaturedMiniBlogs from "../components/FeaturedMiniBlogs";
import RecentMiniBlogs from "../components/RecentMiniBlogs";
function About() {
  return (
    <div>
      <Header />
      <AboutUs />
      <OurTeam />
      <div className="flex gap-24 my-20 mx-56 justify-center">
        <FeaturedMiniBlogs />
        <RecentMiniBlogs />
      </div>
      <Footer />
    </div>
  );
}

export default About;
