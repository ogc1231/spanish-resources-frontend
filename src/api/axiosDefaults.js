import axios from "axios";

axios.defaults.baseURL = "https://spanish-resources-5768efbafb33.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;