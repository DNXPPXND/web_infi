import React, { useState, useEffect } from "react";
import axios from "axios";

const Site = () => {
  const [siteData, setSiteData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3333/admin-site/view")
      .then((response) => {
        setSiteData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleCourse = (site_id) => {
    window.location = `/onsite-course/${site_id}`;
  };

  return (
    <>
      <div className="mt-10 p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-5">
        {siteData.map((site) => (
          <div key={site.id} className="rounded overflow-hidden shadow-lg">
            <div className="w-full">
              <img
                src={site.site_pic}
                alt={`Onsite poster for ${site.title}`}
              />
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
                {site.site_name}
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 ml-3">
                  # {site.category_name}
                </span>
              </div>
              <p className="text-gray-700 text-base">{site.site_details}</p>
              <div className="flex justify-center mt-10">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  <a
                    onClick={() => handleCourse(site.site_id)}
                    rel="noopener noreferrer"
                  >
                    ลงทะเบียนเรียนออนไซต์
                  </a>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Site;
