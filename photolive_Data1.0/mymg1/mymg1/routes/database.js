var mysql  = require('mysql');  
 
// var connection = mysql.createConnection({     
//   host     : '192.168.0.100',       
//   user     : 'root',              
//   password : 'root',       
//   port: '3307',                   
//   database: 'choujiang' 
// }); 
 
var mysql = require('mysql');
var pool  = mysql.createPool({     
    host     : '192.168.0.100',       
    user     : 'root',              
    password : 'root',       
    port: '3307',                   
    database: 'photo_live_plus' 
  });


// connection.connect();


module.exports = pool

 