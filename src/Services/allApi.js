import { useAsyncError } from "react-router-dom"
import { CommonApi } from "./CommonApi"
import { Server_url } from "./Server_url"

//upload video -store in http://localhost:3000/videos
export const uploadVideoApi=async(video)=>{
//send response to add component
    return await CommonApi("POST",`${Server_url}/videos`,video)
  }

// get video api called by view
export const getAllVideosApi=async()=>{
  return await CommonApi("GET",`${Server_url}/videos`,"")
}

// store videodetail to history page jsonserver
//http://localhost:3000/history
export const saveHistoryApi=async(videoDetail)=>{
  return await CommonApi("POST", `${Server_url}/history`,videoDetail)

}
// get getHistoryApi called by watchhistory
export const getHistoryApi=async()=>{
  return await CommonApi("GET", `${Server_url}/history`,"")

}

// delete history from watch page
export const deleteHistoryApi = async (videoId) => {
  return await CommonApi("DELETE", `${Server_url}/history/${videoId}`, {});
};

/// remove video from videocard

export const deleteVideoapi = async (videoId) => {
  return await CommonApi("DELETE", `${Server_url}/videos/${videoId}`, {});
};

// add catogeris
export const addCategoriesApi=async(catDetails)=>{
  return await CommonApi("POST", `${Server_url}/category`,catDetails )
}
// get categaris

export const getCategoriesApi=async()=>{
  return await CommonApi("GET", `${Server_url}/category`,"")
}
///delete category api

export const deleteCategoriesApi=async(categoryId)=>{
  return await CommonApi("DELETE", `${Server_url}/category/${categoryId}`, {})

}

//get single video api

export const getAVideoApi=async(videoId)=>{
  return await CommonApi("GET", `${Server_url}/videos/${videoId}`,"")
}

//updatecateogry api

export const updateCateogryApi=async(categoryId,updatecateogryDetails)=>{
  return await CommonApi("PUT", `${Server_url}/category/${categoryId}`,updatecateogryDetails)

}
//getSingleCategory api

export const getSingleCategoriesApi = async (categoryId) => {
  return await CommonApi("GET", `${Server_url}/category/${categoryId}`, "");
};