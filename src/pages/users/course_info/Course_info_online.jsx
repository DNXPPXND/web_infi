import React, { useState } from "react";
import Navbar_users from "../../../components/users/navbars/Navbar_users";
import Footer from "../../../components/users/footer/Footer";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Course_info from "../../../components/users/course_info/Course_info";
import Course_details from "../../../components/users/course_details/Course_details";

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

const Course_info_online = () => {
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
      <Navbar_users />
      <div>
        <React.Fragment>
          <CssBaseline />
          <Container fixed>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="รายละเอียด" {...a11yProps(0)} />
                <Tab label="คอร์สเรียน" {...a11yProps(1)} />
                <Tab label="ผลการเรียน" {...a11yProps(2)} />
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              <Course_info/>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <Course_details/>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
              Item Three
            </CustomTabPanel>
          </Container>
        </React.Fragment>
      </div>
      <Footer />
    </>
  );
};

export default Course_info_online;
