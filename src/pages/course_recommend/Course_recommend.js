import React, { useEffect, useState } from "react";
import Navbar_profile from "../../components/navbar/Navbar_profile";
import Footer_page from "../../components/footer/Footer_page";
import Nav_profile from "../../components/nav/Nav_profile";
import Recommends from "./Recommends";

export default function Course_recommend() {

  return (
    <>
      <Navbar_profile />
      <Nav_profile />
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <div className="grid mb-4">
          <Recommends/>
          </div>
        </div>
      </div>

      <Footer_page />
    </>
  );
}
