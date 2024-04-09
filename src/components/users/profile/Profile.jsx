import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Profile = () => {
  const { id, rank_id } = useParams();
  const [siteData, setSiteData] = useState(null);
  const [siteDataRank, setSiteDataRank] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log(id);
  useEffect(() => {
    
    setLoading(true);
    setError(null);
    axios
      .get(`http://localhost:3333/admin-users/view/${id}`)
      .then((response) => {
        setSiteData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("Error fetching data. Please try again later.");
        setLoading(false);
      });
  }, [id]);

  const profileContent = (
    <div className="bg-white p-8 rounded-lg shadow-lg mx-3">
      <h1 className="text-3xl font-bold mb-4">ข้อมูลส่วนตัว</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="flex items-center mb-4">
          <img
            src="https://img.freepik.com/free-psd/3d-rendering-avatar_23-2150833572.jpg?w=740&t=st=1711464311~exp=1711464911~hmac=5ae04290540783ec371e23bed151732cd0d28e21e9bae4ac82e7170d71fb1f13"
            alt="Profile"
            className="rounded-full mr-4 w-24 h-24"
          />
          <div>
            <h2 className="text-xl font-semibold">
              {siteData && siteData.fullname} {siteData && siteData.lastname}
            </h2>
            <p className="text-gray-600">{siteData && siteData.email}</p>
          </div>
        </div>
      )}
      <h2 className="text-xl font-semibold">อีเมล :</h2>
      <p className="text-gray-700">{siteData && siteData.email} </p>
      <h2 className="text-xl font-semibold">ชื่อจริง :</h2>
      <p className="text-gray-700">{siteData && siteData.fullname} </p>
      <h2 className="text-xl font-semibold">นามสกุล :</h2>
      <p className="text-gray-700">{siteData && siteData.lastname} </p>
      <h2 className="text-xl font-semibold">หมวดหมู่ที่ชอบ :</h2>
      <p className="text-gray-700">{siteData && siteData.category_id} </p>
      <h2 className="text-xl font-semibold">id :</h2>
      <p className="text-gray-700">{siteData && siteData.id} </p>
    </div>
  );

  return (
    <div className="flex justify-center items-center bg-white">
      {profileContent}
      {profileContent}
    </div>
  );
};

export default Profile;
