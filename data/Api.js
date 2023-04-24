


export function Api() {
    return fetch(
      "https://api.nasa.gov/planetary/apod?api_key=oSYEis9hTQWp8hcqfoR1wPqkcoAxQcQGEYUhsiO2"
    ).then((res) => res.json());
  }