import React, { useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { Button, Grid, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

export default function Rank_update() {
  const { rank_id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:3333/admin-rank/view/${rank_id}`)
      .then((response) => {
        setRank_name(response.data.rank.rank_name);
        setRank_point(response.data.rank.rank_point);
        setRank_pic(response.data.rank.rank_pic);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [rank_id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    var data = {
      rank_name: rank_name,
      rank_point: rank_point,
      rank_pic: rank_pic,
    };

    axios
      .put(`http://localhost:3333/admin-rank/update/${rank_id}`, data)
      .then((resp) => {
        Swal.fire("แก้ไขข้อมูลสำเร็จ", "", "success").then(() => {
          navigate("/rank-view");
        });
        console.log(resp);
      })
      .catch((e) => {
        console.log(e);
        Swal.fire("เกิดข้อผิดพลาดในการแก้ไขข้อมูล", "", "error");
      });
  };

  const [rank_name, setRank_name] = useState("");
  const [rank_point, setRank_point] = useState("");
  const [rank_pic, setRank_pic] = useState("");

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
              แก้ไขข้อมูลระดับขั้น
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    label="ระดับขั้น"
                    type="text"
                    variant="outlined"
                    id="rank_name"
                    name="rank_name"
                    value={rank_name}
                    fullWidth
                    required
                    onChange={(e) => setRank_name(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="คะแนน"
                    type="int"
                    variant="outlined"
                    id="rank_point"
                    name="rank_point"
                    value={rank_point}
                    fullWidth
                    required
                    onChange={(e) => setRank_point(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="อัปโหลดภาพระดับขั้น"
                    type="int"
                    variant="outlined"
                    id="rank_pic"
                    name="rank_pic"
                    value={rank_pic}
                    fullWidth
                    required
                    onChange={(e) => setRank_point(e.target.value)}
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
