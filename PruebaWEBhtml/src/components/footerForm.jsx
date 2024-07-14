import React from "react";
import { Typography, Box } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#1976d2",
        color: "#fff",
        textAlign: "center",
        padding: "10px",
        position: "fixed",
        bottom: "0",
      }}
    >
      <Typography variant="body1">
        Powered By Angel Sarango
      </Typography>
    </Box>
  );
};

export default Footer;
