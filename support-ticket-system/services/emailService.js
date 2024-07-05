const http = require('https');

const apiKey = process.env.RAPID_API_KEY;
const apiUrl = 'rapidmail.p.rapidapi.com';

const options = {
	method: 'POST',
	hostname: 'rapidmail.p.rapidapi.com',
	port: null,
	path: '/',
	headers: {
		'x-rapidapi-key': '',
		'x-rapidapi-host': 'rapidmail.p.rapidapi.com',
		'Content-Type': 'application/json'
	}
};

exports.sendNotification = (to, subject, text) => {
	const req = http.request(options, function (res) {
		const chunks = [];

		res.on('data', function (chunk) {
			chunks.push(chunk);
		});

		res.on('end', function () {
			const body = Buffer.concat(chunks);
			console.log(body.toString());
		});
	});

	req.write(JSON.stringify({
	  ishtml: 'false',
	  sendto: to,
	  name: 'Support Ticket System API',
	  replyTo: 'adityadevaguptapu383@gmail.com',
	  title: subject,
	  body: text
	}));
	req.end();
};
