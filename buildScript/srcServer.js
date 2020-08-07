import express from 'express';
import path from 'path';
import open from 'open';

let port = 8000;
const app = express();

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, '../src/index.html'))
})

app.listen(port, function (error) { error ? console.log(error) : open(`http://localhost:${port}`) })
