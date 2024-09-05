import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { AnimatePresence, motion, useAnimation } from "framer-motion";

interface MainCoinAreaProps {
  showPlusOne: boolean;
  handleTap: () => void;
}

const MainCoinArea: React.FC<MainCoinAreaProps> = ({
  showPlusOne,
  handleTap,
}) => {
  const controls = useAnimation();

  useEffect(() => {
    const animateText = async () => {
      await controls.start({
        opacity: [0, 1],
        scale: [0.8, 1],
        transition: { duration: 0.5, ease: "easeInOut" },
      });
      controls.start({
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: "easeInOut" },
      });
    };

    const interval = setInterval(animateText, 2000);

    return () => clearInterval(interval);
  }, [controls]);

  return (
    <Box
      flex={1}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      position="relative"
    >
      <motion.img
        src="/coin-removebg-preview.png"
        alt="Coin"
        style={{
          width: "300px",
          height: "300px",
          marginBottom: "20px",
          cursor: "pointer",
        }}
        whileTap={{ scale: 1.2 }}
        transition={{ duration: 0.2 }}
        onClick={handleTap}
      />

      <AnimatePresence>
        {showPlusOne && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: -200 }}
            exit={{ opacity: 0, y: -200 }}
            transition={{ duration: 0.8 }}
            style={{
              position: "absolute",
              top: "40%",
              zIndex: 10,
              color: "#fff",
              fontSize: "3rem",
            }}
          >
            +1
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        animate={controls}
        initial={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={{
          position: "relative",
          fontSize: "1.5rem",
          fontWeight: "bold",
          color: "#fff",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
        }}
      >
        <Typography variant="h6">Tap on Coin</Typography>
      </motion.div>
    </Box>
  );
};

export default MainCoinArea;
