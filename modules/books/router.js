const faker = require('faker');
const booksRouter = require('express').Router();
const Book = require('./model');

booksRouter.get('/', (req, res) => {
    Book.find({}, (err, books) => {
        res.json(books);
    });

});

booksRouter.get('/:bookId', (req, res) => {
    Book.findById(req.params.bookId, (err, books) => {
        res.json(books);
    });
});

module.exports = booksRouter;
