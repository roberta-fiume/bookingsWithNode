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
    console.log("THIS IS THE ERROR:",err, req.body);
    });
});

app.put('/user/:id', (req, res) => {
    const id = req.params.id;
    Bookings.update(req.body, {
        where: { id: id }
    }).then(user => res.send(user)
    );
})










