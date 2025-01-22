import axios from "axios";

export const CommonApi = async (httpMethod, url, reqBody) => {
  const reqConfig = {
    method: httpMethod,
    url: url,
    data: reqBody,
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await axios(reqConfig);
    return response;
  } catch (error) {
    // Handle error responses consistently
    if (error.response) {
      // Server responded with a status other than 200 range
      return {
        status: error.response.status,
        data: error.response.data,
      };
    } else if (error.request) {
      // Request was made but no response received
      return {
        status: "No response",
        data: error.request,
      };
    } else {
      // Something else happened while making the request
      return {
        status: "Error",
        data: error.message,
      };
    }
  }
};
