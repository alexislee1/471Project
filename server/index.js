const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "lakersdb"
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}))

app.post("/api/insert", (req, res) => {

    const UserName = req.body.UserName
    const Password = req.body.Password

    const sqlInsert = "INSERT INTO user (UserName, Password) VALUES (?,?)"
    db.query(sqlInsert, [UserName, Password], (err, result) => {
        console.log(err);
    })
})

app.listen(3001, () => {
    console.log("running on port 3001");
});