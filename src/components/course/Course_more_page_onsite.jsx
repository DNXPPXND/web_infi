import React, { useState, useEffect } from "react";
import axios from "axios";

const Course_more_page = () => {
  const [onsiteData, setOnsiteData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3333/admin-onsite/view")
      .then((response) => {
        setOnsiteData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <div className="mt-10 p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-5">
        {onsiteData.map(
          (
            onsite
          ) => (
            <div key={onsite.id} className="rounded overflow-hidden shadow-lg">
              <div className="w-full">
                <img
                  src={onsite.onsite_pic}
                  alt={`Onsite poster for ${onsite.title}`}
                />
              </div>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                  {onsite.onsite_name}{" "}
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 ml-3">
                    # {onsite.category_name}
                  </span>
                </div>
                <p className="text-gray-700 text-base">
                  {onsite.onsite_details}
                </p>{" "}
                <div className="flex justify-center mt-10">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    <a href="/login" target="_blank" rel="noopener noreferrer">
                      {" "}
                      ลงทะเบียนเรียนออนไลน์
                    </a>
                  </button>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
};
export default Course_more_page;
