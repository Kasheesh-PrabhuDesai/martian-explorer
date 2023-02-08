import { createStyles, Grid, makeStyles, Typography } from "@material-ui/core";
import FilterPhotos from "../../components/Cards/PhotosFilterCard";

const useStyles = makeStyles(theme =>
  createStyles({
    container: {
      width: "100vw",
      height: "100vh",
      background: "url('/images/mars.jpeg')",
      opacity: 0.9,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      justifyContent: "center",
    },
    text: {
      color: "#fff",
    },
    button: {
      textTransform: "none",
      fontSize: "1.5rem",
    },
    contentContainer: {
      flexDirection: "column",
      alignItems: "center",
      margin: theme.spacing(10),
    },
  })
);

export default function HomePage() {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid container className={classes.contentContainer} spacing={2}>
        <Grid item>
          <Typography variant="h3" className={classes.text}>
            Are you ready to explore Mars like never before?
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h5" className={classes.text}>
            Use the form below to start exploring
          </Typography>
        </Grid>
        <Grid item>
          <FilterPhotos />
        </Grid>
      </Grid>
    </Grid>
  );
}
