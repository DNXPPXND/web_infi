const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const app = express();
const bcrypt = require("bcrypt");
const saltRounds = 10;
var jwt = require("jsonwebtoken");
const secret = "infi";
const jsonParser = bodyParser.json();
const multer = require("multer");
const path = require("path");

app.use(cors());

const connection = mysql.createConnection({
  host: "localhost", // ใช้เฉพาะชื่อโฮส
  user: "root",
  database: "course-photo",
});

connection.connect((err) => {
  if (err) {
    console.error("เกิดข้อผิดพลาดในการเชื่อมต่อ: " + err.stack);
    return;
  }
  console.log("เชื่อมต่อกับฐานข้อมูล MySQL สำเร็จ");
});

/*********************************************************************************************************************************************************************************************************/
// สร้าง users ************************************************
app.post("/admin-users", jsonParser, function (req, res, next) {
  connection.execute(
    "INSERT INTO users (user_email, user_password, user_fname, user_lname, user_point) VALUES (?, ?, ?, ?, ?)",
    [
      req.body.user_email,
      req.body.user_password,
      req.body.user_fname,
      req.body.user_lname,
      req.body.user_point,
    ],
    function (err, results, fields) {
      if (err) {
        res.json({ status: "error", message: err });
        return;
      }
      res.json({ status: "ok", data: req.body });
    }
  );
});
// เรียกดู users  ************************************************
app.get("/admin-users/view", (req, res) => {
  const query =
    "SELECT * FROM category INNER JOIN users ON category.category_id = users.category_id";
  connection.query(query, (err, results) => {
    if (err) {
      console.error("Error querying database:", err);
      res.status(500).send("Error fetching data from database");
      return;
    }
    res.json(results);
  });
}); // เรียกดู admin  ************************************************
app.get("/admin-users/view/admin", (req, res) => {
  const query = "SELECT * FROM `users` WHERE status = 1;";
  connection.query(query, (err, results) => {
    if (err) {
      console.error("Error querying database:", err);
      res.status(500).send("Error fetching data from database");
      return;
    }
    res.json(results);
  }); 
});
// อัพเดท users  ************************************************
app.put("/admin-users/update", jsonParser, function (req, res, next) {
  connection.execute(
    "UPDATE users SET user_email = ? , user_password = ? ,  user_fname = ? ,  user_lname = ? ,  user_point = ?  WHERE 	user_id = ?",
    [
      req.body.user_email,
      req.body.user_password,
      req.body.user_fname,
      req.body.user_lname,
      req.body.user_point,
      req.body.user_id,
    ],
    function (err, results, fields) {
      if (err) {
        res.json({ status: "error", message: err });
        return;
      }
      res.json({ status: "ok", data: req.body });
    }
  );
});
// ลบ users  ************************************************
app.delete("/admin-users/delete", jsonParser, function (req, res, next) {
  connection.execute(
    "DELETE FROM users WHERE user_id = ? ",
    [req.body.user_id],
    function (err, results, fields) {
      if (err) {
        res.json({ status: "error", message: err });
        return;
      }
      res.json({ status: "ok", data: req.body });
    }
  );
});

/*********************************************************************************************************************************************************************************************************/

/*********************************************************************************************************************************************************************************************************/
// สร้าง teacher ************************************************
app.post("/admin-teacher", jsonParser, function (req, res, next) {
  connection.execute(
    "INSERT INTO teacher (teacher_fname, teacher_lname, teacher_pic, teacher_description, teacher_company, teacher_position, teacher_email, teacher_mobile, teacher_line) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [
      req.body.teacher_fname,
      req.body.teacher_lname,
      req.body.teacher_pic,
      req.body.teacher_description,
      req.body.teacher_company,
      req.body.teacher_position,
      req.body.teacher_email,
      req.body.teacher_mobile,
      req.body.teacher_line,
    ],
    function (err, results, fields) {
      if (err) {
        res.json({ status: "error", message: err });
        return;
      }
      res.json({ status: "ok", data: req.body });
    }
  );
});

