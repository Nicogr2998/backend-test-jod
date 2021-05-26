const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');



const PORT = process.env.PORT || 5000;

const app = express();

app.use(bodyParser.json());

app.use(function(_req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', ' GET');
    
    next();
});

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
const connection = mysql.createConnection({
    host:'us-cdbr-east-03.cleardb.com',
    user:'b1d8c29c2be626',
    password:'5d5f3c9c',
    database:'heroku_7cff322a0f240c7'
});

// Check connect

connection.connect(error =>{
    if(error) throw error;
    console.log('Database running');
});

app.listen(PORT, () => console.log('Server running on port ${PORT}'));