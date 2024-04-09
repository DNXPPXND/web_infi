import React from "react";
import Footer from "../../../components/users/footer/Footer";
import Nav_users from "../../../components/users/navbars/Nav_users";
import Navbar_users from "../../../components/users/navbars/Navbar_users";
import Non_TL from "../../../components/users/non_course/Non_TL";

const Course_TL = () => {
  return (
    <>
      <Navbar_users />
      <nav>
        <Nav_users />
      </nav>
      <div class="p-4 sm:ml-64">
        <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <div class="grid mb-4">
            <Non_TL/>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Course_TL;
