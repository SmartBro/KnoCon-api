const faker = require('faker');
const booksRouter = require('express').Router();

booksRouter.get('/', (req, res) => {
    const mock = [];
    const MAX_BOOKS = 20;
    for(let i = 0; i < MAX_BOOKS; i++)
        mock.push({
            id: faker.random.number(),
            imageUrl: faker.image.imageUrl(),
            name: faker.company.companyName(),
            desc: faker.lorem.paragraph()
        });

    res.json(mock);
});

booksRouter.get('/:bookId', (req, res) => {
    const mock = {
        id: req.params.bookId,
        imageUrl: faker.image.imageUrl(),
        name: faker.company.companyName(),
        desc: faker.lorem.paragraph()
    };

    res.json(mock);
});

module.exports = booksRouter;
