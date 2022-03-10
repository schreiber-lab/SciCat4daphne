import { Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    title: {
      flexGrow: 1,
      marginTop: theme.spacing(4),
      fontSize: 30,
    },
  }));

export const ForbiddenPage = () => {
    const classes = useStyles();
    return (
        
        <Typography align="center" color="primary" className={classes.title}> 
            This page does not exist 
        </Typography>
    )
}
