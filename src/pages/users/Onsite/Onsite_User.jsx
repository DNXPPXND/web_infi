import React from 'react'
import Navbar_users from '../../../components/users/navbars/Navbar_users'
import Footer from '../../../components/users/footer/Footer'
import Onsite from '../../../components/users/course/onsite/Onsite'
import Nav_admin from '../../../components/admin/navbars/Nav_admin'

const Onsite_User = () => {
  return (
    <>
      <Navbar_users />
      <Nav_admin />
      <div class="p-4 sm:ml-64">
        <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <div class="grid mb-4">
            <Onsite />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Onsite_User
