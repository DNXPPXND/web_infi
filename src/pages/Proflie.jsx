import React from "react";
import Footer_page from "../components/footer/Footer_page";
import Navbar_profile from "../components/navbar/Navbar_profile";
import Course_more_page from "../components/course/Course_more_page";
import Nav_profile from "../components/nav/Nav_profile";

const Proflie = () => {
  return (
    <>
      <Navbar_profile />
      <Nav_profile />
      <div class="p-4 sm:ml-64">
        <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <div class="grid mb-4">
            <Course_more_page />
            <Course_more_page />
            <Course_more_page />
            <Course_more_page />
          </div>
        </div>
      </div>
      <Footer_page />
    </>
  );
};

export default Proflie;
