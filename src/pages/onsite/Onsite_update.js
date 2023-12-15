import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Nav_admin from "../../components/admin/Nav_admin";
import Navbar_admin from "../../components/navbar/Navbar_admin";
import Footer_page from "../../components/footer/Footer_page";
import Swal from "sweetalert2";

function Teacher_update() {
  const { onsite_id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:3333/admin-onsite/view/${onsite_id}`)
      .then((response) => {
        setOnsite_name(response.data.onsite.onsite_name);
        setOnsite_details(response.data.onsite.onsite_details);
        setCategory_id(response.data.onsite.category_id);
        setOnsite_pic(response.data.onsite.onsite_pic);
        setTeacher_id(response.data.onsite.teacher_id);
        setOnsite_time(response.data.onsite.onsite_time);
        setOnsite_location(response.data.onsite.onsite_location);
        setOnsite_video(response.data.onsite.onsite_video);
        setOnsite_status(response.data.onsite.onsite_status);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [onsite_id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    var data = {
      onsite_id : onsite_id,
      onsite_name: onsite_name,
      onsite_details: onsite_details,
      category_id: category_id,
      onsite_pic: onsite_pic,
      teacher_id: teacher_id,
      onsite_time: onsite_time,
      onsite_location: onsite_location,
      onsite_video: onsite_video,
      onsite_status: onsite_status,
    };

    axios
      .put(`http://localhost:3333/admin-onsite/update/${onsite_id}`, data)
      .then((resp) => {
        // Replace the standard alert with SweetAlert2
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "แก้ไขข้อมูลสำเร็จ",
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/course-onsite-view");
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

  const [onsite_name, setOnsite_name] = useState("");
  const [onsite_details, setOnsite_details] = useState("");
  const [category_id, setCategory_id] = useState("");
  const [onsite_pic, setOnsite_pic] = useState("");
  const [teacher_id, setTeacher_id] = useState("");
  const [onsite_time, setOnsite_time] = useState("");
  const [onsite_location, setOnsite_location] = useState("");
  const [onsite_video, setOnsite_video] = useState("");
  const [onsite_status, setOnsite_status] = useState("");

  return (
    <>
      <Navbar_admin />
      <Nav_admin />
      <div class="p-4 sm:ml-64">
        <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <div class="grid mb-4">
            <div className="text-center">
              <div className="mx-auto max-w-[600px] text-2xl font-inter">
                แก้ไขข้อมูลออนไลน์
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              <div>
                <div class="mb-6">
                  <label
                    for="onsite_name"
                    class="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    ชื่อคอร์สเรียน
                  </label>
                  <input
                    type="text"
                    id="onsite_name"
                    name="onsite_name"
                    value={onsite_name}
                    onChange={(e) => setOnsite_name(e.target.value)}
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder="category"
                    required
                  />
                </div>
              </div>
              <div>
                <div class="mb-6">
                  <label
                    for="onsite_details"
                    class="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    รายละเอียด
                  </label>
                  <input
                    type="text"
                    id="onsite_details"
                    name="onsite_details"
                    value={onsite_details}
                    onChange={(e) => setOnsite_details(e.target.value)}
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder="รายละเอียด"
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  for="category_id"
                  class="block mb-2 text-sm font-medium text-gray-900"
                >
                  ประเภทคอร์สเรียน
                </label>
                <select
                  id="category_id"
                  name="category_id"
                  value={category_id}
                  onChange={(e) => setCategory_id(e.target.value)}
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="" disabled selected>
                    โปรดเลือกประเภทคอร์สเรียน
                  </option>
                  <option value="15">datadesign</option>
                  <option value="2">softskill</option>
                  <option value="3">systemanalysis</option>
                  <option value="6">programimg</option>
                  <option value="13">tecnology</option>
                  <option value="11">uxui</option>
                </select>
              </div>
              <div>
                <div class="mb-6">
                  <label
                    for="onsite_pic"
                    class="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    รูปภาพ (URL)
                  </label>
                  <input
                    type="text"
                    id="onsite_pic"
                    name="onsite_pic"
                    value={onsite_pic}
                    onChange={(e) => setOnsite_pic(e.target.value)}
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder="รูปภาพ (URL)"
                    required
                  />
                </div>
              </div>
              <div>
                <div>
                  <label
                    for="teacher_id"
                    class="block mb-2 text-sm font-medium text-gray-900"
                  >
                    อาจารย์ผู้สอน
                  </label>
                  <select
                    id="teacher_id"
                    name="teacher_id"
                    value={teacher_id}
                    onChange={(e) => setTeacher_id(e.target.value)}
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="" disabled selected>
                      โปรดเลือกอาจารย์ผู้สอน
                    </option>
                    <option value="1">จิรวรรณ</option>
                    <option value="14">อธิ</option>
                    <option value="30">ตาหวาน</option>
                    <option value="37">พอล</option>
                    <option value="38">ธนิน</option>
                    <option value="40">อนงอาจ</option>
                  </select>
                </div>
                <div>
                  <div class="mb-6">
                    <label
                      for="onsite_time"
                      class="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      ลงเวลาเรียน
                    </label>
                    <input
                      type="text"
                      id="onsite_time"
                      name="onsite_time"
                      value={onsite_time}
                      onChange={(e) => setOnsite_time(e.target.value)}
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      placeholder="ลงเวลาเรียน"
                      required
                    />
                  </div>
                </div>
                <div>
                  <div class="mb-6">
                    <label
                      for="onsite_location"
                      class="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      สถานที่เรียน
                    </label>
                    <input
                      type="text"
                      id="onsite_location"
                      name="onsite_location"
                      value={onsite_location}
                      onChange={(e) => setOnsite_location(e.target.value)}
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      placeholder="สถานที่เรียน"
                      required
                    />
                  </div>
                </div>
                <div>
                  <div class="mb-6">
                    <label
                      for="onsite_video"
                      class="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      วิดีโอ
                    </label>
                    <input
                      type="text"
                      id="onsite_video"
                      name="onsite_video"
                      value={onsite_video}
                      onChange={(e) => setOnsite_video(e.target.value)}
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      placeholder="วิดีโอ"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label
                    for="onsite_status"
                    class="block mb-2 text-sm font-medium text-gray-900"
                  >
                    สถานะคอร์สเรียน
                  </label>
                  <select
                    id="onsite_status"
                    name="onsite_status"
                    value={onsite_status}
                    onChange={(e) => setOnsite_status(e.target.value)}
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="" disabled selected>
                      โปรดเลือก
                    </option>
                    <option value="1">เปิด</option>
                    <option value="0">ปิด</option>
                  </select>
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
export default Teacher_update;
