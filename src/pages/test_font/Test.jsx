import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const Test = () => {
  const [formData, setFormData] = useState({
    onsite_name: "",
    onsite_details: "",
    onsite_objectivity: "",
    onsite_time: "",
    onsite_location: "",
    onsite_form: "",
    pic: null,
    vdo: null,
    teacher_id: "",
    category_id: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    for (let key in formData) {
      formDataToSend.append(key, formData[key]);
    }
    try {
      const response = await axios.post(
        "http://localhost:3030/create/onsite",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      Swal.fire({
        icon: "success",
        title: "Success",
        text: response.data.status,
      });
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "An error occurred. Please try again later.",
      });
    }
  };

  return (
    <div className="max-w-lg mx-auto my-8 p-8 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Create Onsite Form</h1>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="mb-4">
          <label htmlFor="onsite_name" className="block mb-2">
            Onsite Name:
          </label>
          <input
            type="text"
            id="onsite_name"
            name="onsite_name"
            value={formData.onsite_name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="onsite_details" className="block mb-2">
            Onsite Details:
          </label>
          <textarea
            id="onsite_details"
            name="onsite_details"
            value={formData.onsite_details}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          ></textarea>
        </div>

        <div className="mb-4">
          <label htmlFor="onsite_objectivity" className="block mb-2">
            Onsite Objectivity:
          </label>
          <input
            type="text"
            id="onsite_objectivity"
            name="onsite_objectivity"
            value={formData.onsite_objectivity}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="onsite_time" className="block mb-2">
            Onsite Time:
          </label>
          <input
            type="text"
            id="onsite_time"
            name="onsite_time"
            value={formData.onsite_time}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="onsite_location" className="block mb-2">
            Onsite Location:
          </label>
          <input
            type="text"
            id="onsite_location"
            name="onsite_location"
            value={formData.onsite_location}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="onsite_form" className="block mb-2">
            Onsite Form:
          </label>
          <input
            type="text"
            id="onsite_form"
            name="onsite_form"
            value={formData.onsite_form}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="pic" className="block mb-2">
            Upload Picture:
          </label>
          <input
            type="file"
            id="pic"
            name="pic"
            onChange={handleFileChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="vdo" className="block mb-2">
            Upload Video:
          </label>
          <input
            type="file"
            id="vdo"
            name="vdo"
            onChange={handleFileChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="teacher_id" className="block mb-2">
            Teacher ID:
          </label>
          <input
            type="text"
            id="teacher_id"
            name="teacher_id"
            value={formData.teacher_id}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="category_id" className="block mb-2">
            Category ID:
          </label>
          <input
            type="text"
            id="category_id"
            name="category_id"
            value={formData.category_id}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Test;
