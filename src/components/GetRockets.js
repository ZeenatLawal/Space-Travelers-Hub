const getReservation = async () => {
  let result = [];
  await fetch('https://api.spacexdata.com/v3/rockets')
    .then((response) => response.json())
    .then((data) => {
      result = data.map((rocket) => ({
        id: rocket.id,
        rocket_name: rocket.rocket_name,
        description: rocket.description,
        flickr_images: rocket.flickr_images,
      }));
    });
  return result;
};

export default getReservation;
