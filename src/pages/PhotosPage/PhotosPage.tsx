import { Grid } from "@material-ui/core";
import PhotoCarousel from "../../components/PhotoCarousel";

export default function PhotosPage() {
  return (
    <Grid container>
      <Grid container justifyContent="center">
        <PhotoCarousel />
      </Grid>
    </Grid>
  );
}
