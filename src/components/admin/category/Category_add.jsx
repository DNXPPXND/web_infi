import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { Button, Grid, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Category_add() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    category_name: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const urlapi = "http://localhost:3333/admin-category";
    const param = {
      category_name: formData.category_name,
    };
    axios
      .post(urlapi, param)
      .then((resp) => {
        Swal.fire("เพิ่มข้อมูลสำเร็จ", "", "success").then(() => {
          navigate("/category-view");
        });
        console.log(resp);
      })
      .catch((e) => {
        console.log(e);
        Swal.fire("เกิดข้อผิดพลาดในการเพิ่มข้อมูล", "", "error");
      });
  };

  return (
    <>
          <div>
            <React.Fragment>
              <CssBaseline />
              <Container maxWidth="sm" sx={{ p: 2 }}>
                <Typography
                  variant="h6"
                  gutterBottom
                  component="div"
                  sx={{ flexGrow: 1 }}
                >
                  สร้างประเภทคอร์สเรียน
                </Typography>
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        id="category_name"
                        name="category_name"
                        label="ชื่อประเภทคอร์สเรียน"
                        variant="outlined"
                        value={formData.category_name}
                        onChange={handleChange}
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button type="submit" variant="contained" fullWidth>
                        เพิ่ม
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Container>
            </React.Fragment>
          </div>
    </>
  );
}
