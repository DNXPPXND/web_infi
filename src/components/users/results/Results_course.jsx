import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Results_course = () => {
  const { student_id } = useParams();
  const [studentScores, setStudentScores] = useState([]);

  useEffect(() => {
    const fetchStudentScores = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3333/student/scores/${student_id}`
        );
        setStudentScores(response.data.scores);
      } catch (error) {
        console.error("Error fetching student scores:", error);
      }
    };

    fetchStudentScores();
  }, [student_id]);

  const bigScores = [
    { lesson: "บทเรียนที่หนึ่ง", viewedClips: "เสร็จสมบูรณ์" },
    { lesson: "บทเรียนที่สอง", viewedClips: "เสร็จสมบูรณ์" },
    { lesson: "บทเรียนที่สาม", viewedClips: "เสร็จสมบูรณ์" },
    { lesson: "บทเรียนที่สี่", viewedClips: "ยังไม่เสร็จสมบูรณ์" },
    { lesson: "บทเรียนที่ห้า", viewedClips: "เสร็จสมบูรณ์" },
  ];

  const scoresToDisplay = studentScores.length ? studentScores : bigScores;

  return (
    <div className="bg-white p-4">
      <h1 className="text-2xl font-bold mb-4">
        รายละเอียดการดูคลิปของนักเรียน
      </h1>
      <div className="overflow-x-auto">
        <table className="border-collapse border border-gray-400 w-full">
          <thead>
            <tr>
              <th className="border border-gray-400 px-6 py-3 bg-gray-200 text-gray-700 uppercase font-semibold text-sm">
                บทเรียน
              </th>
              <th className="border border-gray-400 px-6 py-3 bg-gray-200 text-gray-700 uppercase font-semibold text-sm">
                การดูคลิปแล้ว
              </th>
            </tr>
          </thead>
          <tbody>
            {scoresToDisplay.map((score, index) => (
              <tr key={index} className="transition-colors hover:bg-gray-100">
                <td className="border border-gray-400 px-6 py-4 font-bold">
                  {score.lesson}
                </td>
                <td
                  className={`border border-gray-400 px-6 py-4 font-bold ${
                    score.viewedClips === "เสร็จสมบูรณ์"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {score.viewedClips}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Results_course;
