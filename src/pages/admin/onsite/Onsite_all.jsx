import React from "react";
import Footer from "../../../components/users/footer/Footer";
import Nav_admin from "../../../components/admin/navbars/Nav_admin";
import Navbars_admin from "../../../components/admin/navbars/Navbars_admin";
import Onsite_view from "../../../components/admin/onsite/Onsite_view";

const Onsite_all = () => {
  return (
    <>
      <Navbars_admin />
      <Nav_admin />
      <div class="p-4 sm:ml-64">
        <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <div class="grid mb-4">
            <Onsite_view/>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Onsite_all;