//เรียกดู teacher ทั้งหมด  ************************************************
app.get("/admin-teacher/view", (req, res) => {
  const query = "SELECT * FROM teacher order by teacher_fname asc;";
  connection.query(query, (err, results) => {
    if (err) {
      console.error("Error querying database:", err);
      res.status(500).send("Error fetching data from database");
      return;
    }
    res.json(results);
  });
});

//เรียกดู teacher {id}  ************************************************
app.get("/admin-teacher/view/:teacher_id", (req, res) => {
  const teacher_id = req.params.teacher_id; // รับค่า teacher_id จาก path
  const query = "SELECT * FROM teacher WHERE teacher_id = ?;";
  connection.query(query, [teacher_id], (err, results) => {
    if (err) {
      console.error("Error querying database:", err);
      res.status(500).send("Error fetching data from database");
      return;
    }
    if (results.length === 0) {
      // หากไม่มีข้อมูลพบ
      res
        .status(404)
        .json({ status: "not found", message: "Teacher not found" });
    } else {
      // ส่ง JSON โดยไม่มี [] ครอบรอบข้อมูล
      res.json({ status: "ok", teacher: results[0] });
    }
  });
});

// อัพเดท teacher  ************************************************
app.put(
  "/admin-teacher/update/:teacher_id",
  jsonParser,
  function (req, res, next) {
    connection.execute(
      "UPDATE teacher SET teacher_fname = ?, teacher_lname = ?, teacher_pic = ?, teacher_description = ?, teacher_company = ?, teacher_position = ?, teacher_email = ?, teacher_mobile = ?, teacher_line = ?  WHERE teacher_id = ?",
      [
        req.body.teacher_fname,
        req.body.teacher_lname,
        req.body.teacher_pic,
        req.body.teacher_description,
        req.body.teacher_company,
        req.body.teacher_position,
        req.body.teacher_email,
        req.body.teacher_mobile,
        req.body.teacher_line,
        req.params.teacher_id,
      ],
      function (err, results, fields) {
        if (err) {
          res.json({ status: "error", message: err });
          return;
        }
        res.json({ status: "ok", data: req.body });
      }
    );
  }
);

// ลบ teacher ************************************************
app.delete(
  "/admin-teacher/delete/:teacher_id",
  jsonParser,
  function (req, res, next) {
    connection.execute(
      "DELETE FROM teacher WHERE teacher_id = ? ",
      [req.params.teacher_id],
      function (err, results, fields) {
        if (err) {
          res.json({ status: "error", message: err });
          return;
        }
        res.json({ status: "ok", data: req.params.teacher_id });
      }
    );
  }
);

/*********************************************************************************************************************************************************************************************************/

/*********************************************************************************************************************************************************************************************************/
/**add onsite*******************************************************************************************************************************************************************************************************/
// กำหนดโฟลเดอร์ที่จะเก็บไฟล์ที่อัปโหลด
// import file
// Define the disk storage for Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "Public/Images");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

// Create the Multer instance
const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    const allowedFileTypes = /jpeg|jpg|png/;
    const extname = allowedFileTypes.test(
      path.extname(file.originalname).toLowerCase()
    );
    const mimetype = allowedFileTypes.test(file.mimetype);

    if (extname && mimetype) {
      return cb(null, true);
    } else {
      cb("Error: Only .jpeg, .jpg, or .png files are allowed.");
    }
  },
});

//video import
const video = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "Public/Videos");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

const videoUpload = multer({
  storage: video,
  fileFilter: (req, file, cb) => {
    const allowedFileTypes = /mp4|avi|mkv/; // เพิ่มนามสกุลไฟล์วิดีโอตามที่ต้องการ
    const extname = allowedFileTypes.test(
      path.extname(file.originalname).toLowerCase()
    );
    const mimetype = allowedFileTypes.test(file.mimetype);

    if (extname && mimetype) {
      cb(null, true); // แก้ไขจาก cb("Error: ...") เป็น cb(null, true)
    } else {
      cb(
        "Error: Only .mp4, .avi, .mkv, or other allowed video formats are allowed."
      );
    }
  },
});

