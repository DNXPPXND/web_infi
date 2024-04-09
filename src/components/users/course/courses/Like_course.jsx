import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaHeart } from "react-icons/fa"; // นำเข้าไอคอนหัวใจจาก react-icons

const Online = () => {
  const [likedCourses, setLikedCourses] = useState([]);

  useEffect(() => {
    const storedLikedCourses = localStorage.getItem("likedCourses");
    if (storedLikedCourses) {
      setLikedCourses(JSON.parse(storedLikedCourses));
    }
  }, []);

  const handleLike = (
    onsite_id,
    onsite_pic,
    onsite_name,
    category_name,
    onsite_details
  ) => {
    const updatedLikedCourses = likedCourses.some(
      (course) => course.onsite_id === onsite_id
    )
      ? likedCourses.filter((course) => course.onsite_id !== onsite_id)
      : [
          ...likedCourses,
          { onsite_id, onsite_pic, onsite_name, category_name, onsite_details },
        ];

    setLikedCourses(updatedLikedCourses);
    localStorage.setItem("likedCourses", JSON.stringify(updatedLikedCourses));
  };

  const handleCourse = (onsite_id) => {
    // ไปยังหน้ารายละเอียดคอร์ส
    window.location = `/online/details/${onsite_id}`;
  };

  return (
    <>
      <div className="mt-20 p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-5">
        {likedCourses.map((course) => (
          <div
            key={course.onsite_id}
            className="rounded overflow-hidden shadow-lg"
          >
            <div className="w-full">
              <img
                src={`http://localhost:3333/Images/` + course.onsite_pic}
                alt={course.onsite_name}
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{course.onsite_name}</div>
              <p className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                # {course.category_name}
              </p>
              <p className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                <div
                  className={`heart-icon cursor-pointer ${
                    likedCourses.some(
                      (course) => course.onsite_id === course.onsite_id
                    )
                      ? "text-red-500"
                      : "text-gray-500"
                  }`}
                  onClick={() =>
                    handleLike(
                      course.onsite_id,
                      course.onsite_pic,
                      course.onsite_name,
                      course.category_name,
                      course.onsite_details
                    )
                  }
                >
                  <FaHeart
                    className={`heart-icon ${
                      likedCourses.some(
                        (course) => course.onsite_id === course.onsite_id
                      )
                        ? "text-red-500"
                        : "text-gray-500"
                    }`}
                  />
                </div>
              </p>
              <p className="text-gray-700 text-base overflow-hidden line-clamp-4">
                {course.onsite_details}
              </p>
              <div className="flex justify-center items-center mt-10">
                
                <button
                  className="btn-common bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleCourse(course.onsite_id)}
                >
                  <a href={`/online/details/${course.onsite_id}`}>
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

export default Online;
