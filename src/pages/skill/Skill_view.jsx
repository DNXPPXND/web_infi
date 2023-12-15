import React, { useEffect, useState } from "react";
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
import Navbar_admin from "../../components/navbar/Navbar_admin";
import Nav_admin from "../../components/admin/Nav_admin";
import Footer_page from "../../components/footer/Footer_page";
import axios from "axios";
import Swal from "sweetalert2";


function Skill_view() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3333/admin-skill/view")
      .then((res) => res.json())
      .then((result) => {
        setItems(result);
      });
  }, []);

const handleDelete = (skill_id) => {
  Swal.fire({
    title: "คุณต้องการจะลบทักษะนี้หรือไม่?",
    text: "การกระทำนี้ไม่สามารถยกเลิกได้",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "ลบ",
    cancelButtonText: "ยกเลิก",
  }).then((result) => {
    if (result.isConfirmed) {
      axios
        .delete(`http://localhost:3333/admin-skill/delete/${skill_id}`)
        .then((res) => {
          Swal.fire("ลบสำเร็จ", "ทักษะได้ถูกลบแล้ว", "success").then(() => {
            window.location.reload();
          });
        })
        .catch((err) => {
          console.log(err);
          Swal.fire("เกิดข้อผิดพลาด", "ไม่สามารถลบทักษะได้", "error");
        });
    }
  });
};


  const handleUpdate = (skill_id) => {
    window.location = `/skill-view/update/${skill_id}`;
  };

  return (
    <>
      <Navbar_admin />
      <Nav_admin />
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <div className="grid mb-4">
            <React.Fragment>
              <CssBaseline />
              <Container maxWidth="lg" sx={{ p: 2 }}>
                <Paper sx={{ p: 2 }}>
                  <Box display="flex">
                    <Box sx={{ flexGrow: 1 }}>
                      <Typography variant="h6" gutterBottom component="div">
                        ตาราง
                      </Typography>
                    </Box>
                    <Box>
                      <Link href="/skill-view/add">
                        <Button variant="contained">เพิ่ม</Button>
                      </Link>
                    </Box>
                  </Box>
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell>ลำดับ</TableCell>
                          <TableCell align="center">ทักษะ</TableCell>
                          <TableCell align="center">รูปภาพ</TableCell>
                          <TableCell align="center">ตัวเลือก</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {items.map((row, index) => (
                          <TableRow
                            key={row.skill_id}
                            sx={{
                              "&:last-child td, &:last-child th": {
                                border: 0,
                              },
                            }}
                          >
                            <TableCell style={{ fontSize: "16px" }}>
                              {index + 1}
                            </TableCell>
                            <TableCell align="left">
                              {row.skill_name}
                            </TableCell>
                            <TableCell align="center">
                              <Box display="flex" justifyContent="center">
                                <img
                                  src={row.skill_pic}
                                  style={{ width: "100px", height: "100px" }}
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
                                    onClick={() => handleUpdate(row.skill_id)}
                                  >
                                    แก้ไข
                                  </Button>
                                </Link>
                                <Button
                                  onClick={() => handleDelete(row.skill_id)}
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

export default Skill_view;