// end import file

//สร้าง course_online
app.post("/admin-onsite/add", jsonParser, function (req, res, next) {
  connection.execute(
    "INSERT INTO onsite (onsite_name, onsite_details, category_id, onsite_pic, teacher_id, onsite_time, onsite_location, onsite_video, onsite_status) VALUES (?,?,?,?,?,?,?,?,?)",
    [
      req.body.onsite_name,
      req.body.onsite_details,
      req.body.category_id,
      req.body.onsite_pic,
      req.body.teacher_id,
      req.body.onsite_time,
      req.body.onsite_location,
      req.body.onsite_video,
      req.body.onsite_status,
    ],
    function (err, results, fields) {
      if (err) {
        res.json({ status: "error", message: err });
        return;
      }
      res.json({ status: "ok", data: req.body });
    }
  );
});

//เรียกดู course_online   ************************************************
app.get("/admin-onsite/view", (req, res) => {
  const query =
    "SELECT  * FROM onsite INNER JOIN Category ON onsite.category_id = category.category_id;";

  connection.query(query, (err, results) => {
    if (err) {
      console.error("Error querying database:", err);
      res.status(500).send("Error fetching data from database");
      return;
    }
    res.json(results);
  });
});

//เรียกดู course_online {id}  ************************************************
app.get("/admin-onsite/view/:onsite_id", (req, res) => {
  const onsite_id = req.params.onsite_id;
  const query = "SELECT * FROM onsite WHERE onsite_id = ?;";
  connection.query(query, [onsite_id], (err, results) => {
    if (err) {
      console.error("Error querying database:", err);
      res.status(500).send("Error fetching data from database");
      return;
    }
    if (results.length === 0) {
      res.status(404).json({ status: "not found", message: "Rank not found" });
    } else {
      res.json({ status: "ok", onsite: results[0] });
    }
  });
});
// อัพเดท course_line ************************************************
app.put(
  "/admin-onsite/update/:onsite_id",
  jsonParser,
  function (req, res, next) {
    connection.execute(
      "UPDATE onsite SET onsite_name = ?, onsite_details = ?, category_id = ?, onsite_pic = ?, teacher_id = ?, onsite_time = ?, onsite_location = ?, onsite_video = ? WHERE onsite_id = ?",
      [  
        req.body.onsite_name,
        req.body.onsite_details,
        req.body.category_id,
        req.body.onsite_pic,
        req.body.teacher_id,
        req.body.onsite_time,
        req.body.onsite_location,
        req.body.onsite_video,
        req.body.onsite_status,
        req.params.onsite_id,
      ],
      function (err, results, fields) {
        if (err) {
          res.json({ status: "error", message: err });
          return;
        }
        res.json({ status: "ok", data: req.body });
      }
    );
  }
);
// ลบ course_online ************************************************
app.delete(
  "/admin-onsite/delete/:onsite_id",
  jsonParser,
  function (req, res, next) {
    connection.execute(
      "DELETE FROM course_onsite WHERE onsite_id = ?",
      [req.params.onsite_id],
      function (err, results, fields) {
        if (err) {
          res.json({ status: "error", message: err });
          return;
        }
        res.json({ status: "ok", data: req.body });
      }
    );
  }
);

