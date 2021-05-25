const express = require('express');
const mysql = require('mysql');


const PORT = process.env.PORT || 3050;

const app = express();



// Route


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
    host:'localhost',
    user:'root',
    password:'admin',
    database:'tickets'
});

// Check 

connection.connect(error =>{
    if(error) throw error;
    console.log('Database running');
});

app.listen(PORT, () => console.log('Server running on port ${PORT}'));