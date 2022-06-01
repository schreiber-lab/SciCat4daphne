import { createRef } from "react";
import { useSelector } from "react-redux";
import { useRoutes } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import MomentUtils from "@date-io/moment";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { CssBaseline, Box, IconButton } from "@material-ui/core";
import Close from "@material-ui/icons/Close";
import { Header } from "../components/Header";
import { routes } from "./routes";
import { ModalsProvider } from "../components";

function App() {
  const isAuthenticated = useSelector(({ auth }) => auth.isAuthenticated);
  const routesElement = useRoutes(routes({ isAuthenticated }));
  const notistackRef = createRef();
  const onClickDismiss = (key) => () => {
    notistackRef.current.closeSnackbar(key);
  };

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <SnackbarProvider
        hideIconVariant
        maxSnack={3}
        ref={notistackRef}
        action={(key) => (
          <IconButton color="inherit" onClick={onClickDismiss(key)}>
            <Close />
          </IconButton>
        )}
      >
        <ModalsProvider>
          <Box display="flex" flexDirection="column" height="100%">
            <Header />
            {routesElement}
            <CssBaseline />
          </Box>
        </ModalsProvider>
      </SnackbarProvider>
    </MuiPickersUtilsProvider>
  );
}

export default App;
