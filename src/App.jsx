import React from "react";
import { Routes, Route } from "react-router-dom";
import Login_page from "./pages/login-signup/Login_page";
import Signup_page from "./pages/login-signup/Signup_page";
import Main_pages from "./pages/main/Main_pages";
import Course_more_page from "./pages/main/Course_all";
import About_page from "./pages/main/About_page";
import Agreement_pages from "./pages/login-signup/Agreement_pages";
import Online_course from "./pages/Online_course";
import Proflie from "./pages/Proflie";
import Datadesign_page from "./pages/main/Datadesign_page";
import Ux_ui_pages from "./pages/main/Ux_ui_pages";
import Programing_pages from "./pages/main/Programing_pages";
import Techology_pages from "./pages/main/Techology_pages";
import Softskill_pages from "./pages/main/Softskill_pages";
import System_analysis_pages from "./pages/main/System_analysis_pages";
import YouTubeVideo from "./components/vdo/Video";
import Main_profile from "./pages/Main_profile";
import Course_profile from "./pages/Course_profile";
import About_profile from "./pages/About_profile";
import Admin_add_t from "./pages/teacher/Teacher_add";
import Test from "./pages/Test";
import Teacherview from "./pages/teacher/Teacher_view";
import Update_teacher from "./pages/teacher/Teacher_update";
import Rank from "./pages/rank/Rank";
import Rankadd from './pages/rank/Rankadd';
import Rankedit from "./pages/rank/Rankedit";

function App() {
  return (
    <>
      <Routes>
        {/* หน้าใช่งานทั่วไป */}
        <Route path="/" element={<Main_pages />} />
        <Route path="/main" element={<Main_pages />} />
        <Route path="/about" element={<About_page />} />
        <Route path="/course" element={<Course_more_page />} />
        <Route path="/login" element={<Login_page />} />
        <Route path="/signup" element={<Signup_page />} />
        <Route path="/agreements" element={<Agreement_pages />} />
        <Route path="/online-course" element={<Online_course />} />
        <Route path="/profile" element={<Proflie />} />
        {/* คอร์สเรียน */}
        <Route path="/course/data-design" element={<Datadesign_page />} />
        <Route path="/course/ux-ui" element={<Ux_ui_pages />} />
        <Route path="/course/programing" element={<Programing_pages />} />
        <Route path="/course/techology" element={<Techology_pages />} />
        <Route path="/course/soft-skill" element={<Softskill_pages />} />
        <Route path="/course/sa" element={<System_analysis_pages />} />
        {/* วีดีโอ */}
        <Route path="/video" element={<YouTubeVideo />} />
        {/* สมัครสมาขิกแล้ว */}
        <Route path="/main-profile" element={<Main_profile />} />
        <Route path="/course-profile" element={<Course_profile />} />
        <Route path="/about-profile" element={<About_profile />} />
        {/* แอดมิน */}
        {/* teacher */}
        <Route path="/test" element={<Test />} />
        <Route path="/view" element={<Teacherview />} />
        <Route path="/view/add-teacher" element={<Admin_add_t />} />
        <Route path="/view/update/:teacher_id" element={<Update_teacher />} />
        {/* rank */}
        <Route path="/rank-view" element={<Rank />} />
        <Route path="/rank-view/add" element={<Rankadd />} />
        <Route path="/rank-view/update" element={<Rankedit />} />
      </Routes>
    </>
  );
}

export default App;
