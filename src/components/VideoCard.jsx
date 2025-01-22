import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import { deleteVideoapi, saveHistoryApi } from "../Services/allApi";
import PropTypes from "prop-types";

function VideoCard({ displayData, setDeleteVideo, insideCategory }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true);
    try {
      const { videoCaption, videoLink } = displayData;
      const timeData = new Date();
      const timeStamp = new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }).format(timeData);
      console.log(timeStamp);
      await saveHistoryApi({ videoCaption, videoLink, timeStamp });
    } catch (error) {
      console.error("Error saving history:", error);
    }
  };

  const deleteVideo = async (vId) => {
    try {
      const result = await deleteVideoapi(vId);
      setDeleteVideo(result.data);
    } catch (error) {
      console.error("Error deleting video:", error);
    }
  };

  const dragStarted = (e, vId) => {
    console.log(`Drag started ${vId}`);
    e.dataTransfer.setData("videoId", vId);
  };

  return (
    <>
      <div
        className="bg-gray-800 shadow-lg rounded-lg overflow-hidden transform transition-transform duration-500 hover:scale-105 hover:shadow-xl cursor-pointer"
        draggable
        onDragStart={(e) => dragStarted(e, displayData?.id)}
      >
        <img
          src={displayData?.imageUrl}
          alt="Card Image"
          className="w-full h-48 object-cover"
          onClick={handleShow}
        />
        <div className="p-4 flex justify-between items-center text-white">
          <p className="font-semibold text-lg">{displayData?.videoCaption}</p>
          {!insideCategory && (
            <button
              className="text-red-600 hover:text-red-800"
              onClick={() => deleteVideo(displayData?.id)}
            >
              <i className="fa-solid fa-trash"></i>
            </button>
          )}
        </div>
      </div>

      {show && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 z-50">
          <div className="bg-gray-800 text-white p-6 rounded-lg w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3 animate-fadeIn">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">
                {displayData?.videoCaption}
              </h2>
              <button
                onClick={handleClose}
                className="text-white text-3xl focus:outline-none"
              >
                &times;
              </button>
            </div>
            <div className="mb-4">
              <iframe
                width="100%"
                height="315"
                src={`${displayData?.videoLink}?autoplay=1`}
                title={displayData?.videoCaption}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
            <button
              onClick={handleClose}
              className="bg-blue-600 px-4 py-2 rounded text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

VideoCard.propTypes = {
  displayData: PropTypes.object.isRequired,
  setDeleteVideo: PropTypes.func.isRequired,
  insideCategory: PropTypes.bool,
};

export default VideoCard;
