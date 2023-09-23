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

export default function Rank() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3333/admin-teacher/view")
      .then((res) => res.json())
      .then((result) => {
        setItems(result);
      });
  }, []);
  const handleDelete = (teacher_id) => {
    const confirm = window.confirm("คุณต้องการจะลบบัญขีนี้หรอไม่");
    if (confirm) {
      axios
        .delete("http://localhost:3333/admin-teacher/delete/" + teacher_id)
        .then((res) => {
          window.location.reload();
        })
        .catch((err) => console.log(err));
    }
  };
  const handleUpdate = (teacher_id) => {
    window.location = `/view/update/${teacher_id}`;
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
                        ตารางลำดับคะแนน
                      </Typography>
                    </Box>
                    <Box>
                      <Link href="/view/add-teacher">
                        <Button variant="contained">เพิ่ม</Button>
                      </Link>
                    </Box>
                  </Box>
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell>ลำดับ</TableCell>
                          <TableCell align="right">ประเภท</TableCell>
                          <TableCell align="right">ระดับขั้น</TableCell>
                          <TableCell align="right">ระดับขั้น</TableCell>
                          <TableCell align="right">ระดับขั้น</TableCell>
                          <TableCell align="right">ระดับขั้น</TableCell>
                          <TableCell align="right">ระดับขั้น</TableCell>
                          <TableCell align="right">ตัวเลือก</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {items.map((row, index) => (
                          <TableRow
                            key={row.teacher_id}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                          >
                            <TableCell
                              style={{ fontSize: "16px" }}
                              component="th"
                              scope="row"
                            >
                              {index + 1}
                            </TableCell>
                            <TableCell align="right">
                              {row.teacher_mobile}
                            </TableCell>
                            <TableCell align="right">
                              {row.teacher_company}
                            </TableCell>
                            <TableCell align="right">
                              {row.teacher_fname}
                            </TableCell>
                            <TableCell align="right">
                              {row.teacher_lname}
                            </TableCell>
                            <TableCell align="right">
                              {row.teacher_email}
                            </TableCell>
                            <TableCell align="right">
                              <ButtonGroup
                                variant="outlined"
                                aria-label="outlined button group"
                              >
                                <Link>
                                  <Button
                                    variant="contained"
                                    onClick={() => handleUpdate(row.teacher_id)}
                                  >
                                    แก้ไข
                                  </Button>
                                </Link>
                                <Button
                                  onClick={() => handleDelete(row.teacher_id)}
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
