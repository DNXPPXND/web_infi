import React, { useState } from "react";
import loginlogo from "../../assets/loginlogo.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SignInSide() {
  const navigate = useNavigate();
  
  const [data, setData] = useState({
    email: "",
    password: "",
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
      const urlapi = "http://localhost:3333/login";
      const param = {
        email: data.email,
        password: data.password,
      };
      axios
        .post(urlapi, param)
        .then((resp) => {
          navigate("/main-profile");
          console.log(resp);
        })
        .catch((e) => {
          console.log(e);
        });

      //const data = new FormData(event.currentTarget);
    };
  return (
    <div className="grid grid-cols-1  sm:grid-cols-2 h-screen w-full">
      <div className="hidden sm:block ">
        <img className="w-full h-full object-cover" src={loginlogo} alt="" />
      </div>
      <div className="bg-white flex flex-col justify-center">
        <form
          className="max-w-[400px] w-full mx-auto bg-white p-8 px-8 rounded-lg"
          onSubmit={handleSubmit}
        >
          <h1 className="text-4xl dark:text-black font-bold text-center">
            เข้าสู่ระบบ
          </h1>
          <p className="text-center dark:text-gray-600 mt-3 ">
            ยินดีต้อนรับเข้าสู่บัญชีผู้ใช้ INFI-LEARN
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
              onChange={handleChange}
              value={data.password}
            />
          </div>
          <div className="flex justify-between text-gray-600 py-2">
            <p className="flex-item-center">
              <input className="mr-2" type="checkbox" />
              ให้ฉันอยู่ในระบบ
            </p>
            <p>ลืมรหัสผ่าน</p>
          </div>
          <a href="https://www.youtube.com/watch?v=AA4Yb5u59rw&list=RDAA4Yb5u59rw&start_radio=1">
            <button
              className="w-full my-5 py-2 bg-cyan-300 text-white rounded-full "
              type="submit"
            >
              เข้าสู่ระบบ
            </button>
          </a>

          <div className="mt-2  text-center flex justify-center ">
            <p>หากคุณมีบัญชีผู้ใช้งานแล้ว </p>
            <a href="/signup">
              <p className="underline px-3">สมัครบัญชีผู้ใช้</p>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
