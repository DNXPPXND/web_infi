import React from "react";
import Navbar_users from "../../components/users/navbars/Navbar_users";
import Footer from "../../components/users/footer/Footer";
import Hero_users from "../../components/users/hero/Hero_users";
import Non_onsite from "../../components/users/course/onsite/Non_onsite";
import Non_online from "../../components/users/course/online/Non_online";
import Newsletter from "../../components/users/newletter/Newsletter";

const Nonusers = () => {
  return (
    <div className="transition-transform duration-500 ease-in-out transform scale-100">
      <Navbar_users />
      <Hero_users />

      <h1 className="text-3xl font-mono font-bold text-center my-5 ">
        คอร์สเรียนออนไลน์
      </h1>
      <Non_online />
      <Newsletter />

      <h1 className="text-3xl font-mono font-bold text-center my-5 ">
        คอร์สเรียนออนไซต์
      </h1>
      < Non_onsite/>

      <Footer />
    </div>
  );
};

export default Nonusers;
