import React from "react";
import Footer_page from "../../components/footer/Footer_page";
import Navbar_pages from "../../components/navbar/Navbar_pages.jsx";
import Nav_course from "../../components/nav/Nav_course";
import Programing from "../../components/course/Programing";
import Programing_onsite from "../../components/course/Programing_onsite.jsx";

const Ux_ui_pages = () => {
  return (
    <>
      <Navbar_pages />
      <Nav_course />
      <div class="p-4 sm:ml-64">
        <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <div class="grid mb-4">
            <Programing />
            <Programing_onsite />
          </div>
        </div>
      </div>

      <Footer_page />
    </>
  );
};

export default Ux_ui_pages;
