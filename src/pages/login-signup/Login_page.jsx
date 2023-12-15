import React, { useState } from "react";
import loginlogo from "../../assets/loginlogo.png";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

export default function SignInSide() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [loginStatus, setLoginStatus] = useState(null);

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
        if (resp.data.status === "ok") {
          if (resp.data.message === "admin") {
            navigate("/view");
          } else {
            // นี่คือส่วนที่ต้องแก้
            navigate(`/users-profile/${resp.data.id}`); // ให้ใช้ id ที่ได้จาก response
          }
          setLoginStatus("success");

          Swal.fire({
            title: "เข้าสู่ระบบสำเร็จ!",
            text: "คุณได้เข้าสู่ระบบเรียบร้อยแล้ว",
            icon: "success",
          });
        } else {
          setLoginStatus("error");
        }
        console.log(resp);
      })
      .catch((e) => {
        console.log(e);
        setLoginStatus("error");
      });
  };

  return (
    <div className="grid grid-cols-1  sm:grid-cols-2 h-screen w-full">
      <div className="hidden sm:block">
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

          <button
            className="w-full my-5 py-2 bg-cyan-300 text-white rounded-full "
            type="submit"
          >
            เข้าสู่ระบบ
          </button>

          <div className="mt-2  text-center flex justify-center ">
            <p>หากคุณมีบัญชีผู้ใช้งานแล้ว </p>
            <a href="/signup">
              <p className="underline px-3">สมัครบัญชีผู้ใช้</p>
            </a>
          </div>

          {loginStatus === "success" && (
            <div className="text-green-600 text-center mt-3">
              เข้าสู่ระบบสำเร็จ!
            </div>
          )}
          {loginStatus === "error" && (
            <div className="text-red-600 text-center mt-3">
              เข้าสู่ระบบไม่สำเร็จ โปรดตรวจสอบอีเมลและรหัสผ่านของคุณ
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
