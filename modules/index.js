const apiRouter = require('express').Router();
const booksRouter = require('./books/router');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27018/knocon');

apiRouter.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8080");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

apiRouter.use('/books', booksRouter);

module.exports = apiRouter;
