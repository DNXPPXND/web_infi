import React from "react";
import logomain from "../assets/logomain.png";
import "animate.css/animate.min.css"; // Import animate.css

const Header_pages = () => {
  return (
    <div
      name="home"
      className="bg-white flex flex-col justify-between -mt-0.5 font-inter"
    >
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-2 items-center">
          <h1 className="py-6 text-2xl md:text-4xl font-inter font-bold">
            <p className="">คอร์สเรียน</p> <p>เพิ่มทักษะ ซอร์ฟสกิล ฮาร์ดสกิล</p>
          </h1>
          <p className="text-2xl text-gray-500">
            สร้างเสริมทักษะและเพิ่มความสามารถ
          </p>
          <p className="text-2xl text-gray-500">
            และอาจจะทำให้คุณเก่งเพิ่มขึ้น!!!
          </p>

          <a
            className="py-3 px-6 sm:w-[30%] my-4 bg-cyan-300 rounded-full text-white text-center"
            href="/course"
          >
            <button>คอร์สเรียนเพิ่มเติม</button>
          </a>
        </div>
        <div className="hidden md:flex w-full animate__animated animate__fadeIn ">
          <img className="w-full " src={logomain} alt="/" />
        </div>
      </div>
    </div>
  );
};

export default Header_pages;

