import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Teacher_add() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    teacher_fname: "",
    teacher_lname: "",
    teacher_pic: null,
    teacher_description: "",
    teacher_company: "",
    teacher_position: "",
    teacher_email: "",
    teacher_mobile: "",
    teacher_line: "",
  });
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    const newValue = files ? files[0] : value;
    setFormData({
      ...formData,
      [name]: newValue,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const urlapi = "http://localhost:3333/create/teacher";
    const formDataToSend = new FormData();
    console.log(formData);
    formDataToSend.append("teacher_fname", formData.teacher_fname);
    formDataToSend.append("teacher_lname", formData.teacher_lname);
    formDataToSend.append("teacher_pic", formData.teacher_pic);
    formDataToSend.append("teacher_description", formData.teacher_description);
    formDataToSend.append("teacher_company", formData.teacher_company);
    formDataToSend.append("teacher_position", formData.teacher_position);
    formDataToSend.append("teacher_email", formData.teacher_email);
    formDataToSend.append("teacher_mobile", formData.teacher_mobile);
    formDataToSend.append("teacher_line", formData.teacher_line);

    axios
      .post(urlapi, formDataToSend)
      .then((resp) => {
        console.log(resp);
        if (
          resp.data.status === "error" &&
          resp.data.message === "ข้อมูลซ้ำกัน"
        ) {
          Swal.fire("ข้อมูลซ้ำกัน", "กรุณาตรวจสอบและลองใหม่อีกครั้ง", "error");
        } else {
          Swal.fire("เพิ่มข้อมูลสำเร็จ", "", "success").then(() => {
            navigate("/admin");
          });
        }
        console.log(resp);
      })
      .catch((e) => {
        console.log(e);
        Swal.fire("เกิดข้อผิดพลาดในการเพิ่มข้อมูล", "", "error");
      });
  };

  return (
    <>
      <div>
        <div className="text-center">
          <div className="mx-auto max-w-[600px] text-2xl font-inter">
            เพิ่มข้อมูลอาจารย์ผู้สอน
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div class="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label class="block mb-2 text-sm font-medium text-gray-900 ">
                ชิ่อ
              </label>
              <input
                type="text"
                id="teacher_fname"
                name="teacher_fname"
                value={formData.teacher_fname}
                onChange={handleChange}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="ชิ่อ"
                required
              />
            </div>
            <div>
              <label class="block mb-2 text-sm font-medium text-gray-900">
                นามสกุล
              </label>
              <input
                type="text"
                id="teacher_lname"
                name="teacher_lname"
                value={formData.teacher_lname}
                onChange={handleChange}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="นามสกุล"
                required
              />
            </div>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Upload file
            </label>
            <input
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-white dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              aria-describedby="user_avatar_help"
              type="file"
              id="teacher_pic"
              name="teacher_pic"
              onChange={handleChange}
            />
            <div
              className="mt-1 text-sm text-gray-500 dark:text-gray-300"
              id="user_avatar_help"
            >
              A picture is course
            </div>
          </div>

          <div>
            <label class="block mb-2 text-sm font-medium text-gray-900 ">
              คำอธิบาย
            </label>
            <textarea
              type="text"
              id="teacher_description"
              name="teacher_description"
              value={formData.teacher_description}
              onChange={handleChange}
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
              placeholder="คำอธิบาย"
            ></textarea>
          </div>
          <div class="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label class="block mb-2 text-sm font-medium text-gray-900 ">
                บริษัท
              </label>
              <input
                type="text"
                id="teacher_company"
                name="teacher_company"
                value={formData.teacher_company}
                onChange={handleChange}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="บริษัท"
                required
              />
            </div>
            <div>
              <label class="block mb-2 text-sm font-medium text-gray-900 ">
                ตำแหน่ง
              </label>
              <input
                type="text"
                id="teacher_position"
                name="teacher_position"
                value={formData.teacher_position}
                onChange={handleChange}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="ตำแหน่ง"
                required
              />
            </div>
          </div>
          <div>
            <div class="mb-6">
              <label class="block mb-2 text-sm font-medium text-gray-900 ">
                อีเมล
              </label>
              <input
                type="email"
                id="teacher_email"
                name="teacher_email"
                value={formData.teacher_email}
                onChange={handleChange}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="อีเมล"
                required
              />
            </div>
            <div>
              <label class="block mb-2 text-sm font-medium text-gray-900 ">
                เบอร์โทร
              </label>
              <input
                type="tel"
                id="teacher_mobile"
                name="teacher_mobile"
                value={formData.teacher_mobile}
                onChange={handleChange}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="เบอร์โทร"
                required
              />
            </div>
            <div>
              <label class="block mb-2 text-sm font-medium text-gray-900 ">
                ไอดีไลน์
              </label>
              <input
                type="text"
                id="teacher_line"
                name="teacher_line"
                value={formData.teacher_line}
                onChange={handleChange}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="ไอดีไลน์"
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
    </>
  );
}
export default Teacher_add;
