const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql2");

const app = express();
const jsonParser = bodyParser.json();

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

app.use(cors());

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
  const query = "SELECT * FROM users";
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
    "INSERT INTO teacher (teacher_fname, teacher_lname, teacher_description, teacher_company, teacher_position, teacher_email, teacher_mobile, teacher_line) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
    [
      req.body.teacher_fname,
      req.body.teacher_lname,
      //req.body.teacher_pic,
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
    res.json({ status: "ok", teacher: results });
  });
});

// อัพเดท teacher  ************************************************
app.put("/view/update/:teacher_id", jsonParser, function (req, res, next) {
  connection.execute(
    "UPDATE teacher SET teacher_fname = ?, teacher_lname = ?, teacher_description = ?, teacher_company = ?, teacher_position = ?, teacher_email = ?, teacher_mobile = ?, teacher_line = ?  WHERE teacher_id = ?",
    [
      req.body.teacher_fname,
      req.body.teacher_lname,
      //req.body.teacher_pic,
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
});

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
// สร้าง course_online ************************************************
app.post("/admin-onsite", jsonParser, function (req, res, next) {
  connection.execute(
    "INSERT INTO course_onsite (onsite_name, onsite_time, onsite_location, course_status ) VALUES (?, ?, ?, ?)",
    [
      req.body.onsite_name,
      req.body.onsite_time,
      req.body.onsite_location,
      req.body.course_status,
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

// เรียกดู course_online ************************************************
app.get("/admin-onsite/view", (req, res) => {
  const query = "SELECT * FROM course_onsite ";
  connection.query(query, (err, results) => {
    if (err) {
      console.error("Error querying database:", err);
      res.status(500).send("Error fetching data from database");
      return;
    }
    res.json(results);
  });
});
// อัพเดท course_online ************************************************
app.put("/admin-onsite/update", jsonParser, function (req, res, next) {
  connection.execute(
    "UPDATE course_onsite SET onsite_name = ? , onsite_time = ? , onsite_location = ? , course_status = ?   WHERE onsite_id = ?",
    [
      req.body.onsite_name,
      req.body.onsite_time,
      req.body.onsite_location,
      req.body.course_status,
      req.body.onsite_id,
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
// ลบ course_online ************************************************
app.delete("/admin-onsite/delete", jsonParser, function (req, res, next) {
  connection.execute(
    "DELETE FROM course_onsite WHERE onsite_id = ?",
    [req.body.onsite_id],
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
// สร้าง rank ************************************************
app.post("/admin-rank", jsonParser, function (req, res, next) {
  connection.execute(
    "INSERT INTO `rank` (`rank_name`, `rank_point`) VALUES (?, ?)",
    [req.body.rank_name, req.body.rank_point],
    function (err, results, fields) {
      if (err) {
        res.json({ status: "error", message: err });
        return;
      }
      res.json({ status: "ok", data: req.body });
    }
  );
});
// เรียกดู rank ************************************************
app.get("/admin-rank/view", (req, res) => {
  const query = "SELECT * FROM rank";
  connection.query(query, (err, results) => {
    if (err) {
      console.error("Error querying database:", err);
      res.status(500).send("Error fetching data from database");
      return;
    }
    res.json(results);
  });
});
// อัพเดท rank ************************************************
app.put("/admin-rank/update", jsonParser, function (req, res, next) {
  connection.execute(
    "UPDATE rank SET rank_name = ? ,rank_point = ?  WHERE rank_id = ?",
    [req.body.rank_name, 
      req.body.rank_point, 
      req.body.rank_id],
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
app.delete("/admin-rank/delete", jsonParser, function (req, res, next) {
  connection.execute(
    "DELETE FROM rank WHERE rank_id = ?",
    [req.body.rank_id],
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
// สร้าง rank ************************************************
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
// เรียกดู rank ************************************************
app.get("/admin-category/view", (req, res) => {
  const query = "SELECT * FROM category";
  connection.query(query, (err, results) => {
    if (err) {
      console.error("Error querying database:", err);
      res.status(500).send("Error fetching data from database");
      return;
    }
    res.json(results);
  });
});
// อัพเดท rank ************************************************
app.put("/admin-category/update", jsonParser, function (req, res, next) {
  connection.execute(
    "UPDATE category SET category_name = ?  WHERE category_id = ?",
    [
      req.body.category_name, 
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
// ลบ rank ************************************************
app.delete("/admin-category/delete", jsonParser, function (req, res, next) {
  connection.execute(
    "DELETE FROM category WHERE category_id = ?",
    [req.body.category_id],
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




app.listen(3333, function () {
  console.log("CORS-enabled web server listening on port 3333");
});
