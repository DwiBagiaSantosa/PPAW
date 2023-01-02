const express = require('express');
const mysql = require('mysql');
const session = require('express-session');
const fileUpload = require('express-fileupload');
const { request, response } = require('express');
const port = 3001;



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
app.use(session({secret: 'secret',}));
app.use(fileUpload());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.use(express.static('public'));


// Dosen
app.get('/', function(request, response) {
	// Render login template
	response.render('dosen/login');
});

app.post('/dosen/auth-dosen', function(request, response) {
	// Capture the input fields
	let username = request.body.username;
	let password = request.body.password;
	// Ensure the input fields exists and are not empty
	if (username && password) {
		// Execute SQL query that'll select the account from the database based on the specified username and password
		connection.query('SELECT * FROM akun WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
			// If there is an issue with the query, output the error
			if (error) throw error;
			// If the account exists
			if (results.length > 0) {
				// Authenticate the user
				request.session.loggedin = true;
				request.session.username = username;
				// Redirect to home page
				response.redirect('/dosen/dashboard-dosen');
			} else {
				response.redirect('/');
			}			
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});

app.get('/dosen/dashboard-dosen', function(request, response) {
	// If the user is loggedin
	if (request.session.loggedin) {
		// Output username
		response.render('dosen/dashboard-dosen');
	} else {
		// Not logged in
		response.redirect('/');
	}
	response.end();
});

app.get('/dosen/matkul-dosen', function(request, response) {
	if (request.session.loggedin) {
		connection.query('select * from `tb_pertemuan`', function(error, results, fields) {
			if (error) throw error; 
			console.log(results);
			// Render login template
			response.render('dosen/matkul-dosen', {
				dtd: results
			})
		});
		
	} else {
		response.redirect('/');
	}
	
});

app.get('/dosen/jadwal-dosen', function(request, response) {
	if(request.session.loggedin){
		connection.query('SELECT * FROM jadwal_dosen', function(error, results) {
			if (error) throw error; 
			response.render('dosen/jadwal-dosen', {
				dtd: results
			})
		});
	} else {
		response.redirect('/');
	}
    
});

app.get('/dosen/profile-dosen', function(request, response) {
	if(request.session.loggedin){
		connection.query('SELECT nama, nip, jenis_kelamin, alamat, kota, email FROM `tb_dosen`', function(error, results, fields) {
			if (error) throw error; 
			response.render('dosen/profile-dosen', {
				dtd: results
			})
		});
	} else {
		response.redirect('/');
	}
	
}); 

app.get('/dosen/profile-dosen/:id', function(request, response) {
	if(request.session.loggedin) {
		connection.query('SELECT dosen_id, nama, nip, jenis_kelamin, alamat, kota, email FROM tb_dosen ', function(error, results, fields) {
			if (error) throw error;
			console.log(results);
			response.render('dosen/edit-profile-dosen', {
				dtd: results
			})
		});
	} else {
		response.redirect('/');
	}
	
});

app.post('/dosen/profile-dosen/:id', function(request, response) {
    // let data = request.body;
	if(request.session.loggedin) {
		connection.query(`UPDATE tb_dosen SET nama = '${request.body.nama}' , nip = '${request.body.nip}', jenis_kelamin = '${request.body.jenis_kelamin}', alamat = '${request.body.alamat}', kota = '${request.body.kota}', email = '${request.body.email}' WHERE tb_dosen.dosen_id = ${request.params.id}`, function(error, results, fields){
			if (error) throw error;
			console.log(results);
			response.redirect('/dosen/profile-dosen')
		});
	} else {
		response.redirect('/');
	}
    
});

app.get('/dosen/tambah-matkul-dosen/tambah', (request, response) => {
	if(request.session.loggedin) {
		response.render('dosen/tambah-matkul-dosen');
	} else {
		response.redirect('/');
	}
	
});

app.post('/dosen/tambah-matkul-dosen/save', (request, response) => {
	if(request.session.loggedin) {
		connection.query(`INSERT into tb_pertemuan(pertemuan,materi_tugas,link) values('${request.body.pertemuan}','${request.body.materi_tugas}', '${request.body.link}')`, function(error, results, fields){
			if (error) throw error;
			console.log(results);
			response.redirect('/dosen/matkul-dosen')
		});
	} else {
		response.redirect('/');
	}
	
});

app.get('/dosen/matkul-dosen/edit/:id',(request, response) => {
	if(request.session.loggedin){
		connection.query(`SELECT * FROM tb_pertemuan WHERE id=${request.params.id}`, (error, results, fields) => {
			if (error) throw error;
			console.log(results);
			response.render('dosen/edit-matkul-dosen', {
				dtd: results
			});
		})
	} else {
		response.redirect('/');
	}
})

app.post("/dosen/materi-dosen/update/:id", function(request,response){
	if(request.session.loggedin) {
	  connection.query(`UPDATE tb_pertemuan SET materi_tugas = '${request.body.materi_tugas}', link = '${request.body.link}' WHERE id = ${request.params.id}`, function (error, results, fields) {
		if (error) throw error;
		response.redirect('/dosen/matkul-dosen')
	  });
	} else {
	  response.redirect("/")
	}
  })

app.get("/dosen/matkul-dosen/delete/:id", function(request,response){
	if(request.session.loggedin) {
	  connection.query(`DELETE from tb_pertemuan WHERE id = ${request.params.id}`, function (error, results, fields) {
		if (error) throw error;
		console.log(results);
		response.redirect('/dosen/matkul-dosen')
	  });
	} else {
	  response.redirect("/")
	}
  })

app.get('/logout',(request,response)=> {
	request.session.destroy();
	response.redirect('/');
})





// Mahasiswa
app.get('/mahasiswa/login-mhs', function(request, response) {
	// Render login template
	response.render('mahasiswa/login-mhs');
});

app.post('/mahasiswa/auth-mhs', function(request, response) {
	// Capture the input fields
	let username = request.body.username;
	let password = request.body.password;
	// Ensure the input fields exists and are not empty
	if (username && password) {
		// Execute SQL query that'll select the account from the database based on the specified username and password
		connection.query('SELECT * FROM akun WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
			// If there is an issue with the query, output the error
			if (error) throw error;
			// If the account exists
			if (results.length > 0) {
				// Authenticate the user
				request.session.loggedin = true;
				request.session.username = username;
				// Redirect to home page
				response.redirect('/mahasiswa/dashboard-mahasiswa');
			} else {
				response.redirect('/mahasiswa/login-mhs');
			}			
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});

app.get('/mahasiswa/dashboard-mahasiswa', function(request, response) {
	// If the user is loggedin
	if (request.session.loggedin) {
		// Output username
		response.render('mahasiswa/dashboard-mahasiswa');
	} else {
		// Not logged in
		response.redirect('/mahasiswa/login-mhs');
	}
});

app.get('/mahasiswa/jadwal-mahasiswa', function(request, response) {
	if (request.session.loggedin) {
		connection.query('SELECT * FROM jadwal_mahasiswa ', function(error, results) {
			if (error) throw error; 
			response.render('mahasiswa/jadwal-mahasiswa', {
				dtd: results
			})
		});
	} else {
		response.redirect('/mahasiswa/login-mhs');
	}
    
});

app.get('/mahasiswa/profile-mahasiswa', function(request, response) {
	if (request.session.loggedin) {
		connection.query('SELECT nama, nim, jenis_kelamin, alamat, kota, email FROM `tb_mahasiswa`', function(error, results, fields) {
			if (error) throw error; 
			response.render('mahasiswa/profile-mahasiswa', {
				dtd: results
			})
		});
	} else {
		response.redirect('/mahasiswa/login-mhs');
	}
	
});

app.get('/mahasiswa/profile-mahasiswa/:id', function(request, response) {
	if (request.session.loggedin) {
		connection.query('SELECT mahasiswa_id, nama, nim, jenis_kelamin, alamat, kota, email FROM tb_mahasiswa ', function(error, results, fields) {
			if (error) throw error;
			console.log(results);
			response.render('mahasiswa/edit-profile-mahasiswa', {
				dtd: results
			})
		});
	} else {
		response.redirect('/mahasiswa/login-mhs');
	}
	
});

app.post('/mahasiswa/profile-mahasiswa/:id', function(request, response) {
    // let data = request.body;
	if (request.session.loggedin) {
		connection.query(`UPDATE tb_mahasiswa SET nama = '${request.body.nama}' , nim = '${request.body.nim}', jenis_kelamin = '${request.body.jenis_kelamin}', alamat = '${request.body.alamat}', kota = '${request.body.kota}', email = '${request.body.email}' WHERE tb_mahasiswa.mahasiswa_id = ${request.params.id}`, function(error, results, fields){
			if (error) throw error;
			response.redirect('/mahasiswa/profile-mahasiswa')
		});
	} else {
		response.redirect('/mahasiswa/login-mhs');
	}
    
})

app.get('/mahasiswa/nilai-mahasiswa', function(request, response) {
	if (request.session.loggedin) {
		// Render login template
		response.render('mahasiswa/nilai-mahasiswa');
	} else {
		response.redirect('/mahasiswa/login-mhs');
	}
	
});

app.get('/mahasiswa/nilai-matkul-mahasiswa', function(request, response) {
	if (request.session.loggedin) {
		response.render('mahasiswa/nilai-matkul-mahasiswa');
	} else {
		response.redirect('/mahasiswa/login-mhs');
	}
	
});

app.get('/mahasiswa/matkul-mahasiswa', function(request, response) {
	if (request.session.loggedin) {
		connection.query('select * from `tb_pertemuan`', function(error, results, fields) {
			if (error) throw error; 
			console.log(results);
			response.render('mahasiswa/matkul-mahasiswa', {
				dtd: results
			})
		});
	} else {
		response.redirect('/mahasiswa/login-mhs');
	}	
	
});


// app.get("/", function(req, res){
//     res.render('dashboard-mahasiswa')
// })

// app.get("/jadwal-mahasiswa", function(req, res){
//     res.render('jadwal-mahasiswa')
// })

// app.get("/nilai-mahasiswa", function(req, res){
//     res.render('nilai-mahasiswa')
// })

// app.get("/profile-mahasiswa", function(req, res){
//     res.render('profile-mahasiswa')
// })

// app.get("/matkul-mahasiswa", function(req, res){
//     res.render('matkul-mahasiswa')
// })

// app.get("/nilai-matkul-mahasiswa", function(req, res){
//     res.render('nilai-matkul-mahasiswa')
// })

// app.get("/dashboard-dosen", function(req, res){
//     res.render('dashboard-dosen')
// })

// app.get("/jadwal-dosen", function(req, res){
//     res.render('jadwal-dosen')
// })

// app.get("/matkul-dosen", function(req, res){
//     res.render('matkul-dosen')
// })

// app.get("/profile-dosen", function(req, res){
//     res.render('profile-dosen')
// })



app.listen(port, () => {
    console.log(`Server berjalan diport ${port}`);
})