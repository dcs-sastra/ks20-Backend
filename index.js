const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

const keys = require('./config/keys');

// MondoDB connection configuration
mongoose.connect(keys.mongoURI, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
	console.log('connect mongoDB database');
});

//app third party-middlewares
app.use(bodyParser.json());

// app routes

const PORT = process.env.PORT;
app.listen(PORT || 5000, () => {
	console.log(`server got started on port ${PORT}`);
});
