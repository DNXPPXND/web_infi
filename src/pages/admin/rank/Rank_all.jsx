import React from 'react'
import Navbars_admin from '../../../components/admin/navbars/Navbars_admin';
import Nav_admin from '../../../components/admin/navbars/Nav_admin';
import Footer from '../../../components/users/footer/Footer';
import Rank from "../../../components/admin/rank/Rank_view";
const Rank_all = () => {
  return (
    <>
      <Navbars_admin />
      <Nav_admin />
      <div class="p-4 sm:ml-64">
        <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <div class="grid mb-4">
            <Rank/>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Rank_all
