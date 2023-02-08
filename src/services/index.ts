import { NASA_API_KEY } from "../secrets";

interface PhotosData {
  date: string;
  cameraType: string;
}

export default async function fetchPhotos(data: PhotosData) {
  const { date, cameraType } = data;
  try {
    const response = await fetch(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&camera=${cameraType}&api_key=${NASA_API_KEY}`
    );
    if (response.status !== 200) throw Error("Incorrect data provided");
    const imgData = await response.json();
    return { photos: imgData.photos, success: true };
  } catch (err) {
    return { errorMsg: err, success: false };
  }
}
