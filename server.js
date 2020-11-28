const express = require('express');
var bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));




// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});


//TODO: refactor into its own file 
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "35.242.165.143",
  port: 3306,
  user: "test",
  password: "1234",
  database: "projects_database"
});

con.connect(function(err) {
    try {
        if (err) throw err;
        console.log("Connected!");
        var sql = "INSERT INTO bookings (firstname, lastname, email) VALUES ('Giovanni', 'Battista', 'g.b.j@outlook.com')";
        con.query(sql, function (err, result) {
        if (err) throw err;
            console.log("1 record inserted");
        });  
    } catch (error) {
        console.log("ERROR CONNECTING TO THE DATABASE", error);
    }
});


app.get('/', (req, res) => {
 con.query('SELECT * FROM bookings', (err, rows, fields) => {
     if (!err)
     res.send(rows);
     else 
     console.log(err);
 })
});






// app.post('/user', urlencodedParser, function (req, res) {
//     console.log(req.body);
//     var firstname = req.body.firstname;
//     var lastname = req.body.lastname;
//     var email = req.body.email;

//     con.connect(function (err) {
//         if (err) throw err;
//         console.log("connected");

//         var sql = "INSERT INTO bookings (firstname, lastname, email) VALUES ('"+Giovanni+",  "+Battista+", "+giovanni.battistaoutlook.com+")"; 
//         con.query(sql, function (err) {
//             if (err) throw err;
//             console.log("Other record inserted");
//         });
//     });
//     res.render('user added', { data: req.body });
// });


