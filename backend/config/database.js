const mysql = require("mysql");

let connection = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "",
  database: "marketani",
});

connection.connect(function (err) {
  if (!!err) {
    console.log(err);
  } else {
    console.log("Connected");
  }
});

module.exports = connection;
