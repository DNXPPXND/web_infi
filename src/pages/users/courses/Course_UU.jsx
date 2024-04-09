import React from "react";
import Footer from "../../../components/users/footer/Footer";
import Nav_users from "../../../components/users/navbars/Nav_users";
import Navbar_users from "../../../components/users/navbars/Navbar_users";
import Uxui from "../../../components/users/course/courses/Uxui";
import Nav_course from "../../../components/users/navbars/Nav_course";
import Navbar_profile from "../../../components/users/navbars/Navbar_profile";

const Course_UU = () => {
  return (
    <>
      <Navbar_profile />
      <nav>
        <Nav_course />
      </nav>
      <div class="p-4 sm:ml-64">
        <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <div class="grid mb-4">
            <Uxui />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Course_UU;
