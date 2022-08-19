import React from 'react';
import "./Cover.css";
import CoverVideo from "../../Media/CoverVideo.mp4";


const Cover = () => {
  return (
    <div className='cover-container'>
      <video className="video" src={CoverVideo} autoPlay loop muted/>
      <h1>Miguel Quintero</h1>
      <p> Ing Electronico /  Developer Fromt-End</p>
      
    </div>
  )
}

export default Cover
