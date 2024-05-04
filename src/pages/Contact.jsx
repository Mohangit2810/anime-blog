import { useEffect } from "react";
import Header from "../components/Header";
import ContactCard from "../components/ContactCard";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";
function Contact() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div>
      <Header />
      <ContactCard />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default Contact;
