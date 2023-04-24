import { useState } from "react";


export default function Api() {
    const [img, setImg] = useState("");
  
    const getPict = () => {
      fetch(
        "https://api.nasa.gov/planetary/apod?api_key=oSYEis9hTQWp8hcqfoR1wPqkcoAxQcQGEYUhsiO2"
      )
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setImg(data.url);
          console.log(img);
        });
    };
    getPict();
}

Api()