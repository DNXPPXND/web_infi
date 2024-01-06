import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { Button, Grid, TextField, Typography } from "@mui/material";
import axios from "axios";
import Swal from "sweetalert2";

export default function Skill_update() {
  const { skill_id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:3333/admin-skill/view/${skill_id}`)
      .then((response) => {
        setSkill_name(response.data.skill.skill_name);
        setSkill_pic(response.data.skill.skill_pic);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [skill_id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    var data = {
      skill_name: skill_name,
      skill_pic: skill_pic,
    };

    axios
      .put(`http://localhost:3333/admin-skill/update/${skill_id}`, data)
      .then((resp) => {
        Swal.fire("แก้ไขข้อมูลสำเร็จ", "", "success").then(() => {
          navigate("/skill-view");
        });
        console.log(resp);
      })
      .catch((e) => {
        console.log(e);
        Swal.fire("เกิดข้อผิดพลาดในการแก้ไขข้อมูล", "", "error");
      });
  };

  const [skill_name, setSkill_name] = useState("");
  const [skill_pic, setSkill_pic] = useState("");

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
              แก้ไขทักษะ
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    id="skill_name"
                    name="skill_name"
                    label="ชื่อประเภทคอร์สเรียน"
                    variant="outlined"
                    value={skill_name}
                    onChange={(e) => setSkill_name(e.target.value)}
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
                    value={skill_pic}
                    onChange={(e) => setSkill_pic(e.target.value)}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" fullWidth>
                    แก้ไข
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
