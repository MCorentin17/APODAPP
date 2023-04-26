// Call to NASA's API 
export async function Api() {
  try {
    const response = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=oSYEis9hTQWp8hcqfoR1wPqkcoAxQcQGEYUhsiO2&start_date=2023-04-01&concept_tags=True&hd=True`
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
