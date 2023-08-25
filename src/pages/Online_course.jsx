import React from "react";
import Navbar from "../components/Navbar_pages.jsx";
import Footer_page from "../components/Footer_page";
import Vedio from "../components/Vedio.jsx";
import skill from "../assets/skill.png";
import Course_more_page from "../components/Course_more_page.jsx";
import Tablevideo from '../assets/Tablevideo.png';
import atom from '../assets/atom.png';

const Online_course = () => {

  const videoUrl ="vedio-pre.mp4";

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1  sm:grid-cols-2  ">
        <div className=" p-20 rounded-lg">
          <h1 className="text-5xl md:text-3xl sm:text-2xl font-bold mb-4 text-center">
            รายละเอียดคอร์สเรียนออนไลน์
          </h1>
          <p className="text-gray-700 text-3xl md:text-1xl sm:text-lg text-left font-bold">
            เรียนรู้ศัพท์ที่ออกในข้อสอบ TOEIC ทุกรอบ ตั้งแต่ขั้นพื้นฐาน
            ในเวลาเพียงแค่ 1 ชั่วโมงนิดๆเหมาะสำหรับมือใหม่ที่ยังไม่เคยสอบ TOEIC
            หรือผู้ที่สอบมาแล้วแต่คะแนนยังไม่ถึง 400ศัพท์ที่มาแน่นอนในทุกๆ Part
            เรียกว่าสอบวันไหน ก็ต้องเจอเพียงแค่ 1 ชั่วโมงกว่าๆ
            คุณจะได้เห็นภาพข้อสอบ TOEIC
            ในมุมมองใหม่ที่ง่ายกว่าเดิมเรียนจบแล้วคุณจะพร้อมลุยทันที!!!
          </p>
          <div className="font-bold">
            <p className="mt-2"> - สอนโดย อาจารย์</p>
            <p className="mt-2"> - มีไฟล์ให้ดาวน์โหลด</p>
            <p className="mt-2"> - มีเอกสารประกอบการเรียน</p>
            <p className="mt-2"> - สามารถเรียนที่ไหน เมื่อไหร่ก็ได้ตลอดชีพ</p>
            <p className="mt-2">
              {" "}
              - คำศัพท์ TOEIC ที่ออกบ่อยที่สุดในทุก Part ของข้อสอบ
            </p>
            <p className="mt-2">
              {" "}
              - เนื้อหาทั้งหมด 21 วิดีโอ ความยาวรวมกัน 1 ชั่วโมง 28 นาที
            </p>
          </div>
        </div>
        <div className="justify-center items-center mt-20">
          <img src={skill} />
        </div>
      </div>
      <div className="mt-20 bg-gray-200 ">
        <Vedio videoUrl={videoUrl} />
      </div>
      <div className="flex justify-center items-center mt-20">
        <img src={Tablevideo} />
      </div>
      <div className="w-full py-16 text-white px-4 bg-cyan-300 grid grid-cols-1  sm:grid-cols-2 ">
        <div>
          <img src={atom} />
        </div>
        <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row justify-center items-center">
          <div className="lg:w-2/3 text-center lg:text-left lg:pr-8">
            <h1 className="md:text-3xl sm:text-2xl text-1xl py-2">
            ดร.ก้อง รักสยาม 
            </h1>
            <p>
              มหาวิทยาลัย ยูทูป
            </p>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <Footer_page />
      </div>
    </>
  );
};

export default Online_course;
