import React from 'react';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/home');
  };

  return (
    <>
      <div className="land w-full h-fit pb-20" style={{ backgroundColor: 'rgb(34, 40, 49)' }}>
        <div className="flex justify-between items-center flex-col md:flex-row w-[80%] mx-auto h-fit pb-10">
          <div className="left h-fit md:w-[500px] text-left mt-10 w-[350px]">
            <h1 className='text-5xl text-white mt-5'>Welcome to Movie 24/7 App</h1>
            <p className='text-white mt-4 text-justify'>
              Movie 24/7 allows you to add and remove uploaded videos. It also helps to arrange them in different categories with drag-and-drop functionality.
            </p>
            <button className="px-4 py-2 rounded-lg mb-5 text-white mt-4 bg-teal-500 hover:bg-teal-600 transition duration-300 animate-bounce" onClick={handleNavigate} > Get Started </button>
          </div>
          <div className="right h-fit md:w-[500px] w-[350px] md:mt-0 mt-5">
            <img src="./one.gif" alt="Welcome" className='md:w-full md:my-10 md:h-[600px]' />
          </div>
        </div>

        <div className="feature h-fit w-[80%] mx-auto text-white">
          <h1 className='text-center text-5xl my-10'>Movies</h1>
          <div className="flex lg:justify-between md:justify-center items-center  flex-wrap h-fit pb-14 lg:gap-5 gap-10 ">
            <div className="one">
              <img
                src="./two.webp"
                alt="Image 1"
                className="h-[500px] w-[350px] object-cover transform transition duration-500 hover:scale-105 hover:opacity-80"
              />
            </div>
            <div className="two">
              <img
                src="./one.webp"
                alt="Image 2"
                className="h-[500px] w-[350px] object-cover transform transition duration-500 hover:scale-105 hover:opacity-80"
              />
            </div>
            <div className="three">
              <img
                src="./three.webp"
                alt="Image 3"
                className="h-[500px] w-[350px] object-cover transform transition duration-500 hover:scale-105 hover:opacity-80"
              />
            </div>
          </div>
        </div>

        <div className="videos flex justify-between items-center flex-wrap text-white w-[80%] h-fit mx-auto md:gap-5 md:mt-10 mt-3 gap-10 md:p-5 p-8" style={{ border: '2px white solid' }}>
          <div className="left md:w-[300px] h-[300px] text-justify">
            <h1 className='text-4xl pb-3'>Simple, Fast and Powerful</h1>
            <h3 className='text-2xl pb-2'>Play Everything</h3>
            <p>Watch movies for free</p>
            <h3 className='text-2xl pb-2'>Categorize</h3>
            <p>Multiple categories available 24/7. Ready?</p>
            <h3 className='text-2xl pb-2'>Watch History</h3>
            <p>You can watch everything from the beginning to the end</p>
          </div>
          <div className="right">
            <iframe
              width="" height=""
              src="https://www.youtube.com/embed/1kVK0MZlbI4"
              title="Pushpa 2 - The Rule Trailer (Hindi)"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className='lg:w-[800px] lg:h-[450px] w-[250px] h-[350px] p-5'
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;

