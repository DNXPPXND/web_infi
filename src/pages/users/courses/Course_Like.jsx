import React from "react";
import Footer from "../../../components/users/footer/Footer";
import Navbar_profile from "../../../components/users/navbars/Navbar_profile";
import Like_course from "../../../components/users/course/courses/Like_course";
import Nav_profile from "../../../components/users/navbars/Nav_profile";

const Course_Like = () => {
  return (
    <>
      <Navbar_profile />
      <nav>
        <Nav_profile />
      </nav>
      <div class="p-4 sm:ml-64">
        <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <div class="grid mb-4">
            <Like_course/>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Course_Like;
