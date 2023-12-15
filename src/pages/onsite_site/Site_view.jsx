import React, { useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Link from "@mui/material/Link";
import ButtonGroup from "@mui/material/ButtonGroup";
import Navbar_pages from "../../components/navbar/Navbar_admin";
import Footer_page from "../../components/footer/Footer_page";
import axios from "axios";
import Nav_admin from "../../components/admin/Nav_admin";

export default function Onsite_view() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3333/admin-site/view")
      .then((res) => res.json())
      .then((result) => {
        if (Array.isArray(result)) {
          setItems(result);
        } else {
          console.error(result);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleDelete = (onsite_id) => {
    const confirm = window.confirm("คุณต้องการจะลบคอร์สเรียนนี้หรอไม่");
    if (confirm) {
      axios
        .delete("http://localhost:3333/admin-site/delete/" + onsite_id)
        .then((res) => {
          window.location.reload();
        })
        .catch((err) => console.log(err));
    }
  };
  const handleUpdate = (onsite_id) => {
    window.location = `/course-site-view/update/${onsite_id}`;
  };

  return (
    <>
      <Navbar_pages />
      <Nav_admin />
      <div class="p-4 sm:ml-64">
        <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <div class="grid mb-4">
            <React.Fragment>
              <CssBaseline />
              <Container maxWidth="lg" sx={{ p: 2 }}>
                <Paper sx={{ p: 2 }}>
                  <Box display="flex">
                    <Box sx={{ flexGrow: 1 }}>
                      <Typography variant="h6" gutterBottom component="div">
                        คอร์สเรียนออนไซต์
                      </Typography>
                    </Box>
                    <Box>
                      <Link href="/course-onsite-view/add">
                        <Button variant="contained">เพิ่ม</Button>
                      </Link>
                    </Box>
                  </Box>
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell>ลำดับ</TableCell>
                          <TableCell align="center">ชื่อคอร์สเรียน</TableCell>
                          <TableCell align="center">สถานที่เรียน</TableCell>
                          <TableCell align="center">เวลาเรียน</TableCell>
                          <TableCell align="center">ภาพปก</TableCell>
                          <TableCell align="center">ตัวเลือก</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {items &&
                          items.map((row, index) => (
                            <TableRow
                              key={row.site_id}
                              sx={{
                                "&:last-child td, &:last-child th": {
                                  border: 0,
                                },
                              }}
                            >
                              <TableCell
                                style={{ fontSize: "16px" }}
                                component="th"
                                scope="row"
                              >
                                {index + 1}
                              </TableCell>
                              <TableCell align="left">
                                {row.site_name}
                              </TableCell>
                              <TableCell align="center">
                                {row.site_location}
                              </TableCell>
                              <TableCell align="center">
                                {row.site_time}
                              </TableCell>
                              <TableCell align="center">
                                <Box display="flex" justifyContent="center">
                                  <img
                                    src={row.site_pic}
                                    alt={row.site_name}
                                    style={{ width: "150px", height: "150px" }}
                                  />
                                </Box>
                              </TableCell>

                              <TableCell align="center">
                                <ButtonGroup
                                  variant="outlined"
                                  aria-label="outlined button group"
                                >
                                  <Link>
                                    <Button
                                      variant="contained"
                                      onClick={() =>
                                        handleUpdate(row.site_id)
                                      }
                                    >
                                      แก้ไข
                                    </Button>
                                  </Link>
                                  <Button
                                    onClick={() => handleDelete(row.site_id)}
                                  >
                                    ลบ
                                  </Button>
                                </ButtonGroup>
                              </TableCell>
                            </TableRow>
                          ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Paper>
              </Container>
            </React.Fragment>
          </div>
        </div>
      </div>

      <Footer_page />
    </>
  );
}
