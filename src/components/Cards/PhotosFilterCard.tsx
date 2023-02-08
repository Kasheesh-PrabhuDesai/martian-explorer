import {
  Button,
  createStyles,
  Grid,
  makeStyles,
  Card,
  CardContent,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  OutlinedInput,
} from "@material-ui/core";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getTodaysDate } from "../../utils";

const useStyles = makeStyles(theme =>
  createStyles({
    button: {
      textTransform: "none",
      fontSize: "1.2rem",
    },
    formContainer: {
      marginTop: theme.spacing(12),
    },
    card: {
      width: "40vw",
      borderRadius: 12,
    },
    buttonContainer: {
      marginTop: theme.spacing(5),
    },
    label: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
  })
);

export default function FilterPhotos() {
  const classes = useStyles();
  const prevChosenDate = JSON.parse(localStorage.getItem("earth-date"));
  const [date, setDate] = useState<Date | string>(
    prevChosenDate ?? getTodaysDate()
  );
  // const [cameraType, setCameraType] = useState<string>("fhaz");
  const navigate = useNavigate();
  // const handleSelectCamera = (event: ChangeEvent<{ value: string }>) => {
  //   setCameraType(event.target.value);
  // };

  const handleSelectDate = (event: ChangeEvent<{ value: string }>) => {
    setDate(event.target.value);
    localStorage.setItem("earth-date", JSON.stringify(event.target.value));
  };

  const handleShowPhotos = () => {
    navigate("/photos", { state: { date: date } });
  };

  return (
    <Grid container justifyContent="center" className={classes.formContainer}>
      <form onSubmit={handleShowPhotos}>
        <Card className={classes.card}>
          <CardContent>
            <Grid container>
              <Grid item xs={12}>
                <InputLabel className={classes.label}>Earth Date</InputLabel>
                <TextField
                  type="date"
                  variant="outlined"
                  fullWidth
                  value={date}
                  onChange={handleSelectDate}
                  required
                  inputProps={{ min: "2012-08-06", max: getTodaysDate() }}
                />
              </Grid>
              {/* <Grid item xs={6}>
                <InputLabel className={classes.label}>Camera Type</InputLabel>
                <Select
                  fullWidth
                  input={<OutlinedInput placeholder="Choose one" />}
                  value={cameraType}
                  onChange={handleSelectCamera}
                  required
                >
                  <MenuItem value={"none"} style={{ display: "none" }}>
                    Choose a type
                  </MenuItem>
                  {Object.entries(CameraTypes).map(type => (
                    <MenuItem value={type[0]}>{type[1]}</MenuItem>
                  ))}
                </Select>
              </Grid> */}
            </Grid>
            <Grid
              container
              justifyContent="center"
              className={classes.buttonContainer}
            >
              <Button
                variant="contained"
                className={classes.button}
                color="primary"
                type="submit"
              >
                Blast off 🚀
              </Button>
            </Grid>
          </CardContent>
        </Card>
      </form>
    </Grid>
  );
}
