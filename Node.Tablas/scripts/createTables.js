var con = require('../config/dbConfing');

var Carrera = `CREATE TABLE IF NOT EXISTS Carrera (
    id INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(50),
    Description VARCHAR(50)
  )`;
  
  con.query(Carrera, function (err, result) {
    if (err) throw err;
    console.log("Carrera table created");
  });
  
var Estudiantes = `CREATE TABLE IF NOT EXISTS Estudiante (
  id INT AUTO_INCREMENT PRIMARY KEY,
  firstname VARCHAR(15),
  secondname VARCHAR(15),
  carrera_id INT,
  FOREIGN KEY (carrera_id) REFERENCES Carrera(id) ON DELETE CASCADE
)`;

con.query(Estudiantes, function (err, result) {
  if (err) throw err;
  console.log("Estudiante table created");
});



con.end(function(err) {
  if (err) throw err;
  console.log("Connection closed");
});
