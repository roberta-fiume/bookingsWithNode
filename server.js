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


const jwt = require('express-jwt');
const jwtAuthz = require('express-jwt-authz');
const jwksRsa = require('jwks-rsa');

const authRouter = require("./auth");

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});

var session = require('express-session');

// config express-session
var sess = {
  secret: process.env.AUTH0_CLIENT_SECRET,
  cookie: {},
  resave: false,
  saveUninitialized: true
};

if (app.get('env') === 'production') {
  // Use secure cookies in production (requires SSL/TLS)
  sess.cookie.secure = true;

  // Uncomment the line below if your application is behind a proxy (like on Heroku)
  // or if you're encountering the error message:
  // "Unable to verify authorization request state"
  // app.set('trust proxy', 1);
}

app.use(session(sess));

const { auth } = require('express-openid-connect');

const { requiresAuth } = require('express-openid-connect');

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.AUTH0_CLIENT_SECRET,
  baseURL: 'http://localhost:8080',
  clientID: process.env.AUTH0_CLIENT_ID,
  issuerBaseURL: process.env.AUTH0_DOMAIN
};

app.use(auth(config));

// PASSPORT CONGIGURATION

const passport = require('passport');

const Auth0Strategy = require('passport-auth0');

const strategy = new Auth0Strategy(
    {
      domain: process.env.AUTH0_DOMAIN,
      clientID: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      callbackURL: process.env.AUTH0_CALLBACK_URL
    },
    function(accessToken, refreshToken, extraParams, profile, done) {
      /**
       * Access tokens are used to authorize users to an API
       * (resource server)
       * accessToken is the token to call the Auth0 API
       * or a secured third-party API
       * extraParams.id_token has the JSON Web Token
       * profile has all the information from the user
       */
      return done(null, profile);
    }
);
// app.set("views", path.join(__dirname, "views"));
// app.use(express.static(path.join(__dirname, "public")));
// app.set("view engine", "pug");
passport.use(strategy);
app.use(passport.initialize());

app.use(passport.session());



// You can use this section to keep a smaller payload
passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

app.use("/", authRouter);



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
        res.send(bookings));
});

const checkScopesPost = jwtAuthz(['write:bookings']);

app.post('/booking', checkScopesPost, (req, res) => {
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










