const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mysql = require("mysql");

app.use(bodyParser.json());

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "crud",
});
conn.connect((err) => {
    if (err) throw err
    console.log("MYSQL connected");
});
app.post("/api/create/", (req, res) => {
    let data = { name: req.body.name, location: req.body.location };
    let sql = "INSERT INTO users SET ?";
    let query = conn.query(sql, data, (err, result) => {
        if (err) throw err;
        res.send(JSON.stringify({ status: 200, error: null, response: "New Record Added" }));
    });
});
app.get("/api/view/", (req, res) => {
    let sql = "SELECT * FROM users";
    let query = conn.query(sql, (err, result) => {
        if (err) throw err;
        res.send(JSON.stringify({ status: 200, error: null, response: result }));
    });
});

app.get("/api/view/:id", (req, res) => {
    let sql = "SELECT * FROM users WHERE id=" + req.params.id;
    let query = conn.query(sql, (err, result) => {
        if (err) throw err;
        res.send(JSON.stringify({ status: 200, error: null, response: result }));
    });
});
app.delete("/api/delete/:id", (req, res) => {
    let sql = "DELETE  FROM users WHERE id=" + req.params.id;
    let query = conn.query(sql, (err, result) => {
        if (err) throw err;
        res.send(JSON.stringify({ status: 200, error: null, response: "Record Deleted Successfully" }));
    });
});
app.put("/api/update/", (req, res) => {
    let sql = "UPDATE users SET name='" + req.body.name + "', location='" + req.body.location + "' WHERE id=" + req.body.id;
    let query = conn.query(sql, (err, result) => {
     if (err) throw err;
     res.send(JSON.stringify({ status: 200, error: null, response: "Record updated SuccessFully" }));
    });
   });

app.listen(8000, () => {
    console.log("server started on port 8000");
});