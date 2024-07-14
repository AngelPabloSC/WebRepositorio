import React from "react";
import Header from "../components/headerForms";

import ReservationForm from "../components/ReservationForm";

import { Box } from "@mui/material";

const FormPage = () => {
  return (
    <>
      <Box style={{ backgroundColor: "#C0C0C0" }}>
        <Box
          style={{
            width: "100%",
            height: "100%",
            margin: "auto",
            background: "red"  
          }}
        >
          <Header />
        </Box>
        <Box style={{ padding: "8px" }}></Box>
        <Box
          style={{
            background: "#fff",
            margin: "auto",
            borderRadius: "30px",
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            marginTop: "10px",
            padding: "20px",
            width: "60%",
          }}
        >
          <Box
            style={{
              width: "90%",
              height: "100%",
              margin: "auto",
            }}
          >
            <ReservationForm />
          </Box>
        </Box>
        <Box style={{ padding: "10px" }}></Box>
      </Box>
    </>
  );
};

export default FormPage;
