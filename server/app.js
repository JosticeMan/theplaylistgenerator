const express = require('express');
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const whitelist = ['http://localhost:3000', 'https://theplaylistgenerator.tech', 'http://theplaylistgenerator.tech'];
const corsOptions = {
    origin: function (origin, callback) {
        // logger.info("ORIGIN", origin);
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }, credentials: true
}
app.use(cors(corsOptions));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
