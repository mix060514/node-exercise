const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/text', (req, res) => {
    res.send('Hello World!');
});

app.get('/json', (req, res) => {
    res.json({ message: 'Hello World!' })
});

// http://localhost:3000/user/TimChen
app.get('/user/:username', (req, res) => {
    const { username } = req.params;
    res.send(`Hello ${username}!`);
})

app.get('/search', (req, res) => {
    const { keyword = "" } = req.query;
    res.send(`The keyword is ${keyword}`);
})


const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
})
