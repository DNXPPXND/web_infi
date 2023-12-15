import React, { useEffect, useState } from "react";
import Navbar_profile from "../../components/navbar/Navbar_profile";
import Footer_page from "../../components/footer/Footer_page";
import Nav_profile from "../../components/nav/Nav_profile";
import axios from "axios"; // นำเข้า Axios
import { useParams } from "react-router-dom";

export default function User_profile() {
  const { id } = useParams();
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");
  const [lastname, setLastname] = useState("");
  const [categtoy_name, setCategoty] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:3333/user/${id}`)
      .then((response) => {
        setEmail(response.data.users.email);
        setFullname(response.data.users.fullname);
        setLastname(response.data.users.lastname);
        setCategoty(response.data.users.category_name);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  return (
    <>
      <Navbar_profile />
      <Nav_profile />
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <div className="grid mb-4">
            <div className="flex justify-center items-center text-slate-900 mt-5">
              <div className="text-3xl font-inter font-bold">
                ประวัติส่วนตัว
              </div>
            </div>
            <div className="p-4">
              <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                <div className="md:flex">
                  <div className="md:flex-shrink-0">
                    <img
                      className="h-48 w-full object-cover md:w-48"
                      src="https://user-images.githubusercontent.com/111185949/273497758-311827db-671b-4bbe-a437-aa0c6e609c33.png"
                      alt="Profile"
                    />
                  </div>
                  <div className="p-8">
                    <p className="block mt-2 text-lg leading-tight font-medium text-black">
                      Email: {email}
                    </p>
                    <p className="block mt-2 text-lg leading-tight font-medium text-black">
                      ชื่อ: {fullname}
                    </p>
                    <p className="block mt-2 text-lg leading-tight font-medium text-black">
                      นามสกุล: {lastname}
                    </p>
                    <p className="block mt-2 text-lg leading-tight font-medium text-black">
                      ประเภทบทเรียนที่สนใจ: {categtoy_name}
                    </p>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>

      <Footer_page />
    </>
  );
}
