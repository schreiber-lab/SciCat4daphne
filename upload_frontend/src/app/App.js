import { createRef } from "react";
import { useSelector } from "react-redux";
import { useRoutes } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import { CssBaseline, Box, IconButton } from "@material-ui/core";
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';
import { Header } from "../components/Header";
import { routes } from "./routes";

function App() {
  const isAuthenticated = useSelector(({ auth }) => auth.isAuthenticated);
  const routesElement = useRoutes(routes({ isAuthenticated }));
  const notistackRef = createRef();
  const onClickDismiss = (key) => () => {
    notistackRef.current.closeSnackbar(key);
  };

  return (
    <SnackbarProvider
      hideIconVariant
      maxSnack={3}
      ref={notistackRef}
      action={(key) => (
        <IconButton color="inherit" onClick={onClickDismiss(key)}>
          <CancelPresentationIcon/>
        </IconButton>
      )}
    >
      <Box display="flex" flexDirection="column" height="100%">
        <Header />
        {routesElement}
        <CssBaseline />
      </Box>
    </SnackbarProvider>
  );
}

export default App;
