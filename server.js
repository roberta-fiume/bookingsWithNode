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
    //   host: "35.242.165.143",
  host: "35.235.54.201",
  port: 3306,
    //   user: "test",
  user: "roberta",
  password: "1234",
  database: "projects_database"
});

con.connect();

const users = app.get('/', (req, res) => {
    con.query('SELECT * FROM bookings', (err, rows, fields) => {
        if (!err)
        res.send(rows);
        else 
        console.log(err);
    })
});

  
app.post('/user', function (req, res) {

    let user = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email
    }
    con.query("INSERT INTO bookings SET ?", user, function (error, results) {
        if (error) throw error;
        console.log("this is the error", error);
        return res.send(user);
    });
});

app.put('/user/:id', (req, res) => {
    let id = req.params.id;

 res.send("user modified!");
})

// app.put('/user', function (req, res) {
//     con.query('UPDATE `employee` SET `employee_name`=?,`employee_salary`=?,`employee_age`=? where `id`=?', [req.body.employee_name,req.body.employee_salary, req.body.employee_age, req.body.id], function (error, results, fields) {
//         if (error) throw error;
//         res.end(JSON.stringify(results));
//         });
// });



