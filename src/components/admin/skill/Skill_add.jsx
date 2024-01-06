import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { Button, Grid, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Skill_add() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    skill_name: "",
    skill_pic: "",
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
    const urlapi = "http://localhost:3333/admin-skill";
    const param = {
      skill_name: formData.skill_name,
      skill_pic: formData.skill_pic,
    };
    axios
      .post(urlapi, param)
      .then((resp) => {
        Swal.fire("เพิ่มข้อมูลสำเร็จ", "", "success").then(() => {
          navigate("/skill-view");
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
              เพื่มทักษะ
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    id="skill_name"
                    name="skill_name"
                    label="ชื่อทักษะ"
                    variant="outlined"
                    value={formData.skill_name}
                    onChange={handleChange}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="skill_pic"
                    name="skill_pic"
                    label="(url) รูปภาพ"
                    variant="outlined"
                    value={formData.skill_pic}
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
