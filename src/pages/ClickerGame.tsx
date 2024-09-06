import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MainCoinArea from "../components/MainCoinArea";
import Navbar from "../components/Navbar";
import { UserInfo } from "../types/UserType";
import { useGetUserCoins, useTapCoin } from "../lib/hooks/useUser";

const ClickerGame: React.FC = () => {
  const location = useLocation();
  const [userInfo, setUserInfo] = useState<UserInfo>({
    user_id: "",
    first_name: "",
    last_name: "",
    username: "",
  });

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const userId = query.get("user_id");
    if (userId) {
      setUserInfo({
        user_id: userId,
        first_name: query.get("first_name") || "",
        last_name: query.get("last_name") || "",
        username: query.get("username") || "",
      });
    }
  }, [location.search]);

  const { data: coinsData, refetch: refetchCoins } = useGetUserCoins(
    userInfo.user_id
  );
  const [tapCoin] = useTapCoin();
  const [coinBalance, setCoinBalance] = useState<number>(
    coinsData?.getUser.coins || 0
  );
  const [showPlusOne, setShowPlusOne] = useState<boolean>(false);

  useEffect(() => {
    if (coinsData?.getUser.coins !== undefined) {
      setCoinBalance(coinsData.getUser.coins);
    }
  }, [coinsData]);
  const handleTap = async () => {
    try {
      const response = await tapCoin({
        variables: { email: userInfo.user_id },
      });
      if (
        response.data?.tapCoin === "Coin count updated successfully." ||
        "New user created and coin count set to 1."
      ) {
        const { data } = await refetchCoins();
        if (data?.getUser.coins !== undefined) {
          console.log("on fist click", data.getUser.coins);
          setCoinBalance(data.getUser.coins);
        }
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
    }, 1000);
  };

  return (
    <Box
      height="100vh"
      display="flex"
      flexDirection="column"
      sx={{ backgroundColor: "#41313d" }}
    >
      <Navbar user={userInfo} />
      <Header coinBalance={coinBalance} />
      <MainCoinArea showPlusOne={showPlusOne} handleTap={handleTap} />
      <Footer />
    </Box>
  );
};

export default ClickerGame;
