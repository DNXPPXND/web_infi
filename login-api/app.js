var express = require('express')
var cors = require('cors')
var app = express()
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
//เรียกใข้ตัว hash รหัสผ่าน
const bcrypt = require('bcrypt');
const saltRounds = 10;
//เป็นการเรียกใช่งานของ token ใน username
var jwt = require('jsonwebtoken');
const secret = 'infi'


app.use(cors())

const mysql = require('mysql2');
const { is } = require('express/lib/request')
// เชื่อมต่อกับฐานข้อมูล mysql
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'mydb-infi-learn'
});



// register

 app.post('/resgister', jsonParser, function (req, res, next) {
    console.log("req", req.body )
    //เป็นการ hash รหัสผ่านเพิ่อป้องกันการเข้ารหัส
    bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
        connection.execute(
            'INSERT INTO users (email,password,fullname,lastname) VALUES (?, ?, ?, ?)', 
            [req.body.email ,hash,req.body.fullname, req.body.lastname],
            
            function(err, results, fields) {
                if (err) {
                    res.json({status: 'error' , message: err})
                    return
                } 
                res.json({status : 'ok' , data:req.body})

            }
        );
    });
})

//login

app.post('/login', jsonParser, function (req, res, next) {
    connection.execute(
            'SELECT * FROM users WHERE email=?', 
            [req.body.email],
            function(err, users, fields) {
                if (err) {res.json({status: 'error' , message: err}); return } 
                if(users.length == 0) { res.json({status:'error' , massage: 'no user found'}); return}
                // Load hash from your password DB.
                bcrypt.compare(req.body.password, users[0].password, function(err, isLogin) {
                    if (isLogin) {
                        var token = jwt.sign({ email: users[0].email }, secret , { expiresIn: '1d' });
                        res.json({status: 'ok' , massage: 'Login success',token })
                        
                    } else{
                        res.json({status: 'error' , massage: 'Login failed'})
                    }
            });
        }
    );

})

// authen

app.post('/authen', jsonParser, function (req, res, next) {
    try {
        const token = req.headers.authorization.split(' ')[1]
        var decoded = jwt.verify(token, secret);
        res.json({status: 'ok' , decoded})
    }catch(err) {
        res.json({status: 'error' , massage: 'err.massage'})    
    }
})

app.get('/profile' , jsonParser, function  (req, res, next) {
console.log("req", req.body )
    //เป็นการ hash รหัสผ่านเพิ่อป้องกันการเข้ารหัส
    bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
        connection.execute(
            'INSERT INTO users (email,password,fullname,lastname) VALUES (?, ?, ?, ?)', 
            [req.body.email ,hash,req.body.fullname, req.body.lastname],
            
            function(err, results, fields) {
                if (err) {
                    res.json({status: 'error' , message: err})
                    return
                } 
                res.json({status : 'ok' , data:req.body})

            }
        );
    });
})

app.listen(3333,  function () {
  console.log('CORS-enabled web server listening on port 3333')
})