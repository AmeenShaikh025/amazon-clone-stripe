import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-7459d.cloudfunctions.net/api",
  //"http://localhost:5001/clone-7459d/us-central1/api", //The API (cloud function) URL
});

export default instance;
