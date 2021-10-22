const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const port = 5000;

app.get('/', (req, res) => {
	res.send('Hello Nodemon ok');
});
const users = [
	{ id: 0, name: 'me', email: 'me@gmail.com' },
	{ id: 1, name: 'you', email: 'you@gmail.com' },
	{ id: 2, name: 'he', email: 'he@gmail.com' },
	{ id: 3, name: 'she', email: 'she@gmail.com' },
];
app.get('/users', (req, res) => {
	const search = req.query.search;
	if (search) {
		const searchResults = users.filter((user) =>
			user.name.toLowerCase().includes(search)
		);
		res.send(searchResults);
	} else {
		res.send(users);
	}
});
//Post
app.post('/users', (req, res) => {
	const newUser = req.body;
	newUser.id = users.length;
	users.push(newUser);
	console.log('post hitting', req.body);
	res.json(newUser);
});
app.get('/users/:id', (req, res) => {
	const id = req.params.id;
	const user = users[id];
	res.send(user);
});
app.listen(port, () => {
	console.log('listening ', port);
});
