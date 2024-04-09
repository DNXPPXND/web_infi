import React from "react";
import Footer from "../../components/users/footer/Footer";
import Hero_users from "../../components/users/hero/Hero_users";
import Onsite from "../../components/users/course/onsite/Onsite";
import Online from "../../components/users/course/online/Online";
import Newsletter from "../../components/users/newletter/Newsletter";
import Navbar_profile from "../../components/users/navbars/Navbar_profile";

const Main_users = () => {
  return (
    <div className="transition-transform duration-500 ease-in-out transform scale-100">
      <Navbar_profile />
      <Hero_users />

      <h1 className="text-3xl font-mono font-bold text-center my-5 ">
        คอร์สเรียนออนไลน์
      </h1>
      <Online />
      <Newsletter />

      <h1 className="text-3xl font-mono font-bold text-center my-5 ">
        คอร์สเรียนออนไซต์
      </h1>
      <Onsite />

      <Footer />
    </div>
  );
};

export default Main_users;
