import { CommonApi } from "./CommonApi";
import { Server_url } from "./Server_url";

// Upload video - store in http://localhost:3000/videos
export const uploadVideoApi = async (video) => {
  return await CommonApi("POST", `${Server_url}/videos`, video);
};

// Get all videos
export const getAllVideosApi = async () => {
  return await CommonApi("GET", `${Server_url}/videos`, "");
};

// Save video detail to history page
export const saveHistoryApi = async (videoDetail) => {
  return await CommonApi("POST", `${Server_url}/history`, videoDetail);
};

// Get history
export const getHistoryApi = async () => {
  return await CommonApi("GET", `${Server_url}/history`, "");
};

// Delete history entry
export const deleteHistoryApi = async (videoId) => {
  return await CommonApi("DELETE", `${Server_url}/history/${videoId}`, {});
};

// Remove video
export const deleteVideoapi = async (videoId) => {
  return await CommonApi("DELETE", `${Server_url}/videos/${videoId}`, {});
};

// Add category
export const addCategoriesApi = async (catDetails) => {
  return await CommonApi("POST", `${Server_url}/category`, catDetails);
};

// Get categories
export const getCategoriesApi = async () => {
  return await CommonApi("GET", `${Server_url}/category`, "");
};

// Delete category
export const deleteCategoriesApi = async (categoryId) => {
  return await CommonApi("DELETE", `${Server_url}/category/${categoryId}`, {});
};

// Get single video
export const getAVideoApi = async (videoId) => {
  return await CommonApi("GET", `${Server_url}/videos/${videoId}`, "");
};

// Update category
export const updateCateogryApi = async (categoryId, updatecateogryDetails) => {
  return await CommonApi(
    "PUT",
    `${Server_url}/category/${categoryId}`,
    updatecateogryDetails
  );
};

// Get single category
export const getSingleCategoriesApi = async (categoryId) => {
  return await CommonApi("GET", `${Server_url}/category/${categoryId}`, "");
};
