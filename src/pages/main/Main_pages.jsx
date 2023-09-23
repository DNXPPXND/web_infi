import React from "react";
import Navbar_pages from "../../components/navbar/Navbar_pages.jsx";
import Footer_page from "../../components/footer/Footer_page.jsx";
import Course_more_page from "../../components/course/Course_more_page.jsx";
import Newletter from "../../components/Newsletter.jsx";
import Header_pages from "../../components/Header_pages.jsx";

const Hero = () => {
  return (
    <>
      <Navbar_pages />
      <Header_pages />
      <h1 className="mt-20 text-2xl font-bold text-center ">คอร์สแนะนำ</h1>
      <Course_more_page />
      <h1 className="mt-20 text-2xl font-bold text-center ">DATA DESIGN</h1>
      <Course_more_page />
      <h1 className="mt-20 text-2xl font-bold text-center">UX/UI</h1>
      <Course_more_page />
      <h1 className="mt-20 text-2xl font-bold text-center">PROGRAMING</h1>
      <Course_more_page />
      <Newletter />
      <h1 className="mt-20 text-2xl font-bold text-center">TECHOLOGY</h1>
      <Course_more_page />
      <h1 className="mt-20 text-2xl font-bold text-center">SOFTSKILL</h1>
      <Course_more_page />
      <h1 className="mt-20 text-2xl font-bold text-center">SYSTEM ANALYSIS</h1>
      <Course_more_page />
      <Footer_page />
    </>
  );
};

export default Hero;
