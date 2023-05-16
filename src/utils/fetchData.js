export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    "X-RapidAPI-Key": "260b81f7dbmshb1a1a214448e95bp1cb727jsn358d3ce5d127",
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
    "X-RapidAPI-Key": "260b81f7dbmshb1a1a214448e95bp1cb727jsn358d3ce5d127",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  console.log("response data", response);
  const data = await response.json();
  console.log("real data ", data);
  return data;
};
