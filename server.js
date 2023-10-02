const express = require('express');
const path = require('path');
const dotenv = require('dotenv');


dotenv.config();
const app = express();
const { handleLogEvent } = require(path.join(__dirname, 'middleware', 'loggingUtility.js'));

const PORT = process.env.PORT || 9000;

app.use((req, res, next) => {
    handleLogEvent(`${req.method}\t${req.headers.origin}\t${req.url}`);
    next();
});

app.use(express.static(path.join(__dirname, 'build')));





app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/courses', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/faq', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/calendar', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/enrollment', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/paymentlinks', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/login', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(
    PORT,
    () => handleLogEvent(`Listening on Port ${PORT}`)
);


