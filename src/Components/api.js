const apiKey = "5c7d12582c5635775b1cc2ce60b8eca9";
const baseUrl = "http://api.themoviedb.org/3/";

//Search for the input on TMDB
export async function search(input) {
  const url = baseUrl + "search/movie?api_key=" + apiKey + "&query=" + input;
  const data = await fetchUrl(url);
  return data;
}

//Get specific movie
export async function getMovie(id) {
  const url =
    baseUrl +
    "movie/" +
    id +
    "?api_key=" + apiKey + "&append_to_response=videos,images";
  const data = await fetchUrl(url);
  return data;
}

export function getPosterPath(name) {
  return "https://image.tmdb.org/t/p/original" + name;
}

async function fetchUrl(url) {
  const options = { method: "GET", headers: { accept: "application/json" } };
  let jsonResponse = "";

  await fetch(url, options)
    .then((response) => response.json())
    .then((response) => {
      jsonResponse = response;
    })
    .catch((err) => console.error(err));

  return jsonResponse;
}
