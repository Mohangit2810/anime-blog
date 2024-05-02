function AboutUs() {
  return (
    <div>
      <h2 className="text-center text-3xl font-bold my-16">
        <span className="border-b-4 border-accent">About Us</span>
      </h2>
      <div className="px-4 md:px-12 py-8 bg-white mx-0 md:mx-12 xl:!mx-56 mb-12 md:mb-24 rounded">
        <img className=" rounded-lg mb-12 mt-4" src="/about.jpg" alt="about" />
        <p className="indent-24 text-base lg:text-lg tracking-wider leading-relaxed text-justify">
          This AnimeBlogz website is made for fun and not to be taken serious.We
          just practicing our React JS and Tailwind Skills. This website design
          is inspired by Zento theme in the themeforest elements. If you are the
          original designer of the Zento theme and you want us to take down this
          website, please contact us at the contact page. Or If you are cool
          enough to let us keep this website, we will be very grateful. The
          blogs here are not written by proffesional blog writers, so please
          don&apos;t take it too serious. We are just having fun here. Thank you
          for visiting our website. Have a great day!
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
