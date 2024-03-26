const express = require('express');

const PORT = 3000;

const app = express();
app.set("view engine", "ejs");

app.get('/home', (req, res) => {
    res.render('home');
});
app.get('/student', (req, res) => {
    res.render('student');
});
app.get('/add-student', (req, res) => {
    res.render('add-student');
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));
