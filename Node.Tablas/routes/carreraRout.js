const express = require('express');
const router = express.Router();
const con = require('../config/dbConfing'); 

router.post('/', (req, res) => {
  const { Name, Description } = req.body;
  console.log(req.body);
  const sql = `INSERT INTO Carrera (Name, Description) VALUES (Name, Description)`; 
  const values = [Name, Description];

  // Ejecutar la consulta
  con.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error al insertar la carrera:', err);
      res.status(500).send('Error al insertar la carrera'); 
    } else {
      console.log('La carrera se ha insertado correctamente');
      res.status(200).send('La carrera se ha insertado correctamente'); 
    }
  });
});

module.exports = router;
