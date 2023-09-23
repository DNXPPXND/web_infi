import React, { useState } from "react";
import loginlogo from "../../assets/loginlogo.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SignInSide() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
    fullname: "",
    lastname: "",
  });
  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const urlapi = "http://localhost:3333/resgister";
    const param = {
      email: data.email,
      password: data.password,
      fullname: data.fullname,
      lastname: data.lastname,
    };
    axios
      .post(urlapi, param)
      .then((resp) => {
        navigate("/agreements");
        console.log(resp);
      })
      .catch((e) => {
        console.log(e);
      });


    //const data = new FormData(event.currentTarget);
  };
  return (
    <div className="grid grid-cols-1  sm:grid-cols-2 h-screen w-full font-inter">
      <div className="hidden sm:block ">
        <img className="w-full h-full object-cover" src={loginlogo} alt="" />
      </div>
      <div className="bg-white flex flex-col justify-center">
        <form
          className="max-w-[400px] w-full mx-auto bg-white p-8 px-8 rounded-lg"
          onSubmit={handleSubmit}
        >
          <h1 className="text-4xl dark:text-black font-bold text-center">
            สมัครสมาชิก
          </h1>
          <p className="text-center dark:text-gray-600 mt-3 ">
            ยินดีต้อนรับเข้าสู่บัญชีผู้ใช้ <span>INFI-LEARN</span>
          </p>
          <div className="flex flex-col text-black py-2 mt-10">
            <label> อีเมล </label>
            <input
              className="rounded-sm bg-gray-100 mt-2 p-2 focus:border-white focus:bg-gray-100 focus:outline-none "
              placeholder="mail@gmail.com"
              type="email"
              name="email"
              onChange={handleChange}
              value={data.email}
            />
          </div>
          <div className="flex flex-col text-black py-2">
            <label> รหัสผ่าน </label>
            <input
              className=" rounded-sm bg-gray-100 mt-2 p-2 focus:border-white focus:bg-gray-100 focus:outline-none "
              placeholder="**********"
              type="password"
              name="password"
              value={data.password}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col text-black py-2">
            <label> ชื่อ </label>
            <input
              className=" rounded-sm bg-gray-100 mt-2 p-2 focus:border-white focus:bg-gray-100 focus:outline-none "
              placeholder="name"
              type="text"
              name="fullname"
              value={data.fullname}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col text-black py-2">
            <label> นามสกุล </label>
            <input
              className=" rounded-sm bg-gray-100 mt-2 p-2 focus:border-white focus:bg-gray-100 focus:outline-none "
              placeholder="last"
              type="text"
              name="lastname"
              value={data.lastname}
              onChange={handleChange}
            />
          </div>

            <button
              className="w-full my-5 py-2 bg-cyan-300 rounded-full text-white "
              onClick={() => handleSubmit()}
              type="submit"
            >
              สมัครสมาชิก
            </button>
          

          <div className="mt-2 text-center  flex justify-center ">
            <p>หากคุณมีบัญชีผู้ใช้งานแล้ว </p>
            <a href="/login">
              <p className="underline px-3">เข้าสู่ระบบ</p>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
