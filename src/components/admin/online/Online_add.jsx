import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { Button, Grid, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Online_add() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    onsite_name: "",
    onsite_details: " ",
    category_id: " ",
    onsite_pic: null,
    teacher_id: " ",
    onsite_video: " ",
    onsite_status: " ",
    lesson_name1: " ",
    lesson_cilp1: " ",
    lesson_name2: " ",
    lesson_cilp2: " ",
    lesson_name3: " ",
    lesson_cilp3: " ",
    lesson_name4: " ",
    lesson_cilp4: " ",
    lesson_name5: " ",
    lesson_cilp5: " ",
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
    const urlapi = "http://localhost:3333/create/course/online";
    const formDataToSend = new FormData();
    console.log(formData);
    formDataToSend.append("onsite_name", formData.onsite_name);
    formDataToSend.append("onsite_details", formData.onsite_details);
    formDataToSend.append("category_id", formData.category_id);
    formDataToSend.append("onsite_pic", formData.onsite_pic);
    formDataToSend.append("teacher_id", formData.teacher_id);
    formDataToSend.append("onsite_video", formData.onsite_video);
    formDataToSend.append("onsite_status", formData.onsite_status);
    formDataToSend.append("lesson_name1", formData.lesson_name1);
    formDataToSend.append("lesson_cilp1", formData.lesson_cilp1);
    formDataToSend.append("lesson_name2", formData.lesson_name2);
    formDataToSend.append("lesson_cilp2", formData.lesson_cilp2);
    formDataToSend.append("lesson_name3", formData.lesson_name3);
    formDataToSend.append("lesson_cilp3", formData.lesson_cilp3);
    formDataToSend.append("lesson_name4", formData.lesson_name4);
    formDataToSend.append("lesson_cilp4", formData.lesson_cilp4);
    formDataToSend.append("lesson_name5", formData.lesson_name5);
    formDataToSend.append("lesson_cilp5", formData.lesson_cilp5);

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
            navigate("/admin/online");
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
                    label="ชื่อคอร์สเรียน"
                    type="text"
                    variant="outlined"
                    id="onsite_name"
                    name="onsite_name"
                    value={formData.onsite_name}
                    fullWidth
                    required
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="รายละเอียดคอร์สเรียน"
                    type="text"
                    variant="outlined"
                    id="onsite_details"
                    name="onsite_details"
                    value={formData.onsite_details}
                    fullWidth
                    required
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="หมวดหมู่"
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
                  <input
                    type="file"
                    id="onsite_pic"
                    name="onsite_pic"
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="รหัสอาจารย์"
                    type="text"
                    variant="outlined"
                    id="teacher_id"
                    name="teacher_id"
                    value={formData.teacher_id}
                    fullWidth
                    required
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="วิดีโอแนะนำ"
                    type="text"
                    variant="outlined"
                    id="onsite_video"
                    name="onsite_video"
                    value={formData.onsite_video}
                    fullWidth
                    required
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="สถานะ"
                    type="text"
                    variant="outlined"
                    id="onsite_status"
                    name="onsite_status"
                    value={formData.onsite_status}
                    fullWidth
                    required
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="บทเรียนที่ 1"
                    type="text"
                    variant="outlined"
                    id="lesson_name1"
                    name="lesson_name1"
                    value={formData.lesson_name1}
                    fullWidth
                    required
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="วิดีโอบทเรียนที่ 1"
                    type="text"
                    variant="outlined"
                    id="lesson_cilp1"
                    name="lesson_cilp1"
                    value={formData.lesson_cilp1}
                    fullWidth
                    required
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="บทเรียนที่ 2"
                    type="text"
                    variant="outlined"
                    id="lesson_name2"
                    name="lesson_name2"
                    value={formData.lesson_name2}
                    fullWidth
                    required
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="วิดีโอบทเรียนที่ 2"
                    type="text"
                    variant="outlined"
                    id="lesson_cilp2"
                    name="lesson_cilp2"
                    value={formData.lesson_cilp2}
                    fullWidth
                    required
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="บทเรียนที่ 3"
                    type="text"
                    variant="outlined"
                    id="lesson_name3"
                    name="lesson_name3"
                    value={formData.lesson_name3}
                    fullWidth
                    required
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="วิดีโอบทเรียนที่ 3"
                    type="text"
                    variant="outlined"
                    id="lesson_cilp3"
                    name="lesson_cilp3"
                    value={formData.lesson_cilp3}
                    fullWidth
                    required
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="บทเรียนที่ 4"
                    type="text"
                    variant="outlined"
                    id="lesson_name4"
                    name="lesson_name4"
                    value={formData.lesson_name4}
                    fullWidth
                    required
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="วิดีโอบทเรียนที่ 4"
                    type="text"
                    variant="outlined"
                    id="lesson_cilp4"
                    name="lesson_cilp4"
                    value={formData.lesson_cilp4}
                    fullWidth
                    required
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="บทเรียนที่ 5"
                    type="text"
                    variant="outlined"
                    id="lesson_name5"
                    name="lesson_name5"
                    value={formData.lesson_name5}
                    fullWidth
                    required
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="วิดีโอบทเรียนที่ 5"
                    type="text"
                    variant="outlined"
                    id="lesson_cilp5"
                    name="lesson_cilp5"
                    value={formData.lesson_cilp5}
                    fullWidth
                    required
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
