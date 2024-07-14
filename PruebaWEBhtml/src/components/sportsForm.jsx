import React from "react";
import { Container, Typography, Grid } from "@mui/material";
import logo from "../assets/image/notica1.jpg";

const Sports = () => {
  return (
    <Container sx={{ padding: "20px" }}>
      <Grid>
        <Typography variant="h2">
          La vicepresidencia, fuente de conflictos en América Latina
        </Typography>
      </Grid>
      <hr style={{ borderTop: "2px solid blue", marginTop: "20px", marginBottom: "20px" }} />
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} sx={{ height: "500px", width: "200px" }}>
          <img src={logo} alt="" style={{ width: "100%", height: "100%" }} />
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Typography variant="body1" style={{ marginBottom: "20px" }}>
            “Hago un llamado a la comunidad internacional. Es muy grave lo que
            está pasando. El Estado totalitario se impone”. La cita, sobre la
            situación política en Ecuador, podría ser atribuida a cualquier
            opositor al presidente Daniel Noboa. Sin embargo, la dijo su
            vicepresidenta, Verónica Abad, en la entrevista que le dio a El País
            hace pocos días. En la nota también dijo que teme por su vida si
            vuelve a su país. Abad está confinada en Israel por un decreto de
            Noboa, quien la envió allí como “embajadora” para mediar en el
            conflicto entre Israel y Palestina. Una función que, por supuesto,
            es imposible de cumplir. El presidente lo hizo aprovechando los
            grises de la Constitución ecuatoriana que le permiten decidir las
            funciones que cumplirá quien ocupe la vicepresidencia. Y tomó una
            medida radical: la mandó lo más lejos posible, de donde Abad no
            puede volver sin permiso de la Cancillería. Se trata de una relación
            que nació por conveniencia electoral pero hoy está completamente
            rota. Y a nadie debe sorprender: casi no existen fotos de los dos;
            mucho menos hay registros de alguna reunión o agenda en común. Y
            ahora Noboa acelera para sacarse de encima a Abad porque, si quiere
            ir por la reelección en 2025 (lo cual todos dan por hecho), debería
            cederle el mando a ella 45 días antes de los comicios. Algo que en
            el Gobierno ecuatoriano no quieren cumplir ni por asomo. Entonces la
            presionan para que renuncie.
          </Typography>
          <hr style={{ borderTop: "2px solid blue", marginTop: "20px", marginBottom: "20px" }} />
        </Grid>
        
      </Grid>
    </Container>
  );
};

export default Sports;
