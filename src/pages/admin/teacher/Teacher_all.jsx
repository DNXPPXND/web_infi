import React from 'react'
import Teacher_view from '../../../components/admin/teacher/Teacher_view';
import Navbars_admin from '../../../components/admin/navbars/Navbars_admin';
import Nav_admin from '../../../components/admin/navbars/Nav_admin';
import Footer from '../../../components/users/footer/Footer';

const Teacher_all = () => {
  return (
    <>
    <Navbars_admin/>
    <Nav_admin/>
      <div class="p-4 sm:ml-64">
        <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <div class="grid mb-4">
            <Teacher_view/>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Teacher_all
