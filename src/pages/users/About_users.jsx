import React from "react";
import About_hero from "../../components/users/hero/About_hero";
import Navbar_users from "../../components/users/navbars/Navbar_users";
import Footer from "../../components/users/footer/Footer";

const About_users = () => {
  return (
    <>
      <Navbar_users />
      <About_hero />
      <Footer />
    </>
  );
};

export default About_users;
