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
import axios from "axios";
import Swal from "sweetalert2";

function Category_view() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3333/admin-category/view")
      .then((res) => res.json())
      .then((result) => {
        setItems(result);
      });
  }, []);

  const handleDelete = (category_id) => {
    Swal.fire({
      title: "คุณต้องการจะลบหรือไม่?",
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
          .delete(`http://localhost:3333/admin-category/delete/${category_id}`)
          .then((res) => {
            Swal.fire("ลบสำเร็จ", "ได้ถูกลบแล้ว", "success").then(() => {
              window.location.reload();
            });
          })
          .catch((err) => {
            console.log(err);
            Swal.fire("เกิดข้อผิดพลาด", "ไม่สามารถลบได้", "error");
          });
      }
    });
  };

  const handleUpdate = (category_id) => {
    window.location = `/admin/update/category/${category_id}`;
  };

  return (
    <>
      <div>
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
                  <Link href="/admin/add-category">
                    <Button variant="contained">เพิ่ม</Button>
                  </Link>
                </Box>
              </Box>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 300 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>ลำดับ</TableCell>
                      <TableCell align="center">ประเภท</TableCell>
                      <TableCell align="center">ไอดี</TableCell>
                      <TableCell align="center">ตัวเลือก</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {items.map((row, index) => (
                      <TableRow
                        key={row.category_id}
                        sx={{
                          "&:last-child td, &:last-child th": {
                            border: 0,
                          },
                        }}
                      >
                        <TableCell style={{ fontSize: "16px" }}>
                          {index + 1}
                        </TableCell>
                        <TableCell align="left">{row.category_name}</TableCell>
                        <TableCell align="left">{row.category_id}</TableCell>

                        <TableCell align="center">
                          <ButtonGroup
                            variant="outlined"
                            aria-label="outlined button group"
                          >
                            <Link>
                              <Button
                                variant="contained"
                                onClick={() => handleUpdate(row.category_id)}
                              >
                                แก้ไข
                              </Button>
                            </Link>
                            <Button
                              onClick={() => handleDelete(row.category_id)}
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
    </>
  );
}

export default Category_view;
