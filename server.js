const express = require('express');
const cors = require('cors');
var bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.options('*', cors());
app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});


// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});

const { Bookings } = require('./sequelize');

app.get('/', (req, res) => {
    Bookings.findAll().then(bookings => 
        res.send(bookings));
});

app.post('/user', (req, res) => {
    Bookings.create(req.body)
        .then(user => res.send(user)
    )
    .catch( err => {
        res.status(500).send("Oops...Something went wrong!");
    });
});

app.put('/user/:id', (req, res) => {
    const id = req.params.id;
    Bookings.update(req.body, {
        where: { id: id }
    }).then(user => res.send(user)
    );
});

app.delete('/user/:id', (req, res) => {
    const id = req.params.id;
    Bookings.destroy({
        where: { id: id }
    }).then(user => res.send("Your booking has been canceled successfully!")
    )
    .catch( err => {
        res.status(500).send("Oops...Something went wrong!");
    });
})










