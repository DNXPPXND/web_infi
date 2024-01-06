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

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main_users />} />
        <Route path="/about" element={<About_users />} />
        <Route path="/course" element={<Course_users />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* แอดมิน */}
        {/* teacher */}
        <Route path="/admin" element={<Teacher_all />} />
        <Route path="/admin/add-teacher" element={<Teacher_add />} />
        <Route path="/admin/update/:teacher_id" element={<Teacher_update />} />
        {/* rank */}
        <Route path="/admin/rank" element={<Rank_all />} />
        <Route path="/admin/add-rank" element={<Rank_add />} />
        <Route path="/admin/update/rank/:rank_id" element={<Rank_update />} />
        {/* categoty */}
        <Route path="/admin/category" element={<Category/>} />
        <Route path="/admin/add-category" element={<Category_Add />} />
        <Route
          path="/admin/update/category/:category_id"
          element={<Category_Update />}
        />
      </Routes>
    </>
  );
}

export default App;
