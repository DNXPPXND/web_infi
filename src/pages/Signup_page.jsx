import React from "react";
import loginlogo from "../assets/loginlogo.png";



export default function SignInSide() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };
  return(
    <div className="grid grid-cols-1  sm:grid-cols-2 h-screen w-full">
      <div className="hidden sm:block ">
        <img className="w-full h-full object-cover" src={loginlogo} alt="" />
      </div>
      <div className="bg-white flex flex-col justify-center">
        <form className="max-w-[400px] w-full mx-auto bg-white p-8 px-8 rounded-lg">
          <h1 className="text-4xl dark:text-black font-bold text-center">
            สมัครสมาชิก
          </h1>
          <p className="text-center dark:text-gray-600 mt-3 ">
            ยินดีต้อนรับเข้าสู่บัญชีผู้ใช้ INFI-LEARN
          </p>
          <div className="flex flex-col text-black py-2 mt-10">
            <label> อีเมล </label>
            <input
              className="rounded-sm bg-gray-100 mt-2 p-2 focus:border-white focus:bg-gray-100 focus:outline-none "
              placeholder="mail@gmail.com"
              type="text"
            />
          </div>
          <div className="flex flex-col text-black py-2">
            <label> รหัสผ่าน </label>
            <input
              className=" rounded-sm bg-gray-100 mt-2 p-2 focus:border-white focus:bg-gray-100 focus:outline-none "
              placeholder="**********"
              type="password"
            />
          </div>
          <div className="flex justify-between text-gray-600 py-2">
            <p className="flex-item-center">
              <input className="mr-2" type="checkbox" />
              ให้ฉันอยู่ในระบบ
            </p>
            <p>ลืมรหัสผ่าน</p>
          </div>
          <button className="w-full my-5 py-2 bg-cyan-300 rounded-full text-white ">
            สมัครสมาชิก{" "}
          </button>
          <div className="mt-2 text-center  flex justify-center ">
            <p>หากคุณมีบัญชีผู้ใช้งานแล้ว </p>
            <a href="/login"><p className="underline px-3">เข้าสู่ระบบ</p></a>
          </div>
        </form>
      </div>
    </div>
  );
}
