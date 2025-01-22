import React, { useEffect, useState } from "react";
import {
  addCategoriesApi,
  deleteCategoriesApi,
  getAVideoApi,
  getCategoriesApi,
  updateCateogryApi,
} from "../Services/allApi";
import VideoCard from "./VideoCard";
import PropTypes from "prop-types";

function Category({ removeCategoryVideoResponse }) {
  const [allCategories, setAllCategories] = useState([]);
  const [category, setCategory] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setCategory("");
  };

  const handleShow = () => setShow(true);

  const handleAddCategory = async () => {
    if (category) {
      try {
        await addCategoriesApi({ name: category, allVideos: [] });
        handleClose();
        getAllCategories(); // Refresh categories after adding a new one
      } catch (error) {
        console.error("Error adding category:", error);
      }
    } else {
      alert("Please fill the form!!");
    }
  };

  const getAllCategories = async () => {
    try {
      const result = await getCategoriesApi();
      setAllCategories(result.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    getAllCategories();
  }, [removeCategoryVideoResponse]);

  const handleDeleteCategories = async (cId) => {
    try {
      await deleteCategoriesApi(cId);
      getAllCategories(); // Refresh categories after deleting one
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  };

  const dragOverCategory = (e) => {
    e.preventDefault();
    console.log("Dragging over category");
  };

  const videoDropped = async (e, categoryId) => {
    e.preventDefault(); // Prevent default behavior
    const videoId = e.dataTransfer.getData("videoId");
    console.log(
      `Video dropped with vId: ${videoId}, inside category id: ${categoryId}`
    );

    try {
      const { data } = await getAVideoApi(videoId);
      console.log(data);

      let selectedCategory = allCategories.find(
        (item) => item.id === categoryId
      );

      if (selectedCategory) {
        const hasVideo = selectedCategory.allVideos.some(
          (video) => video.id === videoId
        );

        if (!hasVideo) {
          selectedCategory.allVideos.push(data);
          await updateCateogryApi(categoryId, selectedCategory);
          getAllCategories();
          console.log(selectedCategory);
        } else {
          console.log("Video already exists in the category");
        }
      }
    } catch (error) {
      console.error("Error handling video drop:", error);
    }
  };

  const dragStarted = (e, videoId, categoryId) => {
    console.log(
      `Drag started from category id: ${categoryId} with video id: ${videoId}`
    );
    const dataShare = { videoId, categoryId };
    e.dataTransfer.setData("removeVideoDetails", JSON.stringify(dataShare));
  };

  return (
    <>
      <div className="text-center mt-5">
        <button
          className="px-10 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition duration-300"
          onClick={handleShow}
        >
          Add New Category
        </button>
      </div>

      {show && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 z-50">
          <div className="bg-gray-800 text-white p-6 rounded-lg w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">Add New Category</h2>
              <button
                onClick={handleClose}
                className="text-white text-3xl focus:outline-none"
              >
                &times;
              </button>
            </div>
            <div className="border-2 border-gray-700 p-4 rounded-md">
              <h3 className="text-xl mb-2">Enter Category Name</h3>
              <input
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                type="text"
                placeholder="Add New Category"
                className="w-full px-3 py-2 bg-white text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div className="flex justify-end mt-4">
              <button
                className="bg-gray-600 px-4 py-2 rounded text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-300 mr-2"
                onClick={handleClose}
              >
                Cancel
              </button>
              <button
                className="bg-teal-500 px-4 py-2 rounded text-white hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300"
                onClick={handleAddCategory}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto grid grid-cols-1 w-full h-fit mt-5">
        {allCategories.length > 0 ? (
          allCategories.map((item, index) => (
            <div
              onDragOver={dragOverCategory}
              droppable="true"
              onDrop={(e) => videoDropped(e, item.id)}
              key={item.id}
              className="card border-2 border-white rounded-xl text-center p-3 m-1 flex flex-col items-center"
            >
              <h1 className="text-lg mb-2">{item.name}</h1>
              <button
                onClick={() => handleDeleteCategories(item.id)}
                className="text-red-800 hover:text-red-600 transition duration-300"
              >
                <i className="fa-solid fa-trash"></i>
              </button>

              <div className="w-full mt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {item.allVideos?.length > 0 &&
                  item.allVideos.map((video, index) => (
                    <div
                      draggable
                      onDragStart={(e) => dragStarted(e, video.id, item.id)}
                      key={video.id}
                      className="w-full"
                    >
                      <VideoCard insideCategory={true} displayData={video} />
                    </div>
                  ))}
              </div>
            </div>
          ))
        ) : (
          <div className="mt-5 mx-auto p-5">
            <h1 className="text-xl text-red-500 text-center">
              No Categories available !!!
            </h1>
          </div>
        )}
      </div>
    </>
  );
}

Category.propTypes = {
  removeCategoryVideoResponse: PropTypes.object.isRequired,
};

export default Category;
