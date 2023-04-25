//  Call Api for feed of Pictures
export function Api() {
    return fetch(
      "https://api.nasa.gov/planetary/apod?api_key=oSYEis9hTQWp8hcqfoR1wPqkcoAxQcQGEYUhsiO2&count=20&concept_tags=True"
    ).then((res) => res.json());
  }