/*********************************************************************************************************************************************************************************************************/
//สร้าง course_onsite
app.post("/admin-site/add", jsonParser, function (req, res, next) {
  connection.execute(
    "INSERT INTO onsite_site (site_name, site_details, category_id, site_pic, teacher_id, site_time, site_location, site_video, site_status, site_form) VALUES (?,?,?,?,?,?,?,?,?,?)",
    [
      req.body.site_name,
      req.body.site_details,
      req.body.category_id,
      req.body.site_pic,
      req.body.teacher_id,
      req.body.site_time,
      req.body.site_location,
      req.body.site_video,
      req.body.site_status,
      req.body.site_form,
    ],
    function (err, results, fields) {
      if (err) {
        res.json({ status: "error", message: err });
        return;
      }
      res.json({ status: "ok", data: req.body });
    }
  );   
});
//เรียกดู course_onsite
app.get("/admin-site/view", (req, res) => {
  const query =
    "SELECT  * FROM onsite_site INNER JOIN Category ON onsite_site.category_id = category.category_id;";

  connection.query(query, (err, results) => {
    if (err) {
      console.error("Error querying database:", err);
      res.status(500).send("Error fetching data from database");
      return;
    }
    res.json(results);
  });
});
//เรียกดู course_onsite {id}
app.get("/admin-site/view/:site_id", (req, res) => {
  const site_id = req.params.site_id;
  const query = "SELECT * FROM onsite_site WHERE site_id = ?;";
  connection.query(query, [site_id], (err, results) => {
    if (err) {
      console.error("Error querying database:", err);
      res.status(500).send("Error fetching data from database");
      return;
    }
    if (results.length === 0) {
      res.status(404).json({ status: "not found", message: "Rank not found" });
    } else {
      res.json({ status: "ok", onsite: results[0] });
    }
  });
});
// อัพเดท course_site

// ลบ course_onsite

//recommends course
app.get("/admin-recommends/view", (req, res) => {
  const query =
    "SELECT  * FROM onsite INNER JOIN Category ON onsite.category_id = category.category_id WHERE Category.category_id = 6;";

  connection.query(query, (err, results) => {
    if (err) {
      console.error("Error querying database:", err);
      res.status(500).send("Error fetching data from database");
      return;
    }
    res.json(results);
  });
});

/*********************************************************************************************************************************************************************************************************/
// สร้าง rank ************************************************
app.post("/admin-rank", jsonParser, function (req, res, next) {
  connection.execute(
    "SELECT * FROM `rank` WHERE `rank_name` = ? OR `rank_point` = ? OR `rank_pic` = ?",
    [req.body.rank_name, req.body.rank_point, req.body.rank_pic],
    function (err, results, fields) {
      if (err) {
        res.json({ status: "error", message: err });
        return;
      }

      if (results.length > 0) {
        // ถ้ามีข้อมูลซ้ำ
        res.json({ status: "error", message: "ข้อมูลซ้ำกัน" });
      } else {
        // ถ้าไม่มีข้อมูลซ้ำ ทำการ INSERT
        connection.execute(
          "INSERT INTO `rank` (`rank_name`, `rank_point`, `rank_pic`) VALUES (?, ?, ?)",
          [req.body.rank_name, req.body.rank_point, req.body.rank_pic],
          function (err, results, fields) {
            if (err) {
              res.json({ status: "error", message: err });
              return;
            }
            res.json({ status: "ok", data: req.body });
          }
        );
      }
    }
  );
});

