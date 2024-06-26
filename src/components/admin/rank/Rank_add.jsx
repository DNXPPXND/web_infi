import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { Button, Grid, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Rank_add() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    category_id: "",
    rank_name: "",
    rank_point: "",
    rank_pic: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    const newValue = files ? files[0] : value;
    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const urlapi = "http://localhost:3333/create/rank";
    const formDataToSend = new FormData();
    console.log(formData);
    formDataToSend.append("category_id", formData.category_id);
    formDataToSend.append("rank_name", formData.rank_name);
    formDataToSend.append("rank_point", formData.rank_point);
    formDataToSend.append("rank_pic", formData.rank_pic);

    axios
      .post(urlapi, formDataToSend)
      .then((resp) => {
        console.log(resp);
        if (
          resp.data.status === "error" &&
          resp.data.message === "ข้อมูลซ้ำกัน"
        ) {
          Swal.fire("ข้อมูลซ้ำกัน", "กรุณาตรวจสอบและลองใหม่อีกครั้ง", "error");
        } else {
          Swal.fire("เพิ่มข้อมูลสำเร็จ", "", "success").then(() => {
            navigate("/admin/rank");
          });
        }
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
              เพื่มข้อมูลระดับขั้น
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    label="หมวดหมู้"
                    type="text"
                    variant="outlined"
                    id="category_id"
                    name="category_id"
                    value={formData.category_id}
                    fullWidth
                    required
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="ระดับขั้น"
                    type="text"
                    variant="outlined"
                    id="rank_name"
                    name="rank_name"
                    value={formData.rank_name}
                    fullWidth
                    required
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="คะแนน"
                    type="number"
                    variant="outlined"
                    id="rank_point"
                    name="rank_point"
                    value={formData.rank_point}
                    fullWidth
                    required
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <input
                    type="file"
                    id="rank_pic"
                    name="rank_pic"
                    onChange={handleChange}
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
