import React from "react";
import { Box, Typography } from "@mui/material";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

interface HeaderProps {
  coinBalance: number;
}
const Header: React.FC<HeaderProps> = ({ coinBalance }) => {
  return (
    <Box
      sx={{
        color: "#fff",
        display: "flex",
        justifyContent: "center",

        marginTop: "10px",
      }}
    >
      <Box
        display="flex"
        alignItems="center"
        sx={{ backgroundColor: "#1b1a28", padding: "10px" }}
      >
        <Typography variant="body1" ml={1} display="flex" alignItems="center">
          <MonetizationOnIcon />
          <span style={{ marginLeft: 4 }}>{coinBalance}</span>
        </Typography>
      </Box>
    </Box>
  );
};

export default Header;
