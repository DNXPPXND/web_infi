import React from "react";
import Course_more_page from "../../components/course/Course_more_page";
import Footer_page from "../../components/footer/Footer_page";
import Navbar_pages from "../../components/navbar/Navbar_pages.jsx";
import Nav_course from "../../components/nav/Nav_course";
import Course_more_page_onsite from "../../components/course/Course_more_page_onsite.jsx";

const Course_all = () => {
  return (
    <>
      <Navbar_pages />
      <Nav_course />
      <div class="p-4 sm:ml-64">
        <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <div class="grid mb-4">
            <Course_more_page />
            <Course_more_page_onsite />
          </div>
        </div>
      </div>

      <Footer_page />
    </>
  );
};

export default Course_all;
