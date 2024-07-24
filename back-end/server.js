const con = require("./src/db/connect")
const express = require("express");
const cors = require('cors');
require("dotenv").config();

const HospitalRouter = require("./src/routes/Hospital.route");
const AuthRouter = require("./src/routes/Auth.route");

const app = express();

const PORT = process.env.PORT || 10000; // Default to 10000 if PORT is not set

app.use(cors());
app.use(express.json());

app.use('/api/v1/hospitals', HospitalRouter);
app.use('/api/v1/auth', AuthRouter);

// Start the server and set the host to '0.0.0.0'
const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});

// Increase server timeout values
server.keepAliveTimeout = 120000; // 120 seconds
server.headersTimeout = 120000;   // 120 seconds
