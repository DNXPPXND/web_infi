const express = require("express");
const app = express();
const multer = require("multer");
const mysql = require("mysql2");
const fs = require("fs");

// กำหนดค่าสำหรับการอัปโหลดรูปภาพ
const upload = multer({ dest: "uploads/" });

// กำหนดการเชื่อมต่อฐานข้อมูล MySQL
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "image_upload_db",
});

db.connect((err) => {
  if (err) {
    console.error("เกิดข้อผิดพลาดในการเชื่อมต่อฐานข้อมูล: " + err.stack);
    return;
  }
  console.log("เชื่อมต่อกับฐานข้อมูล MySQL เรียบร้อย");
});

// API endpoint สำหรับการอัปโหลดรูปภาพ
app.post("/upload", upload.single("image"), (req, res) => {
  const { originalname, path } = req.file;
  const imageData = fs.readFileSync(path);
  const sql = "INSERT INTO images (name, image_data) VALUES (?, ?)";
  db.query(sql, [originalname, imageData], (err, result) => {
    if (err) {
      console.error(
        "เกิดข้อผิดพลาดในการเพิ่มข้อมูลรูปภาพในฐานข้อมูล: " + err.message
      );
      return res.status(500).send("ไม่สามารถอัปโหลดรูปภาพได้");
    }
    console.log("รูปภาพถูกอัปโหลดเรียบร้อย");
    fs.unlinkSync(path); // ลบไฟล์รูปภาพจากโฟลเดอร์ uploads
    res.send("รูปภาพถูกอัปโหลดเรียบร้อย");
  });
});

// API endpoint สำหรับการดึงข้อมูลรูปภาพ
app.get("/images", (req, res) => {
  const sql = "SELECT id, name FROM images";
  db.query(sql, (err, results) => {
    if (err) {
      console.error("เกิดข้อผิดพลาดในการดึงข้อมูลรูปภาพ: " + err.message);
      return res.status(500).send("ไม่สามารถดึงข้อมูลรูปภาพได้");
    }
    res.json(results);
  });
});

// เริ่มต้นเซิร์ฟเวอร์ API
app.listen(3333, function () {
  console.log("CORS-enabled web server listening on port 3333");
});
