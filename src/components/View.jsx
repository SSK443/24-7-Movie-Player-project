import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { getAllVideosApi, getSingleCategoriesApi, updateCateogryApi } from "../Services/allApi";

function View({ uploadVideoResponse, setRemoveCategoryVideoResponse }) {
  const [allVideos, setAllVideos] = useState([]);
  const [deleteVideoResponse, setDeleteVideoResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getAllVideos = async () => {
    setLoading(true);
    setError("");
    try {
      const result = await getAllVideosApi();
      if (result?.status === 200) {
        setAllVideos(result.data);
      } else {
        setError("Failed to fetch videos. Status code: " + result?.status);
      }
    } catch (e) {
      setError("An error occurred while fetching videos: " + e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchVideos = async () => {
      await getAllVideos();
    };
    fetchVideos();
  }, [uploadVideoResponse, deleteVideoResponse]);

  const handleCategoryVideo = async (e) => {
    const { videoId, categoryId } = JSON.parse(
      e.dataTransfer.getData("removeVideoDetails")
    );
    try {
      const { data } = await getSingleCategoriesApi(categoryId);
      const updatedVideoList = data.allVideos.filter((e) => e.id !== videoId);
      const { id, categoryName } = data;
      const result= await updateCateogryApi(categoryId, {
        id,
        categoryName,
        allVideos: updatedVideoList,
      });
      setRemoveCategoryVideoResponse(result.data)
      console.log(updatedVideoList);

      console.log(data);
    } catch (error) {
      console.error(
        "An error occurred while fetching category videos: ",
        error
      );
    }
  };

  const DragOverView = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className="container mx-auto p-4"
      droppable="true"
      onDragOver={DragOverView}
      onDrop={handleCategoryVideo}
    >
      {loading ? (
        <div className="text-blue-600 text-2xl animate-spin">Loading...</div>
      ) : error ? (
        <div className="text-red-600 text-2xl animate-pulse">{error}</div>
      ) : allVideos.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {allVideos.map((video, index) => (
            <div className="mb-4" key={index}>
              <VideoCard
                displayData={video}
                setDeleteVideo={setDeleteVideoResponse}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-red-600 text-2xl animate-pulse">
          No Videos are Uploaded
        </div>
      )}
    </div>
  );
}

export default View;
