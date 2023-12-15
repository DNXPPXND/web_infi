import React, { useState, useEffect } from "react";
import axios from "axios";

const Table_online = () => {
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
      <div className="mx-auto">
        <table className="w-full text-sm text-left">
          <thead className="text-xs uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 rounded-l-lg">
                ชื่อ คอร์สเรียน
              </th>
              <th scope="col" className="px-6 py-3">
                Link
              </th>
            </tr>
          </thead>
          <tbody>
            {onsiteData.map((onsite, index) => (
              <tr key={index} className="bg-white hover:bg-gray-100">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  <a href={onsite.lesson_cilp1} >Name: {onsite.lesson_name1} </a>
                </th>
                <td className="px-6 py-4">
                  <a href={onsite.lesson_cilp1}>Link: {onsite.lesson_cilp1}</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="w-full py-5 text-white px-4 bg-cyan-300 grid grid-cols-1 sm:grid-cols-2">
        <div className="mt-4 lg:mt-8 flex justify-center lg:justify-center"></div>
        <a className="items-center" target="_blank">
          <button className="flex btn btn-primary rounded-full font-medium w-[200px] ">
            เรียนสำเร็จแล้ว
          </button>
        </a>
      </div>
    </>
  );
};

export default Table_online;
