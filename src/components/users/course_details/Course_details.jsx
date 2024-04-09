import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { TiTick } from "react-icons/ti";
import "./stepper.css";

const Stepper = ({ currentStep, complete, onComplete }) => {
  const steps = [
    "บทเรียนที่ 1",
    "บทเรียนที่ 2",
    "บทเรียนที่ 3",
    "บทเรียนที่ 4",
    "บทเรียนที่ 5",
    "เรียนสำเร็จแล้ว",
  ];

  return (
    <>
      <div className="flex justify-center">
        {steps?.map((step, i) => (
          <div
            key={i}
            className={`step-item ${currentStep === i + 1 && "active"} ${
              (i + 1 < currentStep || complete) && "complete"
            } `}
            onClick={() => {
              if (!complete) {
                onComplete(i + 1);
              }
            }}
          >
            <div className="step">
              {i + 1 < currentStep || complete ? <TiTick size={24} /> : i + 1}
            </div>
            <p className="text-gray-500">{step}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-3">
        {!complete && (
          <button
            className="flex btn btn-primary"
            onClick={() => {
              if (currentStep === 5) {
                onComplete(6);
              } else {
                onComplete(currentStep + 1);
              }
            }}
          >
            {currentStep === 5 ? "เสร็จสิ้น" : "บทเรียนถัดไป"}
          </button>
        )}
      </div>
    </>
  );
};

const Course_details = () => {
  const { onsite_id } = useParams();
  const [siteData, setSiteData] = useState();
  const [activeStep, setActiveStep] = useState(1);
  const [videoWatched, setVideoWatched] = useState(false);
  const [videoProgress, setVideoProgress] = useState(0);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:3333/admin-onsite/view/${onsite_id}`)
      .then((response) => {
        console.log(response.data);
        setSiteData(response.data.onsite);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [onsite_id]);

  const handleVideoEnd = () => {
    setVideoWatched(true);
  };

  const handleVideoProgress = (event) => {
    const { currentTime, duration } = event.target;
    const progress = (currentTime / duration) * 100;
    setVideoProgress(progress);
  };

  const handleStepComplete = (step) => {
    setActiveStep(step);
    if (step === 6) {
      setComplete(true);
    }
  };

  const getVideoId = (url) => {
    const match = url.match(
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
    );
    return match ? match[1] : null;
  };

  return (
    <div className="bg-white p-4 flex-1">
      <Stepper
        currentStep={activeStep}
        complete={complete}
        onComplete={handleStepComplete}
      />
      {siteData && (
        <div className="bg-white font-inter p-4">
          <div className="md:w-3/4 lg:w-1/1 xl:w-1/1 mt-6 md:mt-0 mx-auto">
            <div className="bg-gray-100 p-6 md:p-8 rounded-lg shadow-md">
              {activeStep <= 5 && (
                <>
                  <iframe
                    width="100%"
                    height="315"
                    src={`https://www.youtube.com/embed/${getVideoId(
                      siteData[`lesson_cilp${activeStep}`]
                    )}`}
                    title={siteData[`lesson_name${activeStep}`]}
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
                    {siteData[`lesson_name${activeStep}`]}
                  </h2>
                  <p className="text-base md:text-lg">
                    # {siteData.category_name}
                  </p>
                  {videoWatched && (
                    <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md">
                      Enroll Now
                    </button>
                  )}
                </>
              )}
              {activeStep === 6 && (
                <div className="text-center">
                  <h2 className="text-lg md:text-2xl font-bold mb-4">
                    เรียนสำเร็จแล้ว
                  </h2>
                  <p className="text-base md:text-lg">ขอแสดงความยินดี!</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Course_details;
