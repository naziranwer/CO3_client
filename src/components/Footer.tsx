import React from "react";
import { Box, Typography } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      py={3}
      textAlign="center"
      bgcolor="#1b1a28"
      color="white"
      display="flex"
      flexDirection={{ xs: "column", sm: "row" }}
      justifyContent="center"
      alignItems="center"
      gap={2}
    >
      <Typography variant="body2">
        &copy; {new Date().getFullYear()} TapMe App. All rights reserved.
      </Typography>
      <Typography variant="body2">Designed and developed by Nazir.</Typography>
    </Box>
  );
};

export default Footer;
