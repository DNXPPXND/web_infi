import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const Course_details_site = () => {
  const { onsite_id } = useParams();
  const [siteData, setSiteData] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:3333/admin-site/view/${onsite_id}`)
      .then((response) => {
        console.log(response.data);
        setSiteData(response.data.onsite);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [onsite_id]);

  const [videoWatched, setVideoWatched] = useState(false);
  const [videoProgress, setVideoProgress] = useState(0);

  const handleVideoEnd = () => {
    setVideoWatched(true);
  };

  const handleVideoProgress = (event) => {
    const { currentTime, duration } = event.target;
    const progress = (currentTime / duration) * 100;
    setVideoProgress(progress);
  };

  return (
    <div className="bg-white p-4 flex-1">
      <div className="flex items-center justify-center">
        <ul className="steps lg:steps-horizontal">
          <a href="/online">
            <li className="step step-primary">บทเรียน 1</li>
          </a>

          <li className="step">บทเรียน 2</li>
          <li className="step">บทเรียน 3</li>
          <li className="step">บทเรียน 4</li>
          <li className="step">บทเรียน 5</li>
          <li className="step">เสร็จสิ้นการสอน</li>
        </ul>
      </div>
      {siteData && (
        <div className="bg-white font-inter p-4">
          <div className="md:w-3/4 lg:w-1/1 xl:w-1/1 mt-6 md:mt-0 mx-auto">
            <div className="bg-gray-100 p-6 md:p-8 rounded-lg shadow-md">
              <iframe
                width="100%"
                height="315"
                src={`https://www.youtube.com/embed/${getVideoId(
                  siteData.lesson_cilp1
                )}`}
                title={siteData.lesson_name1}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                onEnded={handleVideoEnd}
                onTimeUpdate={handleVideoProgress}
              ></iframe>
              <div className="relative mb-4">
                <div
                  className="bg-blue-500 h-2 rounded-lg"
                  style={{ width: `${videoProgress}%` }}
                ></div>
              </div>
              <h2 className="text-lg md:text-2xl font-bold mb-4">
                {siteData.lesson_name1}
              </h2>
              <p className="text-base md:text-lg"># {siteData.category_name}</p>
              {videoWatched && (
                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md">
                  Enroll Now
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const getVideoId = (url) => {
  const match = url.match(
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  );
  return match ? match[1] : null;
};

export default Course_details_site;
