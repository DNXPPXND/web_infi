import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaHeart } from "react-icons/fa"; // Import heart icon from react-icons

const Onsite = () => {
  const [siteData, setSiteData] = useState([]);
  const [likedCourses, setLikedCourses] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3333/admin-site/view")
      .then((response) => {
        setSiteData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleCourse = (site_id) => {
    window.location = "/login";
  };

  const handleLike = (site_id) => {
    // Toggle like status for the course
    setLikedCourses((prevLikedCourses) => {
      if (prevLikedCourses.includes(site_id)) {
        return prevLikedCourses.filter((id) => id !== site_id);
      } else {
        return [...prevLikedCourses, site_id];
      }
    });
  };

  return (
    <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-5">
      {siteData.map((item) => (
        <div key={item.site_id} className="rounded overflow-hidden shadow-lg">
          <div className="w-full h-64">
            <img
              src={item.site_pic}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{item.site_name}</div>
            <p className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <div className="flex "># {item.category_name}</div>
            </p>
            <p className="text-gray-700 text-base">{item.site_details}</p>
            <div className="flex justify-between items-center mt-5">
              <div
                className={`heart-icon cursor-pointer ${
                  likedCourses.includes(item.site_id)
                    ? "text-red-500"
                    : "text-gray-500"
                }`}
                onClick={() => handleLike(item.site_id)}
              >
                <FaHeart />
              </div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                <a href="/login">ลงทะเบียนเรียนออนไซต์</a>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Onsite;
