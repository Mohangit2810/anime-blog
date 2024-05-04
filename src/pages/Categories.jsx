import { useEffect } from "react";
import CategoriesCard from "../components/CategoriesCard";
import Header from "../components/Header";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";
function Categories() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div>
      <Header />
      <CategoriesCard />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default Categories;
