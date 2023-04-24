//  Call Api for feed of Pictures
export function Api() {
    return fetch(
      "https://api.nasa.gov/planetary/apod?api_key=oSYEis9hTQWp8hcqfoR1wPqkcoAxQcQGEYUhsiO2&count=4"
    ).then((res) => res.json());
  }

