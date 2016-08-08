const apiRouter = require('express').Router();
const booksRouter = require('./books');

apiRouter.use('/books', booksRouter);

module.exports = apiRouter;
