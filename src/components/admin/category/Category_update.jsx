import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { Button, Grid, TextField, Typography } from "@mui/material";
import axios from "axios";
import Swal from "sweetalert2";

export default function Category_update() {
  const { category_id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:3333/admin-category/view/${category_id}`)
      .then((response) => {
        setCategory_name(response.data.category.category_name);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [category_id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    var data = {
      category_name: category_name,
    };

    axios
      .put(`http://localhost:3333/admin-category/update/${category_id}`, data)
      .then((resp) => {
        Swal.fire("แก้ไขข้อมูลสำเร็จ", "", "success").then(() => {
          navigate("/category-view");
        });
        console.log(resp);
      })
      .catch((e) => {
        console.log(e);
        Swal.fire("เกิดข้อผิดพลาดในการแก้ไขข้อมูล", "", "error");
      });
  };

  const [category_name, setCategory_name] = useState("");

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
                  แก้ไขประเภทคอร์สเรียน
                </Typography>
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        id="category_name"
                        name="category_name"
                        label="คอร์สเรียน"
                        variant="outlined"
                        value={category_name}
                        onChange={(e) => setCategory_name(e.target.value)}
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
