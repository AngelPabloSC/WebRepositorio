import React from "react";
import { Container, Typography, Grid } from "@mui/material";
import logo from "../assets/image/social.jpg";

const Social = () => {
  return (
    <Container sx={{ padding: "20px" }}>
      <Grid>
        <Typography variant="h2">
          Oficina virtual de la Judicatura permitirá ingreso de peticiones y
          escritos las 24 horas del día 
        </Typography>
      </Grid>
      <hr
        style={{
          borderTop: "2px solid blue",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      />
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} sx={{ height: "500px", width: "200px" }}>
          <img src={logo} alt="" style={{ width: "100%", height: "100%" }} />
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="body1" style={{ marginBottom: "20px" }}>
            Con cuatro votos afirmativos, el Pleno del Consejo de la Judicatura
            aprobó, este jueves 30 de mayo de 2024, una reforma al Reglamento de
            Gestión Judicial por Medios Electrónicos. Con esto, se actualizó el
            horario de funcionamiento de la Oficina de Gestión Judicial
            Electrónica, sistema principalmente utilizado por usuarios externos
            como funcionarios de Fiscalía, abogados en libre ejercicio e
            instituciones públicas y privadas. Cancillería de Ecuador habilitará
            obtención de visas y apostillas electrónicas Por este canal,
            actualmente la ciudadanía puede acceder a cuatro servicios
            judiciales. Estos son: Módulo de Ingreso de Peticiones Iniciales en
            Línea Módulo de Ingreso de Escritos Casillero Judicial Electrónico
            Revisión de procesos judiciales Todos los servicios serán 24/7 Antes
            de la medida adoptada este 30 de mayo, los servicios virtuales de
            Ingreso de Peticiones y Ingreso de Escritos solo eran admitidos en
            horario de 08:00 a 17:00. Mientras que los trámites en línea de
            Casillero Judicial Electrónico y Revisión de procesos sí estaban
            disponibles las 24 horas del día, todos los días de la semana. 
          </Typography>
          <hr
            style={{
              borderTop: "2px solid blue",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Social;
