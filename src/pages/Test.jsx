import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Test() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    image_data: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const urlapi = "http://localhost:3333/upload";
    const param = {
      name: formData.name,
      image_data: formData.image_data,
    };
    axios
      .post(urlapi, param)
      .then((resp) => {
        navigate("/admin");
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
      <div class="p-4 sm:ml-64">
        <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <div class="grid mb-4">
            <div className="text-center">
              <div className="mx-auto max-w-[600px] text-2xl font-inter">
                เพิ่มข้อมูลรูปภาพ
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              <div class="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                  <label
                    for="name"
                    class="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder="name"
                    required
                  />
                </div>
                <div>
                  <label
                    class="block mb-2 text-sm font-medium text-gray-900 "
                    for="file"
                  >
                    Upload file
                  </label>
                  <input
                    class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 "
                    id="image_data"
                    type="file"
                    name="image_data"
                    value={formData.image_data}
                    onChange={handleChange}
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
    </>
  );
}

export default Test;
