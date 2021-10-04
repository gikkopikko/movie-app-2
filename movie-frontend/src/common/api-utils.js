import fetchPonyfill from "fetch-ponyfill";

const { fetch, Request, Response, Headers } = fetchPonyfill({ Promise });

const ACCESS_TOKEN = "accessToken";
const API_BASE_URL = "http://localhost:9092";
const request = (options) => {
  const headers = new Headers({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "http://localhost:3000",
  });

  if (localStorage.getItem(ACCESS_TOKEN)) {
    headers.append(
      "Authorization",
      "Bearer-" + localStorage.getItem(ACCESS_TOKEN)
    );
  }

  const defaults = { headers: headers };
  options = Object.assign({}, defaults, options);

  return fetch(options.url, options).then((response) =>
    response.json().then((json) => {
      if (!response.ok) {
        return Promise.reject(json);
      }
      return json;
    })
  );
};

export function login(loginRequest) {
  return request({
    url: API_BASE_URL + "/login",
    method: "POST",
    body: JSON.stringify(loginRequest),
  });
}

export function signup(signupRequest) {
  return request({
    url: API_BASE_URL + "/signup-service/signup",
    method: "POST",
    body: JSON.stringify(signupRequest),
  });
}

export function getCurrentUser() {
  if (!localStorage.getItem(ACCESS_TOKEN)) {
    return Promise.reject("No access token set.");
  }

  return request({
    url: API_BASE_URL + "/current",
    method: "GET",
  });
}

export function getBookingDetails(bookingDetailsRequest) {
  return request({
    url:
      API_BASE_URL +
      `/customer-service/booking/${bookingDetailsRequest.username}/${bookingDetailsRequest.movieId}`,
    method: "GET",
  });
}

export function getUserBookingDetails(bookingDetailsRequest) {
  return request({
    url:
      API_BASE_URL +
      `/customer-service/booking/${bookingDetailsRequest.username}`,
    method: "GET",
  });
}
export function getMovieDetails(movieId) {
  return request({
    url: API_BASE_URL + `/movie-service/movies/${movieId}`,
    method: "GET",
  });
}

export function createBooking(bookingRequest) {
  const occupiedRequest = {
    selected: bookingRequest.selected,
  };
  request({
    url: API_BASE_URL + "/movie-service/setoccupied/" + bookingRequest.movieId,
    method: "PUT",
    body: JSON.stringify(occupiedRequest),
  });

  return request({
    url: API_BASE_URL + "/customer-service/current/book",
    method: "POST",
    body: JSON.stringify(bookingRequest),
  });
}

export function logout() {
  localStorage.removeItem(ACCESS_TOKEN);
}

export function getMoviesByCategory() {
  return request({
    url: API_BASE_URL + "/movie-service/allCategoryDetails",

    method: "GET",
  });
}
