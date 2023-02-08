import {
  CircularProgress,
  createStyles,
  makeStyles,
  Grid,
  Typography,
  Button,
} from "@material-ui/core";
import { Fragment, useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import { useLocation, useNavigate } from "react-router-dom";
import fetchPhotos from "../../services";

const useStyles = makeStyles(theme =>
  createStyles({
    image: {
      objectFit: "contain",
      width: "100vw",
      height: "85vh",
    },
    container: {
      backgroundColor: "#F6F7FC",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    },
    loadingIcon: {
      width: 128,
      height: 128,
    },
    searchButton: {
      margin: 30,
      textTransform: "none",
      fontSize: "0.9rem",
    },
    imageCaption: {
      textAlign: "center",
    },
  })
);

export default function PhotoCarousel() {
  const classes = useStyles();
  const { state } = useLocation();
  const { date } = state;
  const [photosData, setPhotosData] = useState([]);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function getPhotos() {
      const response = await fetchPhotos({ date });
      if (response.success) {
        setPhotosData([...response.photos]);
      } else {
        setError(response.errorMsg as string);
      }
    }
    if (date) getPhotos();
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, [date]);

  useEffect(() => {
    if (!isLoading) {
      if (photosData.length === 0) {
        setError(
          "No photos could be found for the given camera type. Please try again!"
        );
        setTimeout(() => {
          navigate("/");
        }, 1500);
      }
    }
  }, [isLoading, navigate, photosData.length]);

  if (error) {
    return (
      <Grid container className={classes.container}>
        <Typography variant="h3">{error}</Typography>
      </Grid>
    );
  }

  return (
    <Grid container className={classes.container}>
      {isLoading ? (
        <Typography variant="h4">
          Fetching photos ....
          <span>
            <CircularProgress className={classes.loadingIcon} />
          </span>
        </Typography>
      ) : (
        <Fragment>
          <Grid container justifyContent="center">
            <Button
              variant="contained"
              color="primary"
              className={classes.searchButton}
              onClick={() => navigate("/")}
            >
              Search Again
            </Button>
          </Grid>
          <Carousel
            autoPlay={false}
            fullHeightHover={false}
            navButtonsAlwaysVisible
            indicators={false}
            cycleNavigation={false}
          >
            {photosData?.map(photo => (
              <>
                <img
                  src={photo["img_src"]}
                  alt={photo["camera"]["full_name"]}
                  className={classes.image}
                  key={photo["id"]}
                />
                <Typography variant="h5" className={classes.imageCaption}>
                  {photo?.camera?.full_name}
                </Typography>
              </>
            ))}
          </Carousel>
        </Fragment>
      )}
    </Grid>
  );
}
