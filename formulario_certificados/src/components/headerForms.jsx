// eslint-disable-next-line no-unused-vars
import React from "react";
import { AppBar, Toolbar, Box } from "@mui/material";
import Logo from "../assets/image/uide.png";

const Header = () => {
  return (
    <Box
      style={{
        width: "100%",
        height: "100%",
        margin: "auto",     
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      
        
      }}
    >
      <AppBar position="static" >
        <Toolbar>
          <Box display="flex" justifyContent="center" width="100%">
            <img src={Logo} alt="Logo" width={200} height={50} />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
