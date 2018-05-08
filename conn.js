// create the connection to database
const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'mydb',
  password:'password'
});

module.exports = connection;

// simple query
// connection.query(
//   'SELECT * FROM `users` ',
//   function(err, results, fields) {
//
//     for(let i=0; i<results.length;i++){
//       console.log(results[i].username, ': ',results[i].id);
//     }
//     //console.log(results[0].username); // results contains rows returned by server
//     //console.log("\n fields:\n");
//     //console.log(fields); // fields contains extra meta data about results, if available
//   }
// );
//
//
// connection.query(
//   'update `users`  set `username`=? WHERE `id` = ?',['lys2', 1],
//   function(err, results) {
//     //console.log(results);
//   }
// );
