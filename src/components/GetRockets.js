const getRockets = async () => {
  const response = await fetch('https://api.spacexdata.com/v3/rockets');
  const result = await response.json();
  return result;
};

export default getRockets;
