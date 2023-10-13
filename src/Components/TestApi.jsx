import { useEffect, useState } from "react";
import { search, getMovie } from "./api.js";

const TestApi = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    let response = await search("star wars");
    setData(response.results);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {data.map((movie, index) => (
        <div>
          <h2>{movie.original_title}</h2>
          <img src={"https://image.tmdb.org/t/p/original/" + movie.poster_path} width="300"></img>
        </div>
      ))}
    </div>
  );
};

export default TestApi;
