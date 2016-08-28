const faker = require('faker');
const booksRouter = require('express').Router();
const Book = require('./model');

booksRouter.get('/', (req, res) => {
    Book.find({}, (err, books) => {
        res.json(books);
    });
});

booksRouter.post('/', (req, res) => {
    const newBook = new Book(req.body, false);

    newBook.save((err, book) => {
        res.json(book);
    });
});

booksRouter.get('/:bookId', (req, res) => {
    Book.findById(req.params.bookId, (err, book) => {
        res.json(book);
    });
});

booksRouter.put('/:bookId', (req, res) => {
    Book.update({ _id: req.params.bookId }, req.body, (err, book) => {
        res.json(book);
    });
});

module.exports = booksRouter;
