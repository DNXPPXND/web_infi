import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Nav_admin from "../../components/admin/Nav_admin";
import Navbar_admin from "../../components/navbar/Navbar_admin";
import Footer_page from "../../components/footer/Footer_page";

function Teacher_add() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    teacher_fname: "",
    teacher_lname: "",
    teacher_description: "",
    teacher_company: "",
    teacher_position: "",
    teacher_email: "",
    teacher_mobile: "",
    teacher_line: "",
  });
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const urlapi = "http://localhost:3333/admin-teacher";
    const param = {
      teacher_fname: formData.teacher_fname,
      teacher_lname: formData.teacher_lname,
      teacher_description: formData.teacher_description,
      teacher_company: formData.teacher_company,
      teacher_position: formData.teacher_position,
      teacher_email: formData.teacher_email,
      teacher_mobile: formData.teacher_mobile,
      teacher_line: formData.teacher_line,
    };
    axios
      .post(urlapi, param)
      .then((resp) => {
        navigate("/view");
        console.log(resp);
        alert("บันทึกข้อมูลสำเร็จ");
      })
      .catch((e) => {
        console.log(e);
        alert("เกิดข้อผิดพลาดในการบันทึกข้อมูล");
      });

    //const data = new FormData(event.currentTarget);
  };

  return (
    <>
      <Navbar_admin />
      <Nav_admin />
      <div class="p-4 sm:ml-64">
        <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <div class="grid mb-4">
            <div className="text-center">
              <div className="mx-auto max-w-[600px] text-2xl font-inter">
                เพิ่มข้อมูลอาจารย์ผู้สอน
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              <div class="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                  <label
                    for="teacher_fname"
                    class="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    id="teacher_fname"
                    name="teacher_fname"
                    value={formData.teacher_fname}
                    onChange={handleChange}
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder="name"
                    required
                  />
                </div>
                <div>
                  <label
                    for="last_name"
                    class="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    id="teacher_lname"
                    name="teacher_lname"
                    value={formData.teacher_lname}
                    onChange={handleChange}
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder="lastname"
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  class="block mb-2 text-sm font-medium text-gray-900 "
                  for="file_input"
                >
                  Upload file
                </label>
                <input
                  class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 "
                  id="file_input"
                  type="file"
                />
              </div>
              <div>
                <label
                  for="message"
                  class="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Description
                </label>
                <textarea
                  type="text"
                  id="teacher_description"
                  name="teacher_description"
                  value={formData.teacher_description}
                  onChange={handleChange}
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                  placeholder="Write your thoughts here..."
                ></textarea>
              </div>
              <div class="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                  <label
                    for="teacher_fname"
                    class="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id="teacher_company"
                    name="teacher_company"
                    value={formData.teacher_company}
                    onChange={handleChange}
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder="teacher_company"
                    required
                  />
                </div>
                <div>
                  <label
                    for="last_name"
                    class="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Position
                  </label>
                  <input
                    type="text"
                    id="teacher_position"
                    name="teacher_position"
                    value={formData.teacher_position}
                    onChange={handleChange}
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="teacher_position"
                    required
                  />
                </div>
              </div>
              <div>
                <div class="mb-6">
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    id="teacher_email"
                    name="teacher_email"
                    value={formData.teacher_email}
                    onChange={handleChange}
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder="namelastname@gmail.com"
                    required
                  />
                </div>
                <div>
                  <label
                    for="phone"
                    class="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Phone number
                  </label>
                  <input
                    type="tel"
                    id="teacher_mobile"
                    name="teacher_mobile"
                    value={formData.teacher_mobile}
                    onChange={handleChange}
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder="123-45-678"
                    required
                  />
                </div>
                <div>
                  <label
                    for="teacher_fname"
                    class="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id="teacher_line"
                    name="teacher_line"
                    value={formData.teacher_line}
                    onChange={handleChange}
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder="teacher_line"
                    required
                  />
                </div>
              </div>
              <div className="text-center mt-5">
                <button
                  type="submit"
                  className="items-stretch text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  บันทึกข้อมูล
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer_page />
    </>
  );
}
export default Teacher_add;
