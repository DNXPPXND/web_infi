import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

function Teacher_update() {
  const { teacher_id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:3333/admin-teacher/view/${teacher_id}`)
      .then((response) => {
        setTeacher_fname(response.data.teacher.teacher_fname);
        setTeacher_lname(response.data.teacher.teacher_lname);
        setTeacher_pic(response.data.teacher.teacher_pic);
        setTeacher_description(response.data.teacher.teacher_description);
        setTeacher_company(response.data.teacher.teacher_company);
        setTeacher_position(response.data.teacher.teacher_position);
        setTeacher_email(response.data.teacher.teacher_email);
        setTeacher_mobile(response.data.teacher.teacher_mobile);
        setTeacher_line(response.data.teacher.teacher_line);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [teacher_id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    var data = {
      teacher_id: teacher_id,
      teacher_fname: teacher_fname,
      teacher_lname: teacher_lname,
      teacher_pic: teacher_pic,
      teacher_description: teacher_description,
      teacher_company: teacher_company,
      teacher_position: teacher_position,
      teacher_email: teacher_email,
      teacher_mobile: teacher_mobile,
      teacher_line: teacher_line,
    };

    axios
      .put(`http://localhost:3333/admin-teacher/update/${teacher_id}`, data)
      .then((resp) => {
        // Replace the standard alert with SweetAlert2
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "แก้ไขข้อมูลสำเร็จ",
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/admin");
          }
        });
      })
      .catch((e) => {
        console.log(e);
        // Replace the standard alert with SweetAlert2
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "เกิดข้อผิดพลาดในการแก้ไขข้อมูล",
        });
      });
  };

  const [teacher_fname, setTeacher_fname] = useState("");
  const [teacher_lname, setTeacher_lname] = useState("");
  const [teacher_pic, setTeacher_pic] = useState("");
  const [teacher_description, setTeacher_description] = useState("");
  const [teacher_company, setTeacher_company] = useState("");
  const [teacher_position, setTeacher_position] = useState("");
  const [teacher_email, setTeacher_email] = useState("");
  const [teacher_mobile, setTeacher_mobile] = useState("");
  const [teacher_line, setTeacher_line] = useState("");

  return (
    <>
      <div>
        <div className="text-center">
          <div className="mx-auto max-w-[600px] text-2xl font-inter">
            แก้ไขข้อมูลอาจารย์ผู้สอน
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                ชื่อจริง
              </label>
              <input
                type="text"
                id="teacher_fname"
                name="teacher_fname"
                value={teacher_fname}
                onChange={(e) => setTeacher_fname(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                required
              />
            </div>
            <div>
              <label
              
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                นามสกุล
              </label>
              <input
                type="text"
                id="teacher_lname"
                name="teacher_lname"
                value={teacher_lname}
                onChange={(e) => setTeacher_lname(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
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
                รูปผู้สอน (URL Images)
              </label>
              <input
                type="text"
                id="teacher_pic"
                name="teacher_pic"
                value={teacher_pic}
                onChange={(e) => setTeacher_pic(e.target.value)}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                required
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              คำอธิบาย
            </label>
            <textarea
              type="text"
              id="teacher_description"
              name="teacher_description"
              value={teacher_description}
              onChange={(e) => setTeacher_description(e.target.value)}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
            ></textarea>
          </div>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="teacher_fname"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                บริษัท
              </label>
              <input
                type="text"
                id="teacher_company"
                name="teacher_company"
                value={teacher_company}
                onChange={(e) => setTeacher_company(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                required
              />
            </div>
            <div>
              <label
                htmlFor="last_name"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                ตำแหน่ง
              </label>
              <input
                type="text"
                id="teacher_position"
                name="teacher_position"
                value={teacher_position}
                onChange={(e) => setTeacher_position(e.target.value)}
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
                อีเมล
              </label>
              <input
                type="email"
                id="teacher_email"
                name="teacher_email"
                value={teacher_email}
                onChange={(e) => setTeacher_email(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                required
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                เบอร์โทร
              </label>
              <input
                type="tel"
                id="teacher_mobile"
                name="teacher_mobile"
                value={teacher_mobile}
                onChange={(e) => setTeacher_mobile(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                required
              />
            </div>
            <div>
              <label
                htmlFor="teacher_fname"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                ไอดีไลน์
              </label>
              <input
                type="text"
                id="teacher_line"
                name="teacher_line"
                value={teacher_line}
                onChange={(e) => setTeacher_line(e.target.value)}
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
              แก้ไขข้อมูล
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
export default Teacher_update;
