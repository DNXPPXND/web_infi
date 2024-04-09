import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaHeart } from "react-icons/fa"; // นำเข้าไอคอนหัวใจจาก react-icons

const Online = () => {
  const [siteData, setSiteData] = useState([]); // ข้อมูลเว็บไซต์
  const [likedCoursesLocal, setLikedCoursesLocal] = useState([]);

  useEffect(() => {
    // เรียกข้อมูลจากเซิร์ฟเวอร์
    axios
      .get("http://localhost:3333/admin-onsite/view")
      .then((response) => {
        setSiteData(response.data);
      })
      .catch((error) => {
        console.error("เกิดข้อผิดพลาดในการเรียกข้อมูล:", error);
      });

    // อ่านข้อมูลที่ถูกบันทึกไว้ใน localStorage เมื่อโหลดหน้าจอ
    const storedLikedCourses = localStorage.getItem("likedCourses");
    if (storedLikedCourses) {
      setLikedCoursesLocal(JSON.parse(storedLikedCourses));
    }
  }, []);

  const handleCourse = (onsite_id) => {
    // ไปยังหน้ารายละเอียดคอร์ส
    window.location = `/online/details/${onsite_id}`;
  };

  const handleLike = (
    onsite_id,
    onsite_pic,
    onsite_name,
    category_name,
    onsite_details
  ) => {
    const updatedLikedCourses = likedCoursesLocal.some(
      (course) => course.onsite_id === onsite_id
    )
      ? likedCoursesLocal.filter((course) => course.onsite_id !== onsite_id)
      : [
          ...likedCoursesLocal,
          { onsite_id, onsite_pic, onsite_name, category_name, onsite_details },
        ];

    setLikedCoursesLocal(updatedLikedCourses);
    localStorage.setItem("likedCourses", JSON.stringify(updatedLikedCourses));
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
                    likedCoursesLocal.some(
                      (course) => course.onsite_id === item.onsite_id
                    )
                      ? "text-red-500"
                      : "text-gray-500"
                  }`}
                  onClick={() =>
                    handleLike(
                      item.onsite_id,
                      item.onsite_pic,
                      item.onsite_name,
                      item.category_name,
                      item.onsite_details
                    )
                  }
                >
                  <FaHeart
                    className={`heart-icon ${
                      likedCoursesLocal.some(
                        (course) => course.onsite_id === item.onsite_id
                      )
                        ? "text-red-500"
                        : "text-gray-500"
                    }`}
                  />
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

export default Online;
