const express = require('express');
const path = require('path');
const open = require('open');

let port = 8000;
const app = express();

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, '../src/index.html'))
})

app.listen(port, function (error) { error ? console.log(error) : open(`http://localhost:${port}`) })
