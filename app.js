const express = require('express');
const app = express();

app.use(express.static('public'));

// app.get('/', (request, response) => {
// 	response.send('<h1>Hallo Welt!</h1>');
// });

app.listen(3002, () => {
	console.log('Webserver laeuft unter port 3002');
});
