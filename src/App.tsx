// src/App.tsx
import React, { useEffect } from "react";
import ClickerGame from "./pages/ClickerGame";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { ApolloProvider } from "@apollo/client";
import client from "./ApolloClient";

const theme = createTheme({
  palette: {
    primary: {
      main: "#007bff",
    },
  },
});

//const telegram= window.Telegram.WebApp;
const App: React.FC = () => {
  useEffect(() => {
    if (window.Telegram.WebApp) {
      const telegram = window.Telegram.WebApp;

      // Initialize the Web App when the page loads
      telegram.ready();

      // Optionally set theme parameters or configure the app
      telegram.expand(); // This makes the app expand to full view

      // You can interact with the bot’s data here, e.g., user info
      console.log("User: ", telegram.initDataUnsafe?.user);
    }
  }, []);
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* <Container maxWidth="sm"> */}
        <ClickerGame />
        {/* </Container> */}
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;