// เรียกดู rank ************************************************
app.get("/admin-rank/view", (req, res) => {
  //const query = "SELECT * FROM rank";
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
//เรียกดู rank {id}  ************************************************
app.get("/admin-rank/view/:rank_id", (req, res) => {
  const rank_id = req.params.rank_id;
  const query = "SELECT * FROM rank WHERE rank_id = ?;";
  connection.query(query, [rank_id], (err, results) => {
    if (err) {
      console.error("Error querying database:", err);
      res.status(500).send("Error fetching data from database");
      return;
    }
    if (results.length === 0) {
      res.status(404).json({ status: "not found", message: "Rank not found" });
    } else {
      res.json({ status: "ok", rank: results[0] });
    }
  });
});
// อัพเดท rank ************************************************
app.put("/admin-rank/update/:rank_id", jsonParser, function (req, res, next) {
  connection.execute(
    "UPDATE rank SET rank_name = ? ,rank_point = ?  WHERE rank_id = ?",
    [req.body.rank_name, req.body.rank_point, req.params.rank_id],
    function (err, results, fields) {
      if (err) {
        res.json({ status: "error", message: err });
        return;
      }
      res.json({ status: "ok", data: req.body });
    }
  );
});
// ลบ rank ************************************************
app.delete(
  "/admin-rank/delete/:rank_id",
  jsonParser,
  function (req, res, next) {
    connection.execute(
      "DELETE FROM rank WHERE rank_id = ?",
      [req.params.rank_id], // เปลี่ยนจาก req.body.rank_id เป็น req.params.rank_id
      function (err, results, fields) {
        if (err) {
          res.json({ status: "error", message: err });
          return;
        }
        res.json({ status: "ok", data: req.params.rank_id }); // เปลี่ยน req.body เป็น req.params.rank_id
      }
    );
  }
);

/*********************************************************************************************************************************************************************************************************/

/*********************************************************************************************************************************************************************************************************/
// สร้าง category ************************************************
app.post("/admin-category", jsonParser, function (req, res, next) {
  connection.execute(
    "INSERT INTO `category` (`category_name`) VALUES (?)",
    [req.body.category_name],
    function (err, results, fields) {
      if (err) {
        res.json({ status: "error", message: err });
        return;
      }
      res.json({ status: "ok", data: req.body });
    }
  );
});
// เรียกดู category ************************************************
app.get("/admin-category/view", (req, res) => {
  const query = "SELECT * FROM category order by category_name asc;";
  connection.query(query, (err, results) => {
    if (err) {
      console.error("Error querying database:", err);
      res.status(500).send("Error fetching data from database");
      return;
    }
    res.json(results);
  });
});
//เรียกดู category {id}  ************************************************
app.get("/admin-category/view/:category_id", (req, res) => {
  const category_id = req.params.category_id; // รับค่า teacher_id จาก path
  const query = "SELECT * FROM category WHERE category_id = ?;";
  connection.query(query, [category_id], (err, results) => {
    if (err) {
      console.error("Error querying database:", err);
      res.status(500).send("Error fetching data from database");
      return;
    }
    if (results.length === 0) {
      res.status(404).json({ status: "not found", message: "Rank not found" });
    } else {
      res.json({ status: "ok", category: results[0] });
    }
  });
});
// อัพเดท category ************************************************
app.put(
  "/admin-category/update/:category_id",
  jsonParser,
  function (req, res, next) {
    connection.execute(
      "UPDATE category SET category_name = ?  WHERE category_id = ?",
      [req.body.category_name, req.params.category_id],
      function (err, results, fields) {
        if (err) {
          res.json({ status: "error", message: err });
          return;
        }
        res.json({ status: "ok", data: req.body });
      }
    );
  }
);
// ลบ category ************************************************
app.delete(
  "/admin-category/delete/:category_id",
  jsonParser,
  function (req, res, next) {
    connection.execute(
      "DELETE FROM category WHERE category_id = ?",
      [req.params.category_id],
      function (err, results, fields) {
        if (err) {
          res.json({ status: "error", message: err });
          return;
        }
        res.json({ status: "ok", data: req.body });
      }
    );
  }
);

/*********************************************************************************************************************************************************************************************************/

/*********************************************************************************************************************************************************************************************************/
// สร้าง pic_sklii ************************************************
app.post("/admin-skill", jsonParser, function (req, res, next) {
  connection.execute(
    "INSERT INTO `skill` (`skill_name`, `skill_pic`) VALUES (?, ?)",
    [req.body.skill_name, req.body.skill_pic],
    function (err, results, fields) {
      if (err) {
        res.json({ status: "error", message: err });
        return;
      }
      res.json({ status: "ok", data: req.body });
    }
  );
});

// เรียกดู pic_sklii ************************************************
app.get("/admin-skill/view", (req, res) => {
  const query = "SELECT * FROM skill ORDER BY skill_name ASC;";
  connection.query(query, (err, results) => {
    if (err) {
      console.error("Error querying database:", err);
      res.status(500).send("Error fetching data from database");
      return;
    }
    res.json(results);
  });
});
// เรียกดู pic_sklii { id }************************************************
app.get("/admin-skill/view/:skill_id", (req, res) => {
  const skill_id = req.params.skill_id; // รับค่า teacher_id จาก path
  const query = "SELECT * FROM skill WHERE skill_id = ?;";
  connection.query(query, [skill_id], (err, results) => {
    if (err) {
      console.error("Error querying database:", err);
      res.status(500).send("Error fetching data from database");
      return;
    }
    if (results.length === 0) {
      res.status(404).json({ status: "not found", message: "Rank not found" });
    } else {
      res.json({ status: "ok", skill: results[0] });
    }
  });
});
// ลบ pic_sklii ************************************************
app.delete(
  "/admin-skill/delete/:skill_id",
  jsonParser,
  function (req, res, next) {
    connection.execute(
      "DELETE FROM skill WHERE skill_id = ?",
      [req.params.skill_id],
      function (err, results, fields) {
        if (err) {
          res.json({ status: "error", message: err });
          return;
        }
        res.json({ status: "ok", data: req.body });
      }
    );
  }
);

// อัพเดท pic_sklii ************************************************
app.put("/admin-skill/update/:skill_id", jsonParser, function (req, res, next) {
  connection.execute(
    "UPDATE skill SET skill_name = ?, skill_pic = ? WHERE skill_id = ?",
    [req.body.skill_name, req.body.skill_pic, req.params.skill_id],
    function (err, results, fields) {
      if (err) {
        res.json({ status: "error", message: err });
        return;
      }
      res.json({ status: "ok", data: req.body });
    }
  );
});

/*********************************************************************************************************************************************************************************************************/
/**register**************************************************************************************************************************************************************************************************/
app.post("/register", jsonParser, function (req, res, next) {
  console.log("req", req.body);

  // การแฮชรหัสผ่าน
  bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
    if (err) {
      res.json({ status: "error", message: err });
      return;
    }

    connection.execute(
      "INSERT INTO users (email, password, fullname, lastname, category_id) VALUES (?, ?, ?, ?, ?)",
      [
        req.body.email,
        hash,
        req.body.fullname,
        req.body.lastname,
        req.body.category_id, 
      ],

      function (err, results, fields) {
        if (err) {
          res.json({ status: "error", message: err });
          return;
        }
        res.json({ status: "ok", data: req.body });
      }
    );
  });
});

