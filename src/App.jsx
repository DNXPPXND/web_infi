import React from "react";
import { Routes, Route } from "react-router-dom";
import Main_users from "./pages/users/Main_users";
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
import Online_all from "./pages/admin/online/Online_all";
import Onsite_all from "./pages/admin/onsite/Onsite_all";
import Test from "./pages/test_font/Test";
import Profile_user from "./pages/users/Profile_user";
import Course_DD from "./pages/users/courses/Course_DD";
import Course_UU from "./pages/users/courses/Course_UU";
import Course_PM from "./pages/users/courses/Course_PM";
import Course_TL from "./pages/users/courses/Course_TL";
import Course_SS from "./pages/users/courses/Course_SS";
import Course_SA from "./pages/users/courses/Course_SA";
import Nonusers from "./pages/non_users/Nonusers";
import Nonusers_about from "./pages/non_users/Nonusers_about";
import Nonusers_course from "./pages/non_users/Nonusers_course";
import Non_course_DD from "./pages/users/non_course/Non_course_DD";
import Non_course_PM from "./pages/users/non_course/Non_course_PM";
import Non_course_SS from "./pages/users/non_course/Non_course_SS";
import Non_course_SA from "./pages/users/non_course/Non_course_SA";
import Non_course_TL from "./pages/users/non_course/Non_course_TL";
import Non_course_UU from "./pages/users/non_course/Non_course_UU";
import Course_Like from "./pages/users/courses/Course_Like";
import Online_new from "./pages/admin/online/Online_new";
import Online_edit from "./pages/admin/online/Online_edit";

function App() {
  return (
    <>
      <Routes>
        {/* ผู้ใช้งานที่วไป */}
        <Route path="/" element={<Nonusers />} />
        <Route path="/about" element={<Nonusers_about />} />
        <Route path="/course" element={<Nonusers_course />} />
        {/* ผู้ใช้งานที่วไป คอร์สเรียน */}
        <Route path="/course/data-design" element={<Non_course_DD />} />
        <Route path="/course/ux-ui" element={<Non_course_UU />} />
        <Route path="/course/programing" element={<Non_course_PM />} />
        <Route path="/course/techology" element={<Non_course_TL />} />
        <Route path="/course/soft-skill" element={<Non_course_SS />} />
        <Route path="/course/sa" element={<Non_course_SA />} />
        {/* ผู้ใช้งานสมาชิก */}
        <Route path="/main" element={<Main_users />} />
        <Route path="/main/about" element={<About_users />} />
        <Route path="/main/course" element={<Course_users />} />
        <Route path="/main/course/data-design" element={<Course_DD />} />
        <Route path="/main/course/ux-ui" element={<Course_UU />} />
        <Route path="/main/course/programing" element={<Course_PM />} />
        <Route path="/main/course/techology" element={<Course_TL />} />
        <Route path="/main/course/soft-skill" element={<Course_SS />} />
        <Route path="/main/course/sa" element={<Course_SA />} />
        <Route path="/main/course/like" element={<Course_Like />} />
        {/* register */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/agreements" element={<Agreements />} />
        <Route path="/onsite" element={<Onsite_User />} />
        <Route path="/profile/:id" element={<Profile_user />} />
        {/* คอร์สเรียน */}
        <Route path="/online" element={<Online_User />} />
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

        {/* online */}
        <Route path="/admin/online" element={<Online_all />} />
        <Route path="/admin/add/online" element={<Online_new />} />
        <Route path="/admin/update/online/:onsite_id" element={<Online_edit />} />
        {/* onsite */}
        <Route path="/admin/onsite" element={<Onsite_all />} />

        <Route path="/test" element={<Test />} />
      </Routes>
    </>
  );
}

export default App;
