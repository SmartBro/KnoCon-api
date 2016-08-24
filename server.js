const app = require('express')();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const apiRouter = require("./modules");
app.use('/api/v1', apiRouter);

const server = app.listen(3000, function () {
    console.log(`Listening on port ${server.address().port}`);
});