const ACCESS_TOKEN = "accessToken";
const API_BASE_URL = "http://localhost:9092";

const request = (options) => {
  const headers = new Headers({
    "Content-Type": "application/json",
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
export function getMovieDetails(movieId) {
  return request({
    url: API_BASE_URL + `/movie-service/movies/${movieId}`,
    method: "GET",
  });
}

export function createBooking(bookingRequest) {
  return request({
    url: API_BASE_URL + "/customer-service/current/book",
    method: "POST",
    body: JSON.stringify(bookingRequest),
  });
}

export function logout(){
  localStorage.removeItem(ACCESS_TOKEN);
}
