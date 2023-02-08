import { createStyles, Grid, makeStyles, Typography } from "@material-ui/core";
import FilterPhotos from "../../components/Cards/PhotosFilterCard";

const useStyles = makeStyles(theme =>
  createStyles({
    container: {
      width: "100vw",
      minHeight: "100vh",
      background: "url('/images/mars.jpeg')",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      justifyContent: "center",
    },
    text: {
      color: "#fff",
      fontSize: "3rem",
      lineHeight: "3rem",
    },
    subtext: { color: "#fff", fontSize: "1.5rem" },
    button: {
      textTransform: "none",
      fontSize: "0.9rem",
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
          <Typography className={classes.text}>
            Are you ready to explore Mars like never before!
          </Typography>
        </Grid>
        <Grid item>
          <Typography className={classes.subtext}>
            Choose a date below to view all curiosity rover photos
          </Typography>
        </Grid>
        <Grid item>
          <FilterPhotos />
        </Grid>
      </Grid>
    </Grid>
  );
}
