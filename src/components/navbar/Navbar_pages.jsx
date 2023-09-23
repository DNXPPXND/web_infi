import React, { useState } from "react";

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex justify-between items-center h-20 mx-auto max-w-[1440px] text-black  font-inter">
      <span className="avatar">
        <div className="w-8 rounded">
          <img src="logo.png" />
        </div>
      </span>
      <h1 className="w-full text-2xl font-bold text-[#49CDD8]">INFI-LREAN</h1>
      <div class="flex items-center justify-center h-full">
        <div class="relative hidden md:flex w-full">
          <input
            type="text"
            placeholder="ค้นหาคอร์สเรียน"
            class="py-2 px-6 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500 bg-white text-gray-700"
          />
          <button class="absolute right-0 top-0 h-full px-4 flex items-center bg-cyan-300 text-white rounded-full">
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 11a4 4 0 11-8 0 4 4 0 018 0z"
              ></path>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-4.35-4.35"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <ul className="hidden md:flex w-full ">
        <li className="p-3  ">
          <a href="/main">หน้าหลัก</a>
        </li>
        <li></li>
        <li className="p-3  ">
          <a href="/about" >
            เกี่ยวกับเว็บไซต์
          </a>
        </li>
        <li className="p-3  ">
          <a href="/course" >
            คอร์สเรียน
          </a>
        </li>
        <li className="p-3 ">
          <a href="/login" target="_blank">
            เข้าสู่ระบบ
          </a>
        </li>

        <button className=" btn btn-primary rounded-full items-center ">
          <a href="/signup" target="_blank">
            สมัครสมาชิก
          </a>
        </button>
      </ul>

      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
      </div>
      <div
        className={
          !nav
            ? " fixed left-[-100%] "
            : " fixed left-0 top-0 w-[40%] h-full border-r border-r-cyan-300 bg-cyan-300 ease-in-out duration-500"
        }
      >
        <ul className="uppercase p-4 text-[#ffffff] ">
          <li className="p-4 border-b border-white-600 ">
            <a href="/">หน้าหลัก</a>{" "}
          </li>
          <li className="p-4 border-b border-white-600">
            <a href="/about">เกี่ยวกับเว็บไซต์</a>
          </li>
          <li className="p-4 border-b border-white-600">
            <a href="/course">คอร์สเรียน</a>
          </li>
          <li className="p-4 border-b border-white-600">
            <a href="/login">เข้าสู่ระบบ</a>
          </li>
          <li className="p-4 ">
            <a href="/signup">สมัครสมาชิก</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
