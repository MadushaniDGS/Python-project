import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import AOS from "aos";
import "aos/dist/aos.css";
import TopProducts from "./components/TopProducts/TopProducts";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";
import Jumbotran from "./components/Jumbotran/jumbotran";
import Block1 from "./components/Block1/block";
import CTA from "./components/CTA/ctasection";
import Counter from "./components/Counter/counter";
import Featured from "./components/Featured/feature";
import Content1 from "./components/Content1/content1";
import Content2 from "./components/Content2/content2";
import Team from "./components/Team/team";
import Testimonials2 from "./components/Testimonials2/testimonials";
import FAQ from "./components/FAQ/faq";
import ContactUs from "./components/ContactUs/contactus";
import Footer1 from "./components/Footer1/footer1";
import Footer2 from "./components/Footer2/footer2";
import Projects from "./components/Projects/projects";
import Partnerships from "./components/Partnerships/partnership";
import Hero1 from "./components/Hero1/her01";
import Jumbotran2 from "./components/Jumbotran2/jumbotran2";
import TopCatogaries from "./components/TopCatogaries/TopCatogaries";

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Hero1/>
      <TopCatogaries/>
      <Content1/>
      <Projects/>
    
      {/* <Counter/>
      
      <Content2/>
      
      <CTA/>
      <Featured/>
      <Partnerships/>
      <Team/>
      <Testimonials2/>
      <FAQ/>
      <ContactUs/>
      <Footer1/> */}
      <Footer2/>      
      {/* <Products /> */}
      {/* <Banner />
      <TopProducts handleOrderPopup={handleOrderPopup} />
      <Subscribe />
      <Products />
      <Testimonials /> 
      <Footer />*/}
      {<Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />}
    </div>
  );
};

export default App;
