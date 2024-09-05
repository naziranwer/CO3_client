import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { Box } from "@mui/material";

import Footer from "../components/Footer";
import Header from "../components/Header";
import MainCoinArea from "../components/MainCoinArea";
import Navbar from "../components/Navbar";

const TAP_COIN_MUTATION = gql`
  mutation TapCoin($email: String!) {
    tapCoin(email: $email)
  }
`;

const ClickerGame: React.FC = () => {
  const [email] = useState<string>("anwernazir@gmail.com");
  const [coinBalance, setCoinBalance] = useState<number>(0);
  const [tapCoin] = useMutation(TAP_COIN_MUTATION);
  const [showPlusOne, setShowPlusOne] = useState<boolean>(false);

  const handleTap = async () => {
    try {
      const response = await tapCoin({ variables: { email } });
      if (response.data.tapCoin === "Coin count updated successfully.") {
        setCoinBalance((prev) => prev + 1);
        triggerPlusOneAnimation();
      }
    } catch (error) {
      console.error(`Error on tap: ${(error as Error).message}`);
    }
  };

  const triggerPlusOneAnimation = () => {
    setShowPlusOne(true);
    setTimeout(() => {
      setShowPlusOne(false);
    }, 1000); // Duration for the "+1" animation display
  };

  return (
    <Box
      height="100vh"
      display="flex"
      flexDirection="column"
      sx={{ backgroundColor: "#41313d" }}
    >
      <Navbar />
      <Header coinBalance={coinBalance} />
      <MainCoinArea showPlusOne={showPlusOne} handleTap={handleTap} />
      <Footer />
    </Box>
  );
};

export default ClickerGame;
