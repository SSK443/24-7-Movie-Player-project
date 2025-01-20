import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSlack, faTwitter, faLinkedin, faGithub, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'; 




function Footer() {
  return (
    <footer  style={{ background: "rgb(49, 54, 63)", color: 'rgb(238, 238, 238)' }}>
       <div className='flex flex-col w-full items-center justify-between  lg:flex-row lg:px-20'>
          <div className="media 
           items-start  p-5  gap-2 mt-4 lg:w-[400px] w-full ">
            <div className="flex items-center gap-2">
            <i className="fa-solid fa-film text-white text-4xl p-2 pl-4"></i>
            <h2 className='text-lg lg:text-2xl lg:p-2'>Movie 24/7</h2>
            </div>
            <p>Designed and built with all the love in the world by the tailwind team with the help of our</p>
            <p>Code licensed SSk, docs SS BT 5.0</p>
            <p>Currently v5.3.5</p>
          </div>
        <div className='lg:flex lg:justify-between lg:items-center lg:w-[400px] w-full flex justify-evenly items-start'>
            <div className="links 
             items-start  p-3 gap-2 lg:w-[200px] lg:p-2 w-[50%]">
            <h2 className='text-lg lg:text-2xl'>Links</h2>
              <ul>
               <Link to={'/'}> <li>Landing Page</li></Link>
              <Link to={'/Home'}>  <li>Home</li></Link>
              <Link to={'/Watch'}>  <li>Watch History</li></Link>
              </ul>
            </div>
          <div className=" items-start  p-3 gap-2  lg:w-[200px] w-[50%]" >
            <h2 className='text-lg lg:text-2xl lg:p-2'>Guides</h2>
              <ul>
                <li> <a href="https://react.dev/" target='_blank'>React</a></li>
                <li><a href="https://react-bootstrap.netlify.app/" target='_blank'>React Bootstrap</a></li> 
                <li><a href="https://tailwindcss.com/" target='_blank'>Tailwind</a></li> 
              </ul>
            </div>
       </div>
        <div className="contact  items-start  p-3 gap-2 lg:w-[400px] ">
          <h2 className='text-lg lg:text-2xl lg:p-2 text-center lg:text-left mb-4 lg:mb-0'>Contact Us</h2>
            <div className='input '>
              <input type="text" className='lg:w-[70%] lg:h-10 w-72 h-11'/>
              <button className='p-1 ms-2' style={{ background: "#fcfcfc" }}><FontAwesomeIcon icon={faArrowRight} size="2xl" style={{ color: "rgb(49, 54, 63)" }} /></button>
            </div>
            <div className="logos">
              <ul className='flex md:gap-4 lg:mt-1 gap-5 p-5 lg:p-1'>
                <li><FontAwesomeIcon icon={faEnvelope} size="2xl" style={{ color: "white" }} /></li>
                <li><FontAwesomeIcon icon={faTwitter} size="2xl" style={{ color: "#fafafa" }} /></li>
                <li><FontAwesomeIcon icon={faLinkedin} size="2xl" style={{ color: "#f5f5f5" }} /></li>
                <li><FontAwesomeIcon icon={faGithub} size="2xl" style={{ color: "#ffffff" }} /></li>
                <li><FontAwesomeIcon icon={faInstagram} size="2xl" style={{ color: "#ffffff" }} /></li>
                <li><FontAwesomeIcon icon={faFacebook} size="2xl" style={{ color: "#fcfcfc" }} /></li>
              </ul>
            </div>
          </div>
       </div>
      <h4 className='text-center py-10'> CopyRight 2025 Movie 24/7.Built with React</h4>
    </footer>
  );
}

export default Footer;


