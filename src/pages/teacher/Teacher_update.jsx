import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Nav_admin from "../../components/admin/Nav_admin";
import Navbar_admin from "../../components/navbar/Navbar_admin";
import Footer_page from "../../components/footer/Footer_page";

function Teacher_update() {
  const navigate = useNavigate();
  const { teacher_id } = useParams(); // รับค่า teacherId จาก URL
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

  useEffect(() => {
    // เรียก API เพื่อดึงข้อมูลอาจารย์ผู้สอนตาม teacherId
    axios
      .get(`http://localhost:3333/admin-teacher/view/${teacher_id}`)
      .then((response) => {
        const teacherData = response.data;
        setFormData({
          teacher_fname: teacherData.teacher_fname,
          teacher_lname: teacherData.teacher_lname,
          teacher_description: teacherData.teacher_description,
          teacher_company: teacherData.teacher_company,
          teacher_position: teacherData.teacher_position,
          teacher_email: teacherData.teacher_email,
          teacher_mobile: teacherData.teacher_mobile,
          teacher_line: teacherData.teacher_line,
        });
      })
      .catch((error) => {
        console.error("เกิดข้อผิดพลาดในการดึงข้อมูล: ", error);
      });
  }, [teacher_id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleEdit = (event) => {
    event.preventDefault();
    const urlapi = `http://localhost:3333/view/update/${teacher_id}`;
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
      .put(urlapi, param)
      .then((resp) => {
        navigate("/view");
        console.log(resp);
        alert("แก้ไขข้อมูลสำเร็จ");
      })
      .catch((e) => {
        console.log(e);
        alert("เกิดข้อผิดพลาดในการแก้ไขข้อมูล");
      });
  };

  return (
    <>
      <Navbar_admin />
      <Nav_admin />
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <div className="grid mb-4">
            <div className="text-center">
              <div className="mx-auto max-w-[600px] text-2xl font-inter">
                แก้ไขข้อมูลอาจารย์ผู้สอน
              </div>
            </div>
            <form onSubmit={handleEdit}>
              <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="teacher_fname"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    id="teacher_fname"
                    name="teacher_fname"
                    value={formData.teacher_fname}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="last_name"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    id="teacher_lname"
                    name="teacher_lname"
                    value={formData.teacher_lname}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 "
                  htmlFor="file_input"
                >
                  Upload file
                </label>
                <input
                  className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 "
                  id="file_input"
                  type="file"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Description
                </label>
                <textarea
                  type="text"
                  id="teacher_description"
                  name="teacher_description"
                  value={formData.teacher_description}
                  onChange={handleChange}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                ></textarea>
              </div>
              <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="teacher_fname"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id="teacher_company"
                    name="teacher_company"
                    value={formData.teacher_company}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="last_name"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Position
                  </label>
                  <input
                    type="text"
                    id="teacher_position"
                    name="teacher_position"
                    value={formData.teacher_position}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    required
                  />
                </div>
              </div>
              <div>
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    id="teacher_email"
                    name="teacher_email"
                    value={formData.teacher_email}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Phone number
                  </label>
                  <input
                    type="tel"
                    id="teacher_mobile"
                    name="teacher_mobile"
                    value={formData.teacher_mobile}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="teacher_fname"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id="teacher_line"
                    name="teacher_line"
                    value={formData.teacher_line}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    required
                  />
                </div>
              </div>
              <div className="text-center mt-5">
                <button
                  type="submit"
                  className="items-stretch text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  แก้ไขข้อมูลเรียบร้อย
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
export default Teacher_update;
