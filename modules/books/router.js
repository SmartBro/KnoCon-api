const booksRouter = require('express').Router();
const Book = require('./model');

booksRouter.get('/', getAllBooks);
booksRouter.post('/', addBook);
booksRouter.get('/:bookId', getBookById);
booksRouter.put('/:bookId', updateBookById);
booksRouter.delete('/:bookId', deleteBookById);

module.exports = booksRouter;

function getAllBooks (req, res) {
    Book.find({}, (err, books) => {
        res.json(books);
    });
}

function getBookById (req, res) {
    Book.findById(req.params.bookId, (err, book) => {
        res.json(book);
    });
}

function addBook (req, res) {
    const newBook = new Book(req.body, false);

    newBook.save((err, book) => {
        res.json(book);
    });
}

function updateBookById (req, res) {
    Book.findOneAndUpdate(
        { _id: req.params.bookId },
        req.body,
        { new: true },
        (err, book) => {
            res.json(book);
        }
    );
}

function deleteBookById (req, res) {
    Book.where({ _id: req.params.bookId })
        .findOneAndRemove((err, book) => {
            res.json(book);
        });
}
