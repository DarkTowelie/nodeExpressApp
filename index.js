const express = require('express');
let path = require('path');
let bodyParser = require('body-parser');
const mailer = require('./nodemailer');

const app = express();
user = undefined;

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.post('/', (req, res) => {
	user = req.body;
	if (!nameTest(user) && !sNameTest(user) && !emailTest(user))
	{
		console.log(req.body.email);
		const message ={
			from: 'Mailer Test <darktowelie@mail.ru>',
			to: req.body.email,
			subject: 'This is a test message',
			text: `Hello ${user.name} ${user.sName}!
			Thank you for using this form!
			`
		}
		mailer(message);
	}
	else
	{
		console.log(-1);
	}
})
const PORT = 3001;

app.get('/', (req, res)=> {
	return res.sendFile(__dirname +'/home.html');
})

app.get('/reg', (req, res)=> {
	return res.sendFile(__dirname +'/reg.html');
})

app.get('/bootstrap4', (req, res)=> {
	res.sendFile(__dirname +'/bootstrap4.html');
})

app.get('/work', (req, res)=> {
	res.sendFile(__dirname +'/work.html');
})

app.listen(PORT, () => console.log(`server listening at http://localhost:${PORT}`));

function emailTest(user)
{
	return !/^[A-Za-z@0-9.]+$/.test(user.email);
}

function nameTest(user)
{
	return !/^[A-Za-z]+$/.test(user.sName);
}

function sNameTest(user)
{
	return !/^[A-Za-z]+$/.test(user.name);
}