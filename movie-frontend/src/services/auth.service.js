import axios from "axios";

const API_URL = "http://localhost:9090";
const API_URL2 = "http://localhost:9092";

class AuthService {
  login(username, password) {
    return axios
      .post(API_URL2 + "/login", {
        username,
        password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username, name, email, password) {
    return axios.post(API_URL + "/signup", {
      username,
      name,
      email,

      password,
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
}

export default new AuthService();
