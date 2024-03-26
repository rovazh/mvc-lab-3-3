const express = require('express');
const path = require('node:path');
const bodyParser = require('body-parser');

const PORT = 3000;

const students = [];

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded());

app.use((req, res, next) => {
    console.log(`Request ${req.method} on path ${req.path} ${new Date()}`);
    next();
});

app.use('/static', express.static('public'));

app.get('/home', (req, res) => {
    res.render('home');
});
app.post('/student', (req, res) => {
    const { firstname, lastname, studyField } = req.body;
    students.push({ firstname, lastname, studyField });
    res.render('student', { firstname, lastname, studyField });
});
app.get('/add-student', (req, res) => {
    res.render('add-student');
});
app.get('/students', (req, res) => {
    res.render('students', { students });
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));
