import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaHeart } from "react-icons/fa"; // Import heart icon from react-icons

// ... (imports and other code)

const Datadesign = () => {
  const [siteData, setSiteData] = useState([]);
  const [likedCourses, setLikedCourses] = useState([]);

  useEffect(() => {
    // Fetch data from the server
    axios
      .get("http://localhost:3333/admin-DD/view")
      .then((response) => {
        setSiteData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleCourse = (onsite_id) => {
    // Redirect to course details page
    window.location = `/online/details/${onsite_id}`;
  };

  const handleLike = (onsite_id) => {
    // Toggle like status for the course
    setLikedCourses((prevLikedCourses) => {
      if (prevLikedCourses.includes(onsite_id)) {
        return prevLikedCourses.filter((id) => id !== onsite_id);
      } else {
        return [...prevLikedCourses, onsite_id];
      }
    });
  };

  return (
    <>
      <div className="mt-20 p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-5">
        {siteData.map((item) => (
          <div
            key={item.onsite_id}
            className="rounded overflow-hidden shadow-lg"
          >
            <div className="w-full">
              <img
                src={`http://localhost:3333/Images/` + item.onsite_pic}
                alt={item.title}
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{item.onsite_name}</div>
              <p className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                # {item.category_name}
              </p>
              <p className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                <div
                  className={`heart-icon cursor-pointer ${
                    likedCourses.includes(item.onsite_id)
                      ? "text-red-500"
                      : "text-gray-500"
                  }`}
                  onClick={() => handleLike(item.onsite_id)}
                >
                  <FaHeart />
                </div>
              </p>
              <p className="text-gray-700 text-base overflow-hidden line-clamp-4">
                {item.onsite_details}
              </p>
              <div className="flex justify-center items-center mt-10">
                <button
                  className="btn-common bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleCourse(item.onsite_id)}
                >
                  <a href={`/online/details/${item.onsite_id}`}>
                    ลงทะเบียนเรียนออนไลน์
                  </a>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Datadesign;
