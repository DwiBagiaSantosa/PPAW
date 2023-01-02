const express = require('express');
const mysql = require('mysql');
const port = 3000;

const connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : '',
	database : 'e-learning'
});

connection.connect(function(err) {
	if (err) {
	  console.log("Cannot connect to mysql...")
	  throw err
	}
	console.log('Connected to mysql...')
});

const app = express();

app.set('view engine', 'ejs');


app.get('/dosen/jadwal', function(req, res) {
		connection.query('SELECT * FROM jadwal_dosen', function(error, results) {
			if (error) throw error; 
            return res.json(results);
		});
    
});

app.listen(port, () => {
    console.log(`Server berjalan diport ${port}`);
})