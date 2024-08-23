const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const { check, validationResult } = require('express-validator');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "signup",
})


app.post('/signup', (req, res) => {
    const sql = "INSERT INTO login (`name`, `email`, `password`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.password
    ]
    db.query(sql, [values], (err, data) =>{
        if(err) {
            return res.json('Error');
        }
        return res.json(data);
    })
})

app.post('/login', (req, res) => {
    const sql = "SELECT * FROM login WHERE `email` = ? AND `password` = ?";
   
    db.query(sql, [req.body.email, req.body.password], (err, data) =>{
        if(err) {
            return res.json('Error');
        }
        if(data.length > 0) {
            return res.json('Success');
        } else {
            return res.json('Faile');
        }
    })
})

app.post('/home', (req, res) => {
    const sql = 'INSERT INTO item (`item`, `quantidade`, `preço`) VALUES (?)'
    const values = [
        req.body.item,
        req.body.quantidade,
        req.body.preço
    ]

    db.query(sql, [values], (err, data) =>{
        if(err) {
            return res.json('Error');
        } else {
            return res.json(data);
        }
    })

})

app.listen(8081, () =>{
    console.log('Rodando na porta 8081');
})