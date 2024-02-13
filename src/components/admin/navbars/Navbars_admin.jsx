import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from '../../../assets/logo.png';

const Navbars_admin = () => {
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();

  const handleNav = () => {
    setNav(!nav);
  };

  const handleLogout = () => {
    // Show a SweetAlert confirmation dialog
    Swal.fire({
      title: "คุณแน่ใจหรือว่าต้องการออกจากระบบ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "ใช่, ออกจากระบบ",
      cancelButtonText: "ยกเลิก",
    }).then((result) => {
      if (result.isConfirmed) {
        // User confirmed, log out
        // Remove Token from localStorage (or session storage)
        localStorage.removeItem("authToken");

        // Navigate the user to the login or home page
        navigate("/"); // Update this to your actual URL
      }
    });
  };
  return (
    <div className="flex justify-between items-center h-20 mx-auto max-w-[1440px] text-black  font-inter">
      <span className="avatar">
        <div className="w-8 rounded">
          <img src={logo} alt="Logo" />
        </div>
      </span>
      <h1 className="w-full text-2xl font-bold text-[#49CDD8]">INFI-LEARN</h1>
      
      <ul className="hidden md:flex w-full ">
        <li className="p-3  ">
          <a href="/main">หน้าหลัก</a>
        </li>
        <li></li>
        <li className="p-3  ">
          <a href="/about">เกี่ยวกับเว็บไซต์</a>
        </li>
        <li className="p-3  ">
          <a href="/course">คอร์สเรียน</a>
        </li>
        <li className="p-3 btn btn-secondary rounded-full">
          <button onClick={handleLogout}>ออกจากระบบ</button>
        </li>
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
          <li className="p-4">
            <button onClick={handleLogout}>ออกจากระบบ</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbars_admin;
