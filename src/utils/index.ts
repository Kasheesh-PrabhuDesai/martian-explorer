export const CameraTypes = {
  fhaz: "Front Hazard Avoidance Camera",
  rhaz: "Rear Hazard Avoidance Camera",
  mast: "Mast Camera",
  chemcam: "Chemistry and Camera Complex",
  mahli: "Mars Hand Lens Imager",
  mardi: "Mars Descent Imager",
  navcam: "Navigation Camera",
};

export const getTodaysDate = () => {
  var today = new Date();
  var dd: string | number = today.getDate();
  let mm: string | number = today.getMonth() + 1;
  var yyyy = today.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }
  return yyyy + "-" + mm + "-" + dd;
};
