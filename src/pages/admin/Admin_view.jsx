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
import Swal from "sweetalert2";


export default function Admin_view() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3333/admin-users/view/admin")
      .then((res) => res.json())
      .then((result) => {
        setItems(result);
      });
  }, []);
const handleDelete = (id) => {
  Swal.fire({
    title: "คุณต้องการจะลบบัญชีนี้หรือไม่?",
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
        .delete(`http://localhost:3333/admin-users/delete/${id}`)
        .then((res) => {
          Swal.fire("ลบสำเร็จ", "บัญชีได้ถูกลบแล้ว", "success").then(() => {
            window.location.reload();
          });
        })
        .catch((err) => {
          console.log(err);
          Swal.fire("เกิดข้อผิดพลาด", "ไม่สามารถลบบัญชีได้", "error");
        });
    }
  });
};

  const handleUpdate = (id) => {
    window.location = `/view/update/${id}`;
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
                        อาจารย์
                      </Typography>
                    </Box>
                  </Box>
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell>ลำดับ</TableCell>
                          <TableCell align="center">ชื่อ</TableCell>
                          <TableCell align="center">นามสกุล</TableCell>
                          <TableCell align="center">อีเมล</TableCell>
                          <TableCell align="center">ตัวเลือก</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {items.map((row, index) => (
                          <TableRow
                            key={row.id}
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
                            <TableCell align="left">
                              {row.fullname}
                            </TableCell>
                            <TableCell align="left">
                              {row.lastname}
                            </TableCell>
                            <TableCell align="left">
                              {row.email}
                            </TableCell>
                            <TableCell align="center">
                              <ButtonGroup
                                variant="outlined"
                                aria-label="outlined button group"
                              >
                                <Link>
                                  
                                </Link>
                                <Button
                                  onClick={() => handleDelete(row.id)}
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
