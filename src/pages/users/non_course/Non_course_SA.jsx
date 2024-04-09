import React from "react";
import Navbar_users from "../../../components/users/navbars/Navbar_users";
import Nav_users from "../../../components/users/navbars/Nav_users";
import Footer from "../../../components/users/footer/Footer";
import Non_SA from "../../../components/users/non_course/Non_SA";

const Course_SA = () => {
  return (
    <>
      <Navbar_users />
      <nav>
        <Nav_users />
      </nav>
      <div class="p-4 sm:ml-64">
        <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <div class="grid mb-4">
            <Non_SA />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Course_SA;
