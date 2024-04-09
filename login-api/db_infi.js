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

const app = express();
app.use(cors());
app.use(express.static("Public"));

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "db_infi",
});

//register  ********************************************************************************
app.post("/api/register", jsonParser, async (req, res) => {
  try {
    const requiredFields = [
      "email",
      "password",
      "fullname",
      "lastname",
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
    const saltRounds = 10;
    const hash = await bcrypt.hash(req.body.password, saltRounds);
    const status = 0;
    const query = `
      INSERT INTO user (email, password, fullname, lastname ,category_id, status)
      VALUES (?, ?, ?, ?, ?, ?)
    `;
    const values = [
      req.body.email,
      hash,
      req.body.fullname,
      req.body.lastname,
      req.body.category_id,
      status,
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

const storage = (folder) =>
  multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, `Public/${folder}`);
    },
    filename: function (req, file, cb) {
      cb(null, `${Date.now()}_${file.originalname}`);
    },
  });

// สร้าง multer instances สำหรับการอัปโหลดวิดีโอและรูปภาพ
const upload_vdo = multer({ storage: storage("Videos") });
const upload_pic = multer({ storage: storage("Images") });

// สร้าง onsite ************************************************
// สร้าง onsite ************************************************
app.post(
  "/create/onsite",
  upload_pic.single("file"), // ใช้ middleware สำหรับการอัปโหลดรูปภาพ
  upload_vdo.single("file"), // ใช้ middleware สำหรับการอัปโหลดวิดีโอ
  (req, res) => {
    const sql =
      "INSERT INTO `course_onsite` (`onsite_name`, `onsite_details`, `onsite_objectivity`, `onsite_time`, `onsite_location`, `onsite_form`, `onsite_pic`, `onsite_video`, `teacher_id`, `category_id`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

    const values = [
      req.body.onsite_name,
      req.body.onsite_details,
      req.body.onsite_objectivity,
      req.body.onsite_time,
      req.body.onsite_location,
      req.body.onsite_form,
      req.file ? req.file.filename : null, // ใช้ req.file แทน req.files
      req.file ? req.file.filename : null, // ใช้ req.file แทน req.files
      req.body.teacher_id,
      req.body.category_id,
    ];

    connection.query(sql, values, (err, result) => {
      if (err) {
        console.error("Error executing query:", err);
        return res
          .status(500)
          .json({ error: "Error executing query", details: err.message });
      }

      // Check if any rows were affected by the query (optional, depending on your use case)
      if (result.affectedRows === 0) {
        return res.status(400).json({
          error: "No rows were inserted",
          details: "Ensure the provided data is valid.",
        });
      }

      return res.json({ status: "Success" });
    });
  }
);

// สร้าง rank ************************************************
app.post("/create/rank", upload_pic.single("rank_pic"), (req, res) => {
  const sql =
    "INSERT INTO `rank` (`category_id`, `rank_name`, `rank_point`, `rank_pic`) VALUES (?, ?, ?, ?)";

  const values = [
    req.body.category_id,
    req.body.rank_name,
    req.body.rank_point,
    req.file.filename,
   
  ];  

  connection.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error executing query:", err);
      return res
        .status(500)
        .json({ error: "Error executing query", details: err.message });
    }

    // Check if any rows were affected by the query (optional, depending on your use case)
    if (result.affectedRows === 0) {
      return res.status(400).json({
        error: "No rows were inserted",
        details: "Ensure the provided data is valid.",
      });
    }
  
    return res.json({ status: "Success" });
  });
}); 

app.get("/rank/view", (req, res) => {
  const query =
    "SELECT * FROM category INNER JOIN rank ON category.category_id = rank.category_id";

  connection.query(query, (err, results) => {
    if (err) {
      console.error("Error querying database:", err);
      res.status(500).send("Error fetching data from database");
      return;
    }
    res.json(results);
  });
});

// สร้าง teacher ************************************************
app.post("/create/teacher", upload_pic.single("file"), (req, res) => {
  const sql =
    "INSERT INTO `teacher` (`teacher_fullname`, `teacher_lastname`, `teacher_description`, `teacher_company`, `teacher_position`, `teacher_email`, `teacher_mobile`, `teacher_line`, `teacher_pic`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";

  const values = [
    req.body.teacher_fullname,
    req.body.teacher_lastname,
    req.body.teacher_description,
    req.body.teacher_company,
    req.body.teacher_position,
    req.body.teacher_email,
    req.body.teacher_mobile,
    req.body.teacher_line,
    req.file ? req.file.filename : null,
  ];

  connection.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error executing query:", err);
      return res
        .status(500)
        .json({ error: "Error executing query", details: err.message });
    }

    if (result.affectedRows === 0) {
      return res.status(400).json({
        error: "No rows were inserted",
        details: "Ensure the provided data is valid.",
      });
    }

    return res.json({ status: "Success" });
  });
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

const PORT = 3030;

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
