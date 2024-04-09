import React, { useState } from "react";
import "./stepper.css";
import { TiTick } from "react-icons/ti";
const Stepper = ({ currentStep, isComplete, onComplete }) => {
  const steps = ["บทเรียนที่ 1", "บทเรียนที่ 2", "บทเรียนที่ 3", "บทเรียนที่ 4"];
  const [complete, setComplete] = useState(isComplete);
  return (
    <>
      <div className="flex justify-between">
        {steps?.map((step, i) => (
          <div
            key={i}
            className={`step-item ${currentStep === i + 1 && "active"} ${
              (i + 1 < currentStep || complete) && "complete"
            } `}
            onClick={() => onComplete(i + 1)}
          >
            <div className="step">
              {i + 1 < currentStep || complete ? <TiTick size={24} /> : i + 1}
            </div>
            <p className="text-gray-500">{step}</p>
          </div>
        ))}
      </div>
      {!complete && (
        <button
          className="flex btn btn-primary"
          onClick={() => {
            // เปลี่ยนเงื่อนไขเพื่อตรวจสอบว่าเป็นขั้นตอนสุดท้ายหรือไม่
            if (currentStep === steps.length) {
              // ถ้าเป็นขั้นตอนสุดท้ายให้เรียกใช้งานฟังก์ชัน onComplete พร้อมส่งขั้นตอนสุดท้าย
              onComplete(steps.length);
            } else {
              // ถ้าไม่ใช่ขั้นตอนสุดท้ายให้เรียกใช้งานฟังก์ชัน onComplete พร้อมส่งขั้นตอนถัดไป
              onComplete(currentStep + 1);
            }
          }}
        >
          {/* เปลี่ยนข้อความในปุ่มตามคำแนะนำ */}
          {currentStep === steps.length ? "เสร็จสิ้น" : "บทเรียนถัดไป"}
        </button>
      )}
    </>
  );
};

export default Stepper;
