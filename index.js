// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser');
// var passport = require('passport');
// var session = require('express-session');
// var passportGoogle = require('./auth/google');
// const router = express.Router()

// passportGoogle = passportGoogle(passport)

// app.use(session({
// 	secret: 's3cr3t',
// 	resave: true,
// 	saveUninitialized: true
//   }));
//   app.use(passport.initialize());
//   app.use(passport.session());

// /* LOGIN ROUTER */
// app.get('/login', function(req, res, next) {
// 	console.log('isndie the log in....?')
// 	res.render('login', { title: 'Please Sign In with:' });
//   });

// /* LOGOUT ROUTER */
// app.get('/logout', function(req, res){
// 	req.logout();
// 	res.redirect('/');
//   });

//   /* GOOGLE ROUTER */
// app.get('/google',
// passportGoogle.authenticate('google', { scope: 'https://www.google.com/m8/feeds' }));

// app.get('/auth/google/callback',
// passportGoogle.authenticate('google', { failureRedirect: '/testing' }),
// function(req, res) {
//   res.redirect('/');
// });



// app.get('/testing', (req, res) => {
// 	//THIS WORKS
// 	console.log('inside testing')
// 	// res.redirect('/')
// 	res.end('fail')
// })


//   app.set('port', process.env.PORT || 3000)

// const server = app.listen(app.get('port'), () => {
//     console.log('running on port:' + app.get('port'))
//   })


const express = require('express'),
    app = express(),
    passport = require('passport'),
    auth = require('./auth/google'),
    cookieParser = require('cookie-parser'),
	cookieSession = require('cookie-session'),
	bodyParser = require('body-parser');

auth(passport);
app.use(passport.initialize());

app.use(cookieSession({
    name: 'session',
    keys: ['test'],
    maxAge: 24 * 60 * 60 * 1000
}));
app.use(cookieParser());
app.use('/app', express.static(__dirname + '/www'));
app.use(bodyParser.json());

app.get('/', (req, res) => {
	console.log('what is the session?', JSON.stringify(req.session))
    if (req.session.token) {
        res.cookie('token', req.session.token);
        res.redirect('/app')
    } else {
        res.cookie('token', '')
        res.redirect('/auth/google')
    }
});

app.get('/logout', (req, res) => {
    req.logout();
    req.session = null;
    res.redirect('/');
});

app.get('/auth/google', passport.authenticate('google', {
    scope: ['https://www.googleapis.com/auth/userinfo.profile']
}));

app.get('/auth/google/callback',
    passport.authenticate('google', {
        failureRedirect: '/'
    }),
    (req, res) => {
        console.log(req.user.token, req.user.profile);
		req.session.token = req.user.token;
		res.cookie('token', req.session.token);
        res.redirect('/app');
    }
);

  app.set('port', process.env.PORT || 3000)

const server = app.listen(app.get('port'), () => {
    console.log('running on port:' + app.get('port'))
  })