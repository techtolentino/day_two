var express = require('express'),
	path = require('path'),
	cookieParser = require('cookie-parser'),
	bodyParser = require('body-parser'),
	exphbs = require('express-handlebars'),
	expressValidator = require('express-validator'),
	flash = require('connect-flash'),
	session = require('express-session'),
	passport = require('passport'),
	LocalStrategy = require('passport-local').Strategy,
	mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_DB_DAY_TWO);
var db = mongoose.connection;

var routes = require('./routes/index');
var users = require('./routes/users');

// Init the app
var app = express();

// view engine
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({defaultLayout: 'layout', extname: '.hbs'}));
app.set('view engine', '.hbs');

// BodyParser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

// static folder
app.use(express.static(path.join(__dirname, 'public')));

// Express session
app.use(session({
	secret: 'secret',
	saveUninitialized: true,
	resave: true
}));

// Passport init
app.use(passport.initialize());
app.use(passport.session());

// Express validator
app.use(expressValidator({
    errorFormatter: function(param, msg, value){
        var namespace = param.split('.')
        , root = namespace.shift()
        , formParam = root;

        while(namespace.length){
            formParam += '[' + namespace.shift() + ']';
        }

        return {
            param: formParam,
            msg: msg,
            value: value
        };
    }
}));

// Connect flash
app.use(flash());

// Global vars
app.use(function(req, res, next) {
	res.locals.success_msg = req.flash('success_msg');
	res.locals.error_msg = req.flash('error_msg');
	res.locals.error = req.flash('error');
	next();
})

// routes middleware
app.use('/', routes);
app.use('/users', users);

// Set port
app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), function() {
	console.log('Server started on port ' + app.get('port'));
});