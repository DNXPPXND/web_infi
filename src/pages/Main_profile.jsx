import React from "react";
import Footer_page from "../components/footer/Footer_page";
import Course_more_page from "../components/course/Course_more_page.jsx";
import Newletter from "../components/Newsletter";
import Header_pages from "../components/Header_pages";
import Navbar_profile from "../components/navbar/Navbar_profile.jsx";
import Course_more_page_onsite from "../components/course/Course_more_page_onsite.jsx";
import Site from "../components/course/Site.jsx";
import Site_line from "../components/course/Site_line.jsx";
import Course_recommend from "./course_recommend/Course_recommend.js";
import Recommends from "./course_recommend/Recommends.js";

const Main_profile = () => {
  return (
    <>
      <Navbar_profile />
      <Header_pages />
      <h1 className="mt-20 text-2xl font-bold text-center ">คอร์สแนะนำ</h1>
      <Recommends/>
      <h1 className="mt-20 text-2xl font-bold text-center ">
        คอร์สเรียนออนไลน์
      </h1>
      <Site_line />
      <Newletter />
      <h1 className="mt-20 text-2xl font-bold text-center ">
        คอร์สเรียนออนไซต์
      </h1>
      <Site />
      <Footer_page />
    </>
  );
};

export default Main_profile;
