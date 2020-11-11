const { createCanvas, registerFont, Image } = require('canvas');
const bodyParser = require('body-parser');
const Express = require('express');
const crypto = require('crypto');
const morgan = require('morgan');
const path = require('path');
const fs = require('fs');

require('dotenv').config();

registerFont('./fonts/Proxima Nova Condensed.otf', { family: 'Proxima' })


const app = Express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('combined'));

function makeBoo(first, second) {
	var canvas = createCanvas(526, 271);
	var ctx = canvas.getContext('2d');

	const img = new Image();
	img.src = 'boo.png';

	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

	ctx.font = '15px Proxima';
	ctx.fillStyle = 'black';
	ctx.fillText(first, 30, 75);
	ctx.fillText(second, 264, 75);
	return canvas.toDataURL();

}

app.post('/boo', (req, res) => {
	let first = req.body.first;
	let second = req.body.second;

	let data = makeBoo(first, second);
	
	res.send({success: true, data: data});
});


app.listen(port, () => {
	console.log(`listening on port ${port}`)
});