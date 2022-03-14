import React from "react";
import { FaEllipsisH, FaHeadphones, FaCheck } from "react-icons/fa";

import './Banner.css'
import banner from "../../assets/image/banner.jpg";
function Banner() {
  return (
    <div className="banner">
      <img className="bannerImg" src={banner} alt="" />
      
      <div className="content">
        <div className="breadCrump">
          <p>
            Home
            <span className="">/Popular Artist</span>
          </p>
          <i>
            <FaEllipsisH />
          </i>
        </div>
        <div className="artist">
          <div className="left">
            <div className="name">
              <h2>Simple</h2>
              {/* <img src={Check} alt=""/> */}
            </div>
            <p>
              <i>
                <FaHeadphones />
              </i>
              11,222,345 <span>Monthly listeners</span>
            </p>
          </div>
          <div className="right">
            <a href="#">Play</a>
            <a href="#">
              <i>
                <FaCheck />
              </i>
              Following
            </a>
          </div>
        </div>
      </div>

      <div className="bottomLayer"></div>
    </div>
  );
}

export { Banner };
