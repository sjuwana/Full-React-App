let apiUrl;
const apiUrls = {
  production: "https://react-client3-app.herokuapp.com/api",
  development: "http://localhost:3000/api",
};

if (window.location.hostname === "localhost") {
  apiUrl = apiUrls.development;
} else {
  apiUrl = apiUrls.production;
}

export default apiUrl;
