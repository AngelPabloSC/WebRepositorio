import React from "react";
import {
  Menu,
  IconButton,
  Typography,
  Toolbar,
  Box,
  AppBar,
} from "@mui/material";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
         
          <Box sx={{ flexGrow: 1 ,display: "flex"}}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <Menu />
            </IconButton>
            <Typography variant="h6" color="inherit" component="div">
              <a style={{ textDecoration: "none", color: "inherit" }}>
                Noticias
              </a>
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
            <Typography variant="body1" color="inherit" component="div" sx={{ mx: 2 }}>
              <a href="/deportes" style={{ textDecoration: "none", color: "inherit" }}>
                Deportes
              </a>
            </Typography>
            <Typography variant="body1" color="inherit" component="div" sx={{ mx: 2 }}>
              <a href="/economia" style={{ textDecoration: "none", color: "inherit" }}>
                Economía
              </a>
            </Typography>
            <Typography variant="body1" color="inherit" component="div" sx={{ mx: 2 }}>
              <a href="/social" style={{ textDecoration: "none", color: "inherit" }}>
                Social
              </a>
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "flex-end" }}>
            <IconButton color="inherit" aria-label="facebook">
              <Facebook />
            </IconButton>
            <IconButton color="inherit" aria-label="instagram">
              <Instagram />
            </IconButton>
            <IconButton color="inherit" aria-label="twitter">
              <Twitter />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
