import React from "react";
import { Box } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

interface MainCoinAreaProps {
  showPlusOne: boolean;
  handleTap: () => void;
}
const MainCoinArea: React.FC<MainCoinAreaProps> = ({
  showPlusOne,
  handleTap,
}) => {
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
    </Box>
  );
};

export default MainCoinArea;
