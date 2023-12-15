import React from "react";
import Navbar_pages from "../../components/navbar/Navbar_pages.jsx";
import Footer_page from "../../components/footer/Footer_page.jsx";
import Course_more_page from "../../components/course/Course_more_page.jsx";
import Newletter from "../../components/Newsletter.jsx";
import Header_pages from "../../components/Header_pages.jsx";
import Course_more_page_onsite from "../../components/course/Course_more_page_onsite.jsx";
import Site from "../../components/course/Site.jsx";
import Site_line from "../../components/course/Site_line.jsx";


const Main_pages = () => {
  return (
    <div className="transition-transform duration-500 ease-in-out transform scale-100 ">
      <Navbar_pages />
      <Header_pages />
      <h1 className="mt-20 text-2xl font-bold text-center ">คอร์สแนะนำ</h1>
      <Course_more_page />
      <h1 className="mt-20 text-2xl font-bold text-center ">
        คอร์สเรียนออนไลน์
      </h1>
      <Site_line/>
      <Newletter className=" mt-20" />
      <h1 className="mt-20 text-2xl font-bold text-center ">
        คอร์สเรียนออนไซต์
      </h1>
      <Site/> 
      <Footer_page />
    </div>
  );
};

export default Main_pages;
