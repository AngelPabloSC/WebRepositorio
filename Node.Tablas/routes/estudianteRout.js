const express = require('express');
const router = express.Router();
var con = require('../config/dbConfing');

router.post('/', (req, res) => {
    res.render('index', { title: 'Express' });

  const { firstname, secondname, carrera_id } = req.body;

  const sql = `INSERT INTO Estudiante (firstname, secondname, carrera_id) VALUES (?, ?, ?)`;
  const values = [firstname, secondname, carrera_id];

  con.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error al insertar el estudiante:', err);
      
    } else {
      console.log('Estudiante insertado correctamente');
    
    }
  });
});


module.exports = router;
