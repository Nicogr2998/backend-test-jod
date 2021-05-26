const express = require('express');
const mysql = require('mysql');
const dbConfig = require("../config/db.config.js");


const PORT = process.env.PORT || 8855;

const app = express();



// Route

app.get('/',(req,res) => {
    res.send('welocome to mt API!');

});

app.get('/getTickets', (req, res) =>{
    const sql = 'SELECT * FROM ticket ';

    connection.query(sql, (error, results) => {
        if (error) throw error;
        if(results.length > 0){
            res.json(results);
        }else{
            res.send('Not result');
        }

    });
});


// My Sql
const connection = mysql.createPool({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
});

// Check connect

connection.connect(error =>{
    if(error) throw error;
    console.log('Database running');
});

app.listen(PORT, () => console.log('Server running on port ${PORT}'));