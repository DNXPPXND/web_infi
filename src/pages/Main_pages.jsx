import React from "react";
import Navbar_pages from "../components/Navbar_pages.jsx";
import Footer_page from "../components/Footer_page";
import Course_more_page from "../components/Course_more_page";
import Newletter from "../components/Newsletter";
import Header_pages from "../components/Header_pages";

const Hero = () => {
  return (
    <>
      <Navbar_pages />
      <Header_pages />
      <Course_more_page />
      <Course_more_page />
      <Course_more_page />
      <Newletter />
      <Course_more_page />
      <Course_more_page />
      <Course_more_page />
      <Footer_page />
    </>
  );
};

export default Hero;
