const express = require('express');

const users = require('./routes/users');

const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(users);
app.get('/', (req, res, next) => {
	res.sendFile(path.join(__dirname, 'views', 'main.html'));
});

app.listen(3000);
