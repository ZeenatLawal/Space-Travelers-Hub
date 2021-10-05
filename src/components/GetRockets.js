const getReservation = async () => {
  const response = await fetch('https://api.spacexdata.com/v3/rockets');
  const result = await response.json();
  const data = await result.map((rocket) => ({
    id: rocket.id,
    rocket_name: rocket.rocket_name,
    description: rocket.description,
    flickr_images: rocket.flickr_images,
  }));
  return data;
};

export default getReservation;
