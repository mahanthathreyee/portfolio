const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    port: process.env.PORT,
    sessionSecret: process.env.SESSION_SECRET
}