const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const bcrypt = require("bcrypt");
const saltRounds = 10;
var jwt = require("jsonwebtoken");
const secret = "infi";
const jsonParser = bodyParser.json();
const multer = require("multer");
const path = require("path");

const app = express();
app.use(cors()); 

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "infi-learn",
});

//register  ********************************************************************************
app.post("/api/register", jsonParser, async (req, res) => {
  try {
    const requiredFields = [
      "user_fname",
      "user_lname",
      "user_email",
      "user_password",
      "category_id",
    ];
    for (const field of requiredFields) {
      if (!req.body[field]) {
        return res.status(400).json({
          status: "error",
          message: `Missing ${field} in request body`,
        });
      }
    }
    const hash = await bcrypt.hash(req.body.user_password, saltRounds);
    const user_status = 0;
    const query = `
      INSERT INTO user (user_fname, user_lname, user_email, user_password, user_status ,category_id)
      VALUES (?, ?, ?, ?, ?, ?)
    `;
    const values = [
      req.body.user_fname,
      req.body.user_lname,
      req.body.user_email,
      hash,
      user_status,
      req.body.category_id,
    ];

    connection.execute(query, values, (err, results, fields) => {
      if (err) {
        return res.status(500).json({
          status: "error",
          message: "Failed to register user",
          error: err,
        });
      }
      res.status(201).json({ status: "ok", data: req.body });
    });
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
});

// login ********************************************************************************
app.post("/api/login", jsonParser, function (req, res, next) {
  connection.execute(
    "SELECT * FROM user WHERE user_email=?",
    [req.body.user_email],
    function (err, users) {
      if (err) {
        res.json({ status: "error", message: err });
        return;
      }
      if (users.length == 0) {
        res.status(401).json({ status: "error", message: "No user found" });
        return;
      }
      bcrypt.compare(
        req.body.user_password,
        users[0].user_password,
        function (err, isLogin) {
          if (isLogin) {
            var userId = users[0].user_id;
            var status = users[0].user_status;
            var message = status === 1 ? "admin" : "users";
            res.json({ status: "ok", message, id: userId });
          } else {
            res.status(401).json({ status: "error", message: "Login failed" });
          }
        }
      );
    }
  );
});




/********************************************************************************************/
connection.connect((err) => {
  if (err) {
    console.error("เกิดข้อผิดพลาดในการเชื่อมต่อ: " + err.stack);
    return;
  }
  console.log("เชื่อมต่อกับฐานข้อมูล MySQL สำเร็จ");
});

app.on("close", () => {
  console.log("ปิดการเชื่อมต่อกับฐานข้อมูล MySQL");
  connection.end();
});

const PORT = 3333;

app.listen(PORT, () => {
  console.log(`เซิร์ฟเวอร์ทำงานบนพอร์ต ${PORT}`);
});

// จัดการการปิดเซิร์ฟเวอร์โดยสง่างาม
process.on("SIGINT", () => {
  console.log("ได้รับ SIGINT. กำลังปิดทำงานอย่างสง่างาม...");
  app.close(() => {
    process.exit(0);
  });
});
/********************************************************************************************/
