import React, { useState } from "react";
import Navbar_profile from "../../../components/users/navbars/Navbar_profile";
import Footer from "../../../components/users/footer/Footer";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import CourseInfo from "../../../components/users/course_info/Course_info";
import CourseDetails from "../../../components/users/course_details/Course_details";
import Button from "@mui/material/Button"; // Import Button from Material-UI
import Grid from "@mui/material/Grid"; // Import Grid from Material-UI
import Results_course from "../../../components/users/results/Results_course";
import { Link, Navigate } from "react-router-dom";

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

  // Function to handle tab navigation
  const nextTab = () => {
    // Get course information from CourseInfo component
    const courseInfo = JSON.parse(localStorage.getItem("courseInfo"));
    // Save course information to localStorage
    localStorage.setItem("enrolledCourse", JSON.stringify(courseInfo));
    setValue(value + 1);
  };

  const backTab = () => {
    setValue(value - 1);
  };

  return (
    <>
      <Navbar_profile />
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
                <Tab label="รายละเอียด" />
                <Tab label="คอร์สเรียน" />
                <Tab label="ผลการเรียน" />
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              <Grid
                container
                justifyContent="center"
                alignItems="center"
                spacing={2}
              >
                <Grid item>
                  <CourseInfo />
                </Grid>
                <Grid item>
                  <Button
                    onClick={nextTab}
                    variant="contained"
                    color="primary"
                    style={{
                      background:
                        "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
                      borderRadius: 20,
                      border: 0,
                      color: "white",
                      height: 48,
                      padding: "0 30px",
                      boxShadow: "0 3px 5px 2px rgba(33, 203, 243, .3)",
                    }}
                  >
                    สมัครเรียน
                  </Button>
                </Grid>
              </Grid>
            </CustomTabPanel>

            <CustomTabPanel value={value} index={1}>
              <CourseDetails />
              <Grid container justifyContent="center">
                <Grid item>
                  <Button
                    onClick={backTab}
                    variant="contained"
                    color="primary"
                    className=" text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    ย้อนกลับ
                  </Button>
                  <Link to="/main">
                    <Button
                      variant="contained"
                      color="primary"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      ไปหน้าหลัก
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </CustomTabPanel>
          </Container>
        </React.Fragment>
      </div>
      <Footer />
    </>
  );
};

export default Course_info_online;
