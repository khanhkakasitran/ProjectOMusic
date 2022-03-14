import React, { useEffect } from 'react'
import { BiSearchAlt} from 'react-icons/bi'
import { FaUsers} from 'react-icons/fa'

import './MainContainer.css'
import { Banner } from '../Banner/Banner'
import { AudioList} from '../AudioList/AudioList'
function MainContainer() {

  useEffect(() => {
    const liElements = document.querySelectorAll('.mainMenuItem')
    
    function handleMenuClick() {
      liElements.forEach((li) => li.classList.remove('active'))
      this.classList.add('active')
    }
    
    liElements.forEach((element) => element.addEventListener('click', handleMenuClick))
  }, [])

  return (
    <div className="mainContainer">

      <div className="searchBox">
        <input 
          type="text" 
          placeholder="Nhập tên bài hát, nghệ sĩ hoặc MV..."
        />
        <i className="searchIcon">
          <BiSearchAlt/>
        </i>
      </div>

      <Banner/>

      <div className="menuList">
        <ul className="mainMenuList">
          <li className="mainMenuItem">
            <a href="#">
              Popular
            </a>
          </li>
          <li className="mainMenuItem">
            <a href="#">
              Albums
            </a>
          </li>
          <li className="mainMenuItem">
            <a href="#">
              Songs
            </a>
          </li>
          <li className="mainMenuItem">
            <a href="#">
              Fans
            </a>
          </li>
          <li className="mainMenuItem">
            <a href="#">
              About
            </a>
          </li>
        </ul>
        <p>
          <i>
            <FaUsers />
          </i>
          12.3M <span>Followers</span>
        </p>
      </div>

      <AudioList />
    </div>
  )
}

export  {MainContainer}