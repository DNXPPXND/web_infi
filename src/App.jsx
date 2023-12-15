import React from "react";
import { Routes, Route } from "react-router-dom";
import Login_page from "./pages/login-signup/Login_page";
import Signup_page from "./pages/login-signup/Signup_page";
import Main_pages from "./pages/main/Main_pages";
import Course_more_page from "./pages/main/Course_all";
import About_page from "./pages/main/About_page";
import Agreement_pages from "./pages/login-signup/Agreement_pages";
import Onsite_course from "./pages/course_onsite/Onsite_course_profile";
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
import Rank from "./pages/rank/Rank_view";
import RankUpdate from "./pages/rank/Rank_update";
import Rank_add from "./pages/rank/Rank_add";
import Category from "./pages/category/Category_view";
import Category_add from "./pages/category/Category_add";
import Category_update from "./pages/category/Category_update";
import Onsite_view from "./pages/onsite/Onsite_view";
import Onsite_add from "./pages/onsite/Onsite_add";
import Onsite_update from "./pages/onsite/Onsite_update";
import User_profile from "./pages/users/User_profile";
import Skill_view from "./pages/skill/Skill_view";
import Skill_add from "./pages/skill/Skill_add";
import Skill_update from "./pages/skill/Skill_update";
import Admin_view from "./pages/admin/Admin_view";
import Online_course from "./pages/course_online/Online_course _profile";
import Site from "./components/course/Site";
import Site_line from "./components/course/Site_line";
import Site_view from "./pages/onsite_site/Site_view";
import Site_update from "./pages/onsite_site/Site_update";
import Site_add from "./pages/onsite_site/Site_add";
import Course_recommend from "./pages/course_recommend/Course_recommend";
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
        <Route path="/onsite-course/:site_id" element={<Onsite_course />} />
        <Route path="/online-course/:onsite_id" element={<Online_course />} />
        <Route path="/profile" element={<Proflie />} />
        <Route path="/recommends" element={<Course_recommend />} />
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
        <Route path="/rank-view/add" element={<Rank_add />} />
        <Route path="/rank-view/update/:rank_id" element={<RankUpdate />} />
        {/* catagory */}
        <Route path="/category-view" element={<Category />} />
        <Route path="/category-view/add" element={<Category_add />} />
        <Route
          path="/category-view/update/:category_id"
          element={<Category_update />}
        />
        {/* online line */}
        <Route path="/course-onsite-view" element={<Onsite_view />} />
        <Route path="/course-onsite-view/add" element={<Onsite_add />} />
        <Route
          path="/course-onsite-view/update/:onsite_id"
          element={<Onsite_update />}
        />
        {/* online onsite */}
        <Route path="/course-site-view" element={<Site_view />} />
        <Route path="/course-site-view/add" element={<Site_add />} />
        <Route
          path="/course-site-view/update/:onsite_id"
          element={<Site_update />}
        />

        {/* users */}
        <Route path="/users-profile/:id" element={<User_profile />} />
        <Route path="/admin-view" element={<Admin_view />} />
        {/* skill */}
        <Route path="/skill-view" element={<Skill_view />} />
        <Route path="/skill-view/add" element={<Skill_add />} />
        <Route path="/skill-view/update/:skill_id" element={<Skill_update />} />

        <Route path="/site" element={<Site />} />
        <Route path="/site-line" element={<Site_line />} />
      </Routes>
    </>
  );
}

export default App;
