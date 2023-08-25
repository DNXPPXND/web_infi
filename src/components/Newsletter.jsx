import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full py-16 text-white px-4 bg-cyan-300">
      <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row justify-center items-center">
        <div className="lg:w-2/3 text-center lg:text-left lg:pr-8">
          <h1 className="md:text-3xl sm:text-2xl text-1xl font-bold py-2">
            มีคอร์สเรียนออนไลน์ INFI-LEARN มากมายรอให้คุณได้เรียนรู้{" "}
          </h1>
          <p>สามารถเรียนได้ทุกที่ ทุกเวลากว่า 100 คอร์ส</p>
          <p>
            พร้อมที่จะเสริมสร้างสกิลและทักษะตามความต้องการของคุณเรียนได้เลยวันนี้!
          </p>
          <div className="mt-4 lg:mt-8 flex justify-center lg:justify-start">
            <button className="bg-white text-cyan-300 rounded-full font-medium w-[200px] py-3 mx-auto">
              คอร์สเรียนทั้งหมด
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
