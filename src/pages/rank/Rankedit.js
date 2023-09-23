import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { Button, Grid, TextField, Typography } from "@mui/material";
import Navbar_admin from "../../components/navbar/Navbar_admin";
import Nav_admin from "../../components/admin/Nav_admin";
import Footer_page from "../../components/footer/Footer_page";

export default function Rankedit() {
  const handleSubmit = (event) => {};

  const [Rank, setRank] = useState("");
  const [Point, setPoint] = useState("");

  return (
    <>
      <Navbar_admin />
      <Nav_admin />
      <div class="p-4 sm:ml-64">
        <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <div class="grid mb-4">
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
                <from onSubmit={handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        label="ระดับขั้น"
                        variant="outlined"
                        fullWidth
                        required
                        onChange={(e) => setRank(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        label="คะแนน"
                        variant="outlined"
                        fullWidth
                        required
                        onChange={(e) => setPoint(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <label
                        className="block mb-2 text-sm font-medium text-gray-900 dark:"
                        htmlFor="file_input"
                      >
                        อัปโหลดภาพระดับขั้น
                      </label>
                      <input
                        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
                        id="file_input"
                        type="file"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button variant="contained" fullWidth>
                        แก้ไข
                      </Button>
                    </Grid>
                  </Grid>
                </from>
              </Container>
            </React.Fragment>
          </div>
        </div>
      </div>

      <Footer_page />
    </>
  );
}
