const mysql = require('mysql2');

const conn = mysql.createConnection({
  host: "hopper.proxy.rlwy.net",
  user: "root",
  password: "PxDCykBdRXvDkqEmIjIsjHUjsOCgplOr",
  database: "railway",
  port: 24893 
});

conn.connect(err => {
  if (err) throw err;
  console.log('Connected!');
});

module.exports = conn;
