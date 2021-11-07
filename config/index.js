const path = require('path');

module.exports = {
    PORT: process.env.PORT || 4000,
    HOST: process.env.HOST || '127.0.0.1',
    DB_PATH: process.env.DB_PATH || path.join(__dirname, "../data/db.json"),
};