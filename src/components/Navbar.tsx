import React from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";

const Navbar: React.FC = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#1b1a28" }}>
      <Toolbar sx={{ justifyContent: "space-between", alignItems: "center" }}>
        <Typography variant="h6">TapMeApp</Typography>

        <Box display="flex" alignItems="center" mr={3}>
          <Typography variant="body1" ml={1} display="flex" alignItems="center">
            {"User"}
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
