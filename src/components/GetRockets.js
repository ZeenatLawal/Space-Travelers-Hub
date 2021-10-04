const getReservation = async () => {
  const newResponse = [];
  await fetch('https://api.spacexdata.com/v3/rockets')
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i <= data.length - 1; i += 1) {
        const item = {};
        item.rocket_name = data[i].rocket_name;
        item.description = data[i].description;
        item.flickr_images = data[i].flickr_images;
        newResponse.push(item);
      }
    });
  return newResponse;
};

export default getReservation;
