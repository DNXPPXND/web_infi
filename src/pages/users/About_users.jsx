import React from "react";
import About_hero from "../../components/users/hero/About_hero";
import Footer from "../../components/users/footer/Footer";
import Navbar_profile from "../../components/users/navbars/Navbar_profile";

const About_users = () => {
  return (
    <>
      <Navbar_profile />
      <About_hero />
      <Footer />
    </>
  );
};

export default About_users;
