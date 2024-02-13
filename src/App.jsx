import React from "react";
import { Routes, Route } from "react-router-dom";
import Main_users from "./pages/users/Main_users"
import About_users from "./pages/users/About_users";
import Course_users from "./pages/users/Course_users";
import Login from "./pages/users/login&register/Login";
import Register from "./pages/users/login&register/Register";
import Teacher_all from "./pages/admin/teacher/Teacher_all";
import Teacher_add from "./pages/admin/teacher/Teacher_add";
import Teacher_update from "./pages/admin/teacher/Teacher_update";
import Rank_all from "./pages/admin/rank/Rank_all";
import Rank_add from "./pages/admin/rank/Rank_add";
import Rank_update from "./pages/admin/rank/Rank_update";
import Category from "./pages/admin/category/Category";
import Category_Add from "./pages/admin/category/Category_Add";
import Category_Update from "./pages/admin/category/Category_Update";
import Agreements from "./components/login_register/Agreememts";
import Onsite_User from "./pages/users/Onsite/Onsite_User";
import Online_User from "./pages/users/Online/Online_User";
import Course_info_online from "./pages/users/course_info/Course_info_online";
import Course_info_onsite from "./pages/users/course_info/Course_info_onsite";
import Skill_all from "./pages/admin/skill/Skill_all";
import Skill_add from "./pages/admin/skill/Skill_add";
import Skill_update from "./pages/admin/skill/Skill_update";
import Online_all from "./pages/admin/online/Online_all";
import Onsite_all from "./pages/admin/onsite/Onsite_all";

function App() {
  return (
    <>
      <Routes>
        {/* ผู้ใช้งาน */}
        <Route path="/" element={<Main_users />} />
        <Route path="/about" element={<About_users />} />
        <Route path="/course" element={<Course_users />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/agreements" element={<Agreements />} />
        <Route path="/onsite" element={<Onsite_User />} />

        <Route path="/online" element={<Online_User />} />
        {/* คอร์สเรียน */}
        <Route
          path="/online/details/:onsite_id"
          element={<Course_info_online />}
        />
        <Route
          path="/onsite/details/:site_id"
          element={<Course_info_onsite />}
        />
        {/* แอดมิน */}
        {/* teacher */}
        <Route path="/admin" element={<Teacher_all />} />
        <Route path="/admin/add-teacher" element={<Teacher_add />} />
        <Route path="/admin/update/:teacher_id" element={<Teacher_update />} />
        {/* rank */}
        <Route path="/admin/rank" element={<Rank_all />} />
        <Route path="/admin/add-rank" element={<Rank_add />} />
        <Route path="/admin/update/rank/:rank_id" element={<Rank_update />} />
        {/* category */}
        <Route path="/admin/category" element={<Category />} />
        <Route path="/admin/add-category" element={<Category_Add />} />
        <Route
          path="/admin/update/category/:category_id"
          element={<Category_Update />}
        />
        {/* skill */}
        <Route path="/admin/skill" element={<Skill_all />} />
        <Route path="/admin/add-skill" element={<Skill_add />} />
        <Route
          path="/admin/update/skill/:skill_id"
          element={<Skill_update />}
        />
        {/* online */}
        <Route path="/admin/online" element={<Online_all />} />
        {/* onsite */}
        <Route path="/admin/onsite" element={<Onsite_all />} />
      </Routes>
    </>
  );
}

export default App;
