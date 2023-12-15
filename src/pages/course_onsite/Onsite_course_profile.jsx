import React, { useEffect, useState } from "react";
import Footer_page from "../../components/footer/Footer_page.jsx";
import Table_online from "../../components/Table_online.jsx";
import YouTubeVideo from "../../components/vdo/Video.jsx";
import Navbar_profile from "../../components/navbar/Navbar_profile.jsx";
import { useParams } from "react-router-dom";
import axios from "axios";

const Online_course = () => {
  const { site_id } = useParams();
  const [site_details, setOnsite_details] = useState("");
  const [site_pic, setOnsite_pic] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:3333/admin-site/view/${site_id}`)
      .then((response) => {
        setOnsite_details(response.data.onsite.site_details);
        setOnsite_pic(response.data.onsite.site_pic);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [site_id]);

  return (
    <>
      <Navbar_profile />
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className=" p-20 rounded-lg">
          <h1 className="text-5xl md:text-3xl sm:text-2xl font-bold mb-4 text-center">
            รายละเอียดคอร์สเรียนออนไซต์
          </h1>
          <p className="text-gray-700 text-3xl md:text-1xl sm:text-lg text-left font-bold">
            {site_details}
          </p>
        </div>
        <div className="mt-10 items-center justify-center">
          <img src={site_pic} />
        </div>
      </div>
      <div className="mt-20 bg-gray-200 py-5 flex justify-center items-center h-screen">
        <YouTubeVideo />
      </div>
      <Table_online />
      <Footer_page />
    </>
  );
};

export default Online_course;
