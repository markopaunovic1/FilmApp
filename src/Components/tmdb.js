/*
 * Currently implemented functions:
 * - Search(string, page number)
 *     Search for string with an optional page number that otherwise
 *     defaults to 1.
 *
 * - getMovie(id)
 *     Get movie details from id.
 *
 * - getGenres()
 *     Get all genres
 *
 * All functions returns a promise object.
 *
 * TODO:  popular movies and trending.
 *
 */

const apiKey = "5c7d12582c5635775b1cc2ce60b8eca9";
const baseUrl = "http://api.themoviedb.org/3/";
const imagePath = "https://image.tmdb.org/t/p/original";
const youtubePath = "https://www.youtube.com/watch?v=";

//Search for the input on TMDB
//Optional page number
//Returns a promise
export async function search(input, pageMr = 1) {
  const url =
    baseUrl +
    "search/movie?api_key=" +
    apiKey +
    "&query=" +
    input +
    "&page=" +
    pageMr;

  return addPath(await fetchUrl(url));
}

//Get specific movie by id
//Returns a promise
export async function getMovie(id) {
  const url =
    baseUrl +
    "movie/" +
    id +
    "?api_key=" +
    apiKey +
    "&append_to_response=videos,images";

  return addPath(await fetchUrl(url));
}

//Get all genres
export async function getGenres() {
  const url = baseUrl + "genre/movie/list?api_key=" + apiKey;
  return await fetchUrl(url);
}

//Get movies from genre
export async function getMoviesFromGenre(id) {
  const url =
    baseUrl + "discover/movie?api_key=" + apiKey + "&with_genres=" + id;
  return addPath(await fetchUrl(url));
}

//Get trending movies (option day, week)
export async function getTrending(time_window = "day") {
  const url = baseUrl + "trending/movie/" + time_window + "?api_key=" + apiKey;

  return addPath(await fetchUrl(url));
}

export async function getRecommendation(id, pageNr = 1) {
  const url =
    baseUrl +
    "movie/" +
    id +
    "/recommendations?api_key=" +
    apiKey +
    "&page=" +
    pageNr;

  return addPath(await fetchUrl(url));
}

//Fulhack 3000 to add image path and youtube path
//to imageName and key value
function addPath(data) {
  let temp = {};
  const imageFile = ["jpg", "png"];

  for (let key in data) {
    if (typeof data[key] === "object") {
      if (Array.isArray(data[key])) {
        temp[key] = [];
        for (let i = 0; i < data[key].length; i++) {
          if (typeof data[key][i] === "number") {
            temp[key].push(data[key][i]);
          } else {
            temp[key].push(addPath(data[key][i]));
          }
        }
      } else {
        temp[key] = addPath(data[key]);
      }
    } else {
      if (typeof data[key] === "string") {
        if (imageFile.some((i) => data[key].includes(i))) {
          temp[key] = imagePath + data[key];
        } else if (key === "key") {
          temp[key] = youtubePath + data[key];
        } else {
          temp[key] = data[key];
        }
      } else {
        temp[key] = data[key];
      }
    }
  }
  return temp;
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
