import React from "react";
import { Container, Typography, Grid } from "@mui/material";
import logo from "../assets/image/economi.jpeg";

const Economi = () => {
  return (
    <Container sx={{ padding: "20px" }}>
      <Grid>
        <Typography variant="h2">
          La gestión del crédito y la morosidad en el credit management
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
            La Barcelona Finance School (BFS), Crédito y Caución y su filial
            Iberinform han cerrado un acuerdo de colaboración para impulsar un
            plan de estudios centrado en la gestión del riesgo y la morosidad
            para profundizar en el ámbito del credit management. La primera
            edición del programa, de 36 horas, será impartida entre los meses de
            abril y mayo en formato híbrido, en modalidad presencial y
            streaming, a través del campus de la BFS. La gestión del crédito
            comercial tiene un impacto directo en la rentabilidad empresarial.
            De acuerdo con las estimaciones de la Comisión Europea, en una de
            cada cuatro quiebras la empresa fabrica productos o presta servicios
            competitivos, pero no gestiona eficazmente el riesgo de crédito
            comercial, lo que impacta en sus flujos de cobro. Los seguros de
            crédito de Crédito y Caución y las soluciones de analítica avanzada
            de Iberinform permiten a miles de empresas minimizar los riesgos de
            crédito que asumen en sus operaciones comerciales. La alianza
            educativa con la Barcelona Finance School, la escuela de finanzas
            del Instituto de Estudios Financieros, impulsará la adquisición de
            conocimientos fundamentales en el ámbito del credit management. El
            programa de formación está dirigido a los profesionales de los
            departamentos técnicos y comerciales que quieran conocer a fondo las
            técnicas de análisis de nuevos clientes, las estrategias en la
            concesión del crédito comercial, la metodología para el seguimiento
            del riesgo vivo, los procedimientos preventivos para reducir el
            riesgo de crédito en los aplazamientos de pago, los tipos de
            garantías paras reforzar el derecho de cobro, redacción de políticas
            de crédito, control de los saldos de cuentas por cobrar, detección
            temprana de situaciones anómalas, optimización del periodo medio de
            cobro, metodologías e instrumentos de recobro y habilidades y
            técnicas de negociación en la gestión de facturas impagadas.
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

export default Economi;
