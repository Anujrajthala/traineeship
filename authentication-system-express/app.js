require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db')

const app = express();

app.use(express.json());
app.use(cors())

connectDB();

app.use('/api/auth', require('./routes/auth'));

module.exports = app;