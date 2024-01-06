import React from "react";
import Navbar_users from "../../components/users/navbars/Navbar_users";
import Footer from "../../components/users/footer/Footer";
import Hero_users from "../../components/users/hero/Hero_users";


const Main_users = () => {
  return (
    <div className="transition-transform duration-500 ease-in-out transform scale-100 ">
      <Navbar_users/>
      <Hero_users/>
      <Footer/>
    </div>
  );
};

export default Main_users;
