import { useState } from "react";
import { Container, Box } from "@material-ui/core";
import { LoginModal } from "../../components/Header/LoginModal";
import { makeStyles } from "@material-ui/core/styles";
import backgroundPicture from "./img/main.jpg";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    background: `url(${backgroundPicture}) center / cover no-repeat`  
  },
}));

export const LoginPage = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(true);

  const handleLoginModalClose = () => {
    setOpen(false);
  };

  return (
    <Container component={Box} className={classes.root}>
      <LoginModal isOpen={open} onClose={handleLoginModalClose} />
    </Container>
  );
};