/*********************************************************************************************************************************************************************************************************/
/***login**************************************************************************************************************************************************************************************************/
app.post("/login", jsonParser, function (req, res, next) {
  connection.execute(
    "SELECT * FROM users WHERE email=?",
    [req.body.email],
    function (err, users) {
      if (err) {
        res.json({ status: "error", message: err });
        return;
      }
      if (users.length == 0) {
        res.json({ status: "error", message: "No user found" });
        return;
      }
      bcrypt.compare(
        req.body.password,
        users[0].password,
        function (err, isLogin) {
          if (isLogin) {
            var userId = users[0].id;
            var status = users[0].status;
            var message = status === 1 ? "admin" : "user";

            res.json({ status: "ok", message, id: userId });
          } else {
            res.json({ status: "error", message: "Login failed" });
          }
        }
      );
    }
  );
});
/*********************************************************************************************************************************************************************************************************/
/******เช็ค authen***************************************************************************************************************************************************************************************************/
app.post("/authen", jsonParser, function (req, res, next) {
  try {
    const token = req.headers.authorization.split(" ")[1];
    console.log(decoded);
    var decoded = jwt.verify(token, secret);
    res.json({ status: "ok", decoded });
  } catch (err) {
    res.json({ status: "error", message: err.message });
  }
});
/*********************************************************************************************************************************************************************************************************/
app.get("/user/:id", (req, res) => {
  const usersid = req.params.id; // รับค่า teacher_id จาก path
  const query =
    "SELECT * FROM `users` INNER JOIN category ON users.category_id = category.category_id WHERE id = ?; ";
  connection.query(query, [usersid], (err, results) => {
    if (err) {
      console.error("Error querying database:", err);
      res.status(500).send("Error fetching data from database");
      return;
    }
    if (results.length === 0) {
      res.status(404).json({ status: "not found", message: "users not found" });
    } else {
      res.json({ status: "ok", users: results[0] });
    }
  });
});
/*********************************************************************************************************************************************************************************************************/



app.listen(3333, function () {
  console.log("CORS-enabled web server listening on port 3333");
});
