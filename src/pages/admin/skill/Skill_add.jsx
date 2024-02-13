import React from 'react'
import Skill_add from '../../../components/admin/skill/Skill_add'
import Footer from '../../../components/users/footer/Footer';
import Nav_admin from '../../../components/admin/navbars/Nav_admin';
import Navbars_admin from '../../../components/admin/navbars/Navbars_admin';

const SkillAddPage = () => {
  return (
    <>
      <Navbars_admin />
      <Nav_admin />
      <div class="p-4 sm:ml-64">
        <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <div class="grid mb-4">
            <Skill_add />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SkillAddPage ;
