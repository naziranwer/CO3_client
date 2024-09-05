import React from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { UserInfo } from "../types/UserType";

interface NavbarProps {
  user: UserInfo;
}
const Navbar: React.FC<NavbarProps> = ({ user }) => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#1b1a28" }}>
      <Toolbar sx={{ justifyContent: "space-between", alignItems: "center" }}>
        <Typography variant="h6">TapMeApp</Typography>

        <Box display="flex" alignItems="center" mr={3}>
          <Typography variant="body1" ml={1} display="flex" alignItems="center">
            {user.first_name || "User"}
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
