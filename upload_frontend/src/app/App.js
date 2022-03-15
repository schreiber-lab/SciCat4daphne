import { useSelector } from "react-redux";
import { useRoutes } from "react-router-dom";
import { CssBaseline, Box } from "@material-ui/core";
import { Header } from "../components/Header";
import { routes } from "./routes";



function App() {
  const isAuthenticated = useSelector(({ auth }) => auth.isAuthenticated)
  const routesElement = useRoutes(routes({ isAuthenticated }));

  return (
    <Box display="flex" flexDirection="column" height="100%">
      <Header />
      {routesElement}
      <CssBaseline/>
      </Box>
  );
}

export default App;
