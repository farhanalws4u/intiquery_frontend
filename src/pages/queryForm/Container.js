import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import QueryForm from "./QueryForm";
import { Box } from "@mui/system";

function Container() {
  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <Header />
      <QueryForm />
      <Box sx={{ position: "absolute", bottom: 0, width: "100%" }}>
        <Footer />
      </Box>
    </div>
  );
}

export default Container;
