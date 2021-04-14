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
require('dotenv').config();

const { Bookings } = require('./sequelize');

const { Users } = require('./sequelize');


const jwt = require('express-jwt');
const jwtAuthz = require('express-jwt-authz');
const jwksRsa = require('jwks-rsa');


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});

const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://dev-23ynikm5.eu.auth0.com/.well-known/jwks.json`
  }),
  audience: 'https://supermarket.com',
  issuer: `https://dev-23ynikm5.eu.auth0.com/`,
  algorithms: ['RS256']
});

const checkScopesGet = jwtAuthz(['read:bookings']);

app.get('/', checkJwt, checkScopesGet, (req, res) => {
  console.log(JSON.stringify(req.headers));
    Bookings.findAll().then(bookings => 
      res.send(bookings)
    )
    .catch( err => {
      console.log("ERROR", err);
        res.status(error.status || 500)
        .json({ code: err.code, err: error.message });
    });
});

const checkScopesPost = jwtAuthz(['write:bookings']);

app.post('/booking', checkJwt, checkScopesPost, (req, res) => {
  console.log(JSON.stringify("HEADERS",req.headers));
    Bookings.create(req.body)
        .then(user => res.send(user)
    )
    .catch( err => {
      console.log("ERROR", err);
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










