import {API_KEY} from '@env';

//  Fetch image for April-2023 
export async function Api() {
  const apiKey = API_KEY
  try {
    const response = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&start_date=2023-04-01&concept_tags=True&hd=True`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("An error occurred while retrieving data from the API: ", error)
  }
}


// Function for get a elements of API 
export const getPict = () => {
  return Api().then((data) => {
    const newImgList = data.map((item, index) => ({
      id: index,
      url: item.url,
      title: item.title,
      date: item.date,
      explanation: item.explanation,
    }));
    return newImgList;
  });
};

// Fetch a single image by date
const fetchImageByDate = (date) => {
  const apiKey = API_KEY
  const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`;
  return fetch(url)
    .then((response) => response.json())
    .then((data) => ({
      id: 0,
      url: data.url,
      title: data.title,
      date: data.date,
      explanation: data.explanation,
    }))
    .catch((error) => console.error(error));
}

// Function to get a single image by date 
export const getPictByDate = (date) => {
  return fetchImageByDate(date).then((data) => [data]);
};
