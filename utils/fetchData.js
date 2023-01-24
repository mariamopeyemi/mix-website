import { axiosBaseInstance } from "../axios";

// Custom returned data based on API:
// {
//   "message": "string",
//   "status": false,
//   "data": "object | array | string | number | boolean"
// }

// status:false indicates a failed response
export default async function fetchData(url) {
  try {
    const resp = await axiosBaseInstance.get(url);
    return resp.data;
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      //   console.log(error.response.data);
      //   console.log(error.response.status);
      //   console.log(error.response.headers);
      // console.log(error.response);
      return { ...error.response.data, status: false, message: error.response.data?.message ?? "Something went wrong. Pls try again later - No server error message" };
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request);
      return { status: false, message: "Request was made but no response was received. Pls check your internet or try again." };
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error", error.message);
      return { status: false, message: error.message };
    }
  }
}
