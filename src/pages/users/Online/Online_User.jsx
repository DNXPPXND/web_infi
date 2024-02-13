import React, { useState } from "react";
import Navbar_users from "../../../components/users/navbars/Navbar_users";
import Footer from "../../../components/users/footer/Footer";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Online from "../../../components/users/course/online/Online";
import Nav_admin from "../../../components/admin/navbars/Nav_admin";
import Navbars_admin from "../../../components/admin/navbars/Navbars_admin";

const CustomTabPanel = ({ value, index, children }) => {
  // Implement your CustomTabPanel component logic here
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          {/* Render your content here */}
          {children}
        </Box>
      )}
    </div>
  );
};


const Online_User = () => {
  
  const [value, setValue] = useState(0);

  // Event handler for Tabs component
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Function to generate accessibility properties for Tabs
  const a11yProps = (index) => {
    return {
      id: `tab-${index}`,
      "aria-controls": `tabpanel-${index}`,
    };
  };


  return (
    <>
      <Navbars_admin />
      <Nav_admin/>
      <div class="p-4 sm:ml-64">
        <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <div class="grid mb-4">
            <Online />
          </div>
        </div>
      </div>
      <Footer />
      
    </>
  );
};

export default Online_User;
