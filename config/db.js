const mysql = require('mysql2');

const conn = mysql.createConnection({
  host: process.env.MYSQLHOST || "127.0.0.1",
  user: process.env.MYSQLUSER || "root",
  password: process.env.MYSQLPASSWORD || "",
  database: process.env.MYSQLDATABASE || "crud_auth",
  port: process.env.MYSQLPORT || 3306
});

conn.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
    return;
  }
  console.log("Database connected!");
});

module.exports = conn;