const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const { router } = require('./app/config/routes');
const { mongoose } = require('./app/config/database');

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.use(express.static(path.join(__dirname, './client/build/')));

app.use(cors());
app.use(express.json());

app.use('/', router);

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname + './client/build/index.html'));
});

app.listen(process.env.PORT || 5000, () => {
    console.log(`Listening on port ${port}`);
});