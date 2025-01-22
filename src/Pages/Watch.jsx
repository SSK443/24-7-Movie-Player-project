import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteHistoryApi, getHistoryApi } from "../Services/allApi";
import PropTypes from "prop-types";

function Watch() {
  const [history, setHistory] = useState([]);

  const getAllHistory = async () => {
    try {
      const result = await getHistoryApi();
      if (result.status >= 200 && result.status < 300) {
        setHistory(result.data);
      }
    } catch (error) {
      console.error("Failed to fetch history:", error);
    }
  };

  useEffect(() => {
    getAllHistory();
  }, []);

  // API delete video history from watch history
  const deleteHistory = async (vId) => {
    try {
      await deleteHistoryApi(vId);
      getAllHistory();
    } catch (error) {
      console.error("Failed to delete history:", error);
    }
  };

  return (
    <>
      <div className="w-full min-h-[80vh] max-h-fit bg-gray-800 text-white py-10">
        <div className="first flex w-4/5 h-fit mx-auto justify-between items-center p-5 bg-gray-900 rounded-lg shadow-lg">
          <h1 className="text-3xl font-semibold">Watch History</h1>
          <Link to="/Home">
            <button className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition duration-300">
              Back to <i className="fa-solid fa-house fa-2xl"></i>
            </button>
          </Link>
        </div>

        <div className="w-4/5 mx-auto mt-5 overflow-x-auto">
          <table className="w-full table-auto bg-gray-900 rounded-lg shadow-lg text-left">
            <thead>
              <tr className="bg-gray-700">
                <th className="p-3">#</th>
                <th className="p-3">Caption</th>
                <th className="p-3">Video Link</th>
                <th className="p-3">Time Stamp</th>
                <th className="p-3">
                  <i className="fa-solid fa-ellipsis-vertical text-white"></i>
                </th>
              </tr>
            </thead>
            <tbody>
              {history?.length > 0 ? (
                history?.map((video, index) => (
                  <tr
                    className="bg-gray-800 border-b border-gray-700 hover:bg-gray-700 transition duration-300"
                    key={video.id}
                  >
                    <td className="p-3">{index + 1}</td>
                    <td className="p-3">{video?.videoCaption}</td>
                    <td className="p-3">
                      <a
                        href={video?.videoLink}
                        className="text-teal-400 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {video?.videoLink}
                      </a>
                    </td>
                    <td className="p-3">{video?.timeStamp}</td>
                    <td className="p-3">
                      <button onClick={() => deleteHistory(video.id)}>
                        <i className="fa-solid fa-trash text-red-600 cursor-pointer hover:text-red-800"></i>
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center text-red-700 text-2xl">
                    Empty history
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

Watch.propTypes = {
  deleteHistory: PropTypes.func,
  getAllHistory: PropTypes.func,
};

export default Watch;
