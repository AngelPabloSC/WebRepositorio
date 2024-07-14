// FormPage.jsx
import React from "react";
import { Box } from "@mui/material";
import Header from "../components/headerForm";
import Footer from "../components/footerForm";

import Body from "../components/dobyForms";

const FormPage = () => {
  return (
    <>
      <Box>
        <Header />
      </Box>
      <Box>
       <Body/>
      </Box>
      <Box>
        <Footer />
      </Box>
    </>
  );
};

export default FormPage;
