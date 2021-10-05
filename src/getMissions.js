const getMissions = async () => {
  const request = await fetch('https://api.spacexdata.com/v3/missions');
  const result = await request.json();
  return result;
};

export default getMissions;
