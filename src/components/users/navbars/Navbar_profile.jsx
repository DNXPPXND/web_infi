import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";
import logo from "../../../assets/logo.png";

const Navbar_profile = ({ token }) => {

  return (
    <div className="flex justify-between items-center h-20 mx-auto max-w-[1440px] text-black font-inter">
      <span className="avatar">
        <Link to="/main" className="w-8 rounded">
          <img src={logo} alt="Logo" />
        </Link>
      </span>
      <h1 className="w-full text-2xl font-bold text-[#49CDD8]">
        <Link to="/main" className="text-[#49CDD8]">
          INFI-LEARN
        </Link>
      </h1>
      <div className="flex items-center justify-center h-full">
        {/* Search for courses */}
      </div>
      <ul className="hidden md:flex w-full">
        <li className="p-3">
          <Link to="/main">หน้าหลัก</Link>
        </li>
        <li className="p-3">
          <Link to="/main/about">เกี่ยวกับเว็บไซต์</Link>
        </li>
        <li className="p-3">
          <Link to="/main/course">คอร์สเรียน</Link>
        </li>
        <li className="p-3">
          <Link to={`/profile/${localStorage.getItem("id")}`}>
            <img
              className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-green-500"
              src="https://img.freepik.com/free-psd/3d-rendering-avatar_23-2150833572.jpg?w=740&t=st=1711464311~exp=1711464911~hmac=5ae04290540783ec371e23bed151732cd0d28e21e9bae4ac82e7170d71fb1f13"
              alt="Bordered avatar"
            /> 
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar_profile;
