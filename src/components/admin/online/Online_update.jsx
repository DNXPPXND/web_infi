import React, { useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { Button, Grid, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

export default function Online_update() {
  const { onsite_id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:3333/admin-onsite/view/${onsite_id}`)
      .then((response) => {
        setOnsite_name(response.data.onsite.onsite_name);
        setOnsite_details(response.data.onsite.onsite_details);
        setCategory_id(response.data.onsite.category_id);
        setOnsite_pic(response.data.onsite.onsite_pic);
        setTeacher_id(response.data.onsite.teacher_id);
        setOnsite_video(response.data.onsite.onsite_video);
        setOnsite_status(response.data.onsite.onsite_status);
        setLesson_name1(response.data.onsite.lesson_name1);
        setLesson_cilp1(response.data.onsite.lesson_cilp1);
        setLesson_name2(response.data.onsite.lesson_name2);
        setLesson_cilp2(response.data.onsite.lesson_cilp2);
        setLesson_name3(response.data.onsite.lesson_name3);
        setLesson_cilp3(response.data.onsite.lesson_cilp3);
        setLesson_name4(response.data.onsite.lesson_name4);
        setLesson_cilp4(response.data.onsite.lesson_cilp4);
        setLesson_name5(response.data.onsite.lesson_name5);
        setLesson_cilp5(response.data.onsite.lesson_cilp5);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [onsite_id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    var data = {
      onsite_name: onsite_name,
      onsite_details: onsite_details,
      category_id: category_id,
      onsite_pic: onsite_pic,
      teacher_id: teacher_id,
      onsite_video: onsite_video,
      onsite_status: onsite_status,
      lesson_name1: lesson_name1,
      lesson_cilp1: lesson_cilp1,
      lesson_name2: lesson_name2,
      lesson_cilp2: lesson_cilp2,
      lesson_name3: lesson_name3,
      lesson_cilp3: lesson_cilp3,
      lesson_name4: lesson_name4,
      lesson_cilp4: lesson_cilp4,
      lesson_name5: lesson_name5,
      lesson_cilp5: lesson_cilp5,
    };

    axios
      .put(`http://localhost:3333/admin-onsite/update/${onsite_id}`, data)
      .then((resp) => {
        Swal.fire("แก้ไขข้อมูลสำเร็จ", "", "success").then(() => {
          navigate("/admin/online");
        });
        console.log(resp);
      })
      .catch((e) => {
        console.log(e);
        Swal.fire("เกิดข้อผิดพลาดในการแก้ไขข้อมูล", "", "error");
      });
  };

  const [onsite_name, setOnsite_name] = useState("");
  const [onsite_details, setOnsite_details] = useState("");
  const [category_id, setCategory_id] = useState("");
  const [onsite_pic, setOnsite_pic] = useState("");
  const [teacher_id, setTeacher_id] = useState("");
  const [onsite_video, setOnsite_video] = useState("");
  const [onsite_status, setOnsite_status] = useState("");
  const [lesson_name1, setLesson_name1] = useState("");
  const [lesson_cilp1, setLesson_cilp1] = useState("");
  const [lesson_name2, setLesson_name2] = useState("");
  const [lesson_cilp2, setLesson_cilp2] = useState("");
  const [lesson_name3, setLesson_name3] = useState("");
  const [lesson_cilp3, setLesson_cilp3] = useState("");
  const [lesson_name4, setLesson_name4] = useState("");
  const [lesson_cilp4, setLesson_cilp4] = useState("");
  const [lesson_name5, setLesson_name5] = useState("");
  const [lesson_cilp5, setLesson_cilp5] = useState("");

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
                    value={onsite_name}
                    fullWidth
                    required
                    onChange={(e) => setOnsite_name(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="รายละเอียดคอร์สเรียน"
                    type="text"
                    variant="outlined"
                    id="onsite_details"
                    name="onsite_details"
                    value={onsite_details}
                    fullWidth
                    required
                    onChange={(e) => setOnsite_details(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="หมวดหมู่"
                    type="text"
                    variant="outlined"
                    id="category_id"
                    name="category_id"
                    value={category_id}
                    fullWidth
                    required
                    onChange={(e) => setCategory_id(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <input
                    type="text"
                    id="onsite_pic"
                    name="onsite_pic"
                    value={onsite_pic}
                    onChange={(e) => setOnsite_name(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="รหัสอาจารย์"
                    type="text"
                    variant="outlined"
                    id="teacher_id"
                    name="teacher_id"
                    value={teacher_id}
                    fullWidth
                    required
                    onChange={(e) => setTeacher_id(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="วิดีโอแนะนำ"
                    type="text"
                    variant="outlined"
                    id="onsite_video"
                    name="onsite_video"
                    value={onsite_video}
                    fullWidth
                    required
                    onChange={(e) => setOnsite_video(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="สถานะ"
                    type="text"
                    variant="outlined"
                    id="onsite_status"
                    name="onsite_status"
                    value={onsite_status}
                    fullWidth
                    required
                    onChange={(e) => setOnsite_status(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="บทเรียนที่ 1"
                    type="text"
                    variant="outlined"
                    id="lesson_name1" 
                    name="lesson_name1" 
                    value={lesson_name1}
                    fullWidth
                    required
                    onChange={(e) => setLesson_name1(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="วิดีโอบทเรียนที่ 1"
                    type="text"
                    variant="outlined"
                    id="lesson_cilp1"
                    name="lesson_cilp1"
                    value={lesson_cilp1}
                    fullWidth
                    required
                    onChange={(e) => setLesson_cilp1(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="บทเรียนที่ 2"
                    type="text"
                    variant="outlined"
                    id="lesson_name2"
                    name="lesson_name2"
                    value={lesson_name2}
                    fullWidth
                    required
                    onChange={(e) => setLesson_name2(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="วิดีโอบทเรียนที่ 2"
                    type="text"
                    variant="outlined"
                    id="lesson_cilp2"
                    name="lesson_cilp2"
                    value={lesson_cilp2}
                    fullWidth
                    required
                    onChange={(e) => setLesson_cilp2(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="บทเรียนที่ 3"
                    type="text"
                    variant="outlined"
                    id="lesson_name3"
                    name="lesson_name3"
                    value={lesson_name3}
                    fullWidth
                    required
                    onChange={(e) => setLesson_name3(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="วิดีโอบทเรียนที่ 3"
                    type="text"
                    variant="outlined"
                    id="lesson_cilp3"
                    name="lesson_cilp3"
                    value={lesson_cilp3}
                    fullWidth
                    required
                    onChange={(e) => setLesson_cilp3(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="บทเรียนที่ 4"
                    type="text"
                    variant="outlined"
                    id="lesson_name4"
                    name="lesson_name4"
                    value={lesson_name4}
                    fullWidth
                    required
                    onChange={(e) => setLesson_name4(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="วิดีโอบทเรียนที่ 4"
                    type="text"
                    variant="outlined"
                    id="lesson_cilp4"
                    name="lesson_cilp4"
                    value={lesson_cilp4}
                    fullWidth
                    required
                    onChange={(e) => setLesson_cilp4(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="บทเรียนที่ 5"
                    type="text"
                    variant="outlined"
                    id="lesson_name5"
                    name="lesson_name5"
                    value={lesson_name5}
                    fullWidth
                    required
                    onChange={(e) => setLesson_name5(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="วิดีโอบทเรียนที่ 5"
                    type="text"
                    variant="outlined"
                    id="lesson_cilp5"
                    name="lesson_cilp5"
                    value={lesson_cilp5}
                    fullWidth
                    required
                    onChange={(e) => setLesson_cilp5(e.target.value)}
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
