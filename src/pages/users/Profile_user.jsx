import React from 'react'
import Profile from '../../components/users/profile/Profile'
import Footer from '../../components/users/footer/Footer'
import Nav_profile from '../../components/users/navbars/Nav_profile';
import Navbar_profile from '../../components/users/navbars/Navbar_profile';

const Profile_user = () => {
  return (
    <>
      <Navbar_profile />
      <Nav_profile/>
      <div class="p-4 sm:ml-64">
        <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <div class="grid mb-4">
            <Profile />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile_user
