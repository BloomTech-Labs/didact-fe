//axiosWithImg
import axios from "axios";
const axiosWithImg = () => {
  const token = localStorage.getItem("token");
  return axios.create({
    headers: {
      "content-type": "multipart/form-data",
      Authorization: token
    }
  });
};
export default axiosWithImg;
