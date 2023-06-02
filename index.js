require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({ credentials: true, origin: ['http://localhost:8080', 'https://adricsm.github.io', 'http://127.0.0.1:5500'] }));

app.use(require('./router/router'));

app.listen(process.env.PORT, () => {
    console.info(`server running at port ${process.env.PORT}`);
});
