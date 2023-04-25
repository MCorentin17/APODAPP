//  Call Api for feed of Pictures
export function Api() {
    return fetch(
      "https://api.nasa.gov/planetary/apod?api_key=oSYEis9hTQWp8hcqfoR1wPqkcoAxQcQGEYUhsiO2&start_date=2023-04-01&concept_tags=True&hd=True"
    ).then((res) => res.json());
  }

