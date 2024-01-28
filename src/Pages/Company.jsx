import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import AOS from "aos";
import "aos/dist/aos.css";
import Footer2 from '../components/Footer2/footer2';
import TopCompany from '../components/TopCompany/TopCompany';
import ProfileCard2 from '../components/ProfileCard2/ProfileCard2';


function Company() {
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
    <TopCompany/>
    <ProfileCard2/>
    <Footer2/>
    </div>
  )
}

export default Company
