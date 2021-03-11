
/**
 * App Variables
 */

 const app = express();

 app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
  });

const express = require('express');
const cors = require('cors');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.options('*', cors());
app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});


const expressSession = require("express-session");
const passport = require("passport");
const Auth0Strategy = require("passport-auth0");
require('dotenv').config();

const PORT = process.env.PORT || 8080;


const path = require("path");

const { auth } = require('express-openid-connect');

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.AUTH0_CLIENT_SECRET,
  baseURL: 'http://localhost:8080',
  clientID: process.env.AUTH0_CLIENT_ID,
  issuerBaseURL: process.env.AUTH0_DOMAIN
};

app.use(auth(config));

app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

app.get('/profile', requiresAuth(), (req, res) => {
    res.send(JSON.stringify(req.oidc.user));
  });



const { Bookings } = require('./sequelize');

app.get('/', (req, res) => {
    Bookings.findAll().then(bookings => 
        res.send(bookings));
});

app.post('/booking', (req, res) => {
    Bookings.create(req.body)
        .then(user => res.send(user)
    )
    .catch( err => {
        res.status(500).send("Oops...Something went wrong!");
    });
});

app.put('/booking/:id', (req, res) => {
    const id = req.params.id;
    Bookings.update(req.body, {
        where: { id: id }
    }).then(user => res.send(user)
    );
});

app.delete('/booking/:id', (req, res) => {
    const id = req.params.id;
    Bookings.destroy({
        where: { id: id }
    }).then(user => res.send("Your booking has been canceled successfully!")
    )
    .catch( err => {
        res.status(500).send("Oops...Something went wrong!");
    });
})










