import React, { useState } from 'react';
import Add from '../components/Add';
import { Link } from 'react-router-dom';
import View from '../components/View';
import Category from '../components/Category';

function Home() {
  const[removeCategoryVideoResponse,setRemoveCategoryVideoResponse]=useState("")
  const [uploadVideoResponse,setUploadVideoResponse] = useState([])
  return (
    <>
      <div className="w-full min-h-[80vh] bg-gray-900">
        {/* Header section */}
        <div className="flex flex-col md:flex-row w-[90%] h-fit justify-between mx-auto text-white p-5 items-center">
          <Add setUploadVideoResponse={setUploadVideoResponse} />
          <Link to="/Watch" className="text-2xl hover:text-teal-500 transition duration-300 mt-4 md:mt-0">
            WatchHistory
          </Link>
        </div>

        {/* Main content section */}
        <div className="flex flex-col lg:flex-row justify-between items-start w-[90%] text-white mx-auto pb-5">
          <div className="left w-full lg:w-[65%] mb-5 lg:mb-0">
            <h1 className="text-2xl mb-4">All Videos</h1>
            <View uploadVideoResponse={uploadVideoResponse} setRemoveCategoryVideoResponse={setRemoveCategoryVideoResponse}/>
          </div>
          <div className="right w-full lg:w-[30%]">
            <h1 className="text-2xl mb-4">All Categories</h1>
            <Category  removeCategoryVideoResponse={removeCategoryVideoResponse}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
