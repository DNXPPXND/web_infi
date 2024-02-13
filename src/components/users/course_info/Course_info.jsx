import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Course_info = () => {
  const { onsite_id } = useParams();
  const [siteData, setSiteData] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:3333/admin-onsite/view/${onsite_id}`)
      .then((response) => {
        console.log(response.data); // Log the entire response to the console
        setSiteData(response.data.onsite);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [onsite_id]);

  return (
    <div className="bg-white">
      {siteData && (
        <div className="bg-white font-inter">
          <div className="max-w-screen-xl mx-auto md:flex items-center justify-between p-8 md:p-12 space-x-8">
            <div className="md:w-1/2">
              <div className="bg-gradient-to-r from-blue-700 to-purple-500 text-white p-8 rounded-lg shadow-md">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                  {siteData.onsite_name} #{siteData.category_name}
                </h1>
                <h2 className="text-2xl font-bold">{siteData.onsite_details}</h2>
                <p className="mt-2 text-base md:text-lg">
                  By: {siteData.teacher_fname || "N/A"}{" "}
                  {siteData.teacher_lname || "N/A"}
                </p>
              </div>
            </div>
            <div className="md:w-1/2 mt-6 md:mt-0">
              <div className="bg-gray-100 p-6 md:p-8 rounded-lg shadow-md">
                
                <iframe
                  width="100%"
                  height="315"
                  src={`https://www.youtube.com/embed/${getVideoId(
                    siteData.onsite_video
                  )}`}
                  title={siteData.onsite_name}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <h2 className="text-lg md:text-2xl font-bold mb-4">
                  {siteData.onsite_name}
                  <p>{siteData.onsite_time}</p>
                </h2>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Helper function to extract video ID from YouTube URL
const getVideoId = (url) => {
  const match = url.match(
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  );
  return match ? match[1] : null;
};

export default Course_info;
