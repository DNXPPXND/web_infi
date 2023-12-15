import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Nav_admin from "../../components/admin/Nav_admin";
import Navbar_admin from "../../components/navbar/Navbar_admin";
import Footer_page from "../../components/footer/Footer_page";
import Swal from "sweetalert2";

function Onsite_add() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    onsite_name: "",
    onsite_details: "",
    category_id: "",
    onsite_pic: "",
    teacher_id: "",
    onsite_time: "",
    onsite_location: "",
    onsite_video: "",
    onsite_status: "",
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
    const urlapi = "http://localhost:3333/admin-onsite/add";
    const param = {
      onsite_name: formData.onsite_name,
      onsite_details: formData.onsite_details,
      category_id: formData.category_id,
      onsite_pic: formData.onsite_pic,
      teacher_id: formData.teacher_id,
      onsite_time: formData.onsite_time,
      onsite_location: formData.onsite_location,
      onsite_video: formData.onsite_video,
      onsite_status: formData.onsite_status,
    };
    axios
      .post(urlapi, param)
      .then((resp) => {
        navigate("/course-onsite-view");
        console.log(resp);
        Swal.fire({
          title: "เพื่มข้อมูลสำเร็จ",
          icon: "success",
        });
      })
      .catch((e) => {
        console.log(e);
        Swal.fire({
          title: "เกิดข้อผิดพลาดในการบันทึกข้อมูล",
          icon: "error",
        });
      });
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
                    value={formData.onsite_name}
                    onChange={handleChange}
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
                    value={formData.onsite_details}
                    onChange={handleChange}
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
                  value={formData.category_id}
                  onChange={handleChange}
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
                    value={formData.onsite_pic}
                    onChange={handleChange}
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
                    ประเภทคอร์สเรียน
                  </label>
                  <select
                    id="teacher_id"
                    name="teacher_id"
                    value={formData.teacher_id}
                    onChange={handleChange}
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
                      value={formData.onsite_time}
                      onChange={handleChange}
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
                      value={formData.onsite_location}
                      onChange={handleChange}
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
                      value={formData.onsite_video}
                      onChange={handleChange}
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
                    value={formData.onsite_status}
                    onChange={handleChange}
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
export default Onsite_add;
