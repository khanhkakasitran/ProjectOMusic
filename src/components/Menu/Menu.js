import React, {useEffect} from 'react'
import {BsFillHouseFill, BsJournalAlbum} from 'react-icons/bs'
import {FaBroadcastTower, FaMicrophoneAlt, FaPodcast} from 'react-icons/fa'
import {BiPulse} from 'react-icons/bi'

import './Menu.css'
function Menu({title}) {
  
  useEffect(() => {
    const liElements = document.querySelectorAll('.MenuContainerItem')
    
    function handleMenuClick() {
      liElements.forEach((li) => li.classList.remove('active'))
      this.classList.add('active')
    }
    
    liElements.forEach((element) => element.addEventListener('click', handleMenuClick))
  }, [])
  
  
  
  return (
    <div className="MenuContainer">
      <p className="title">{title}</p>
      <ul className="MenuContainerList">
        {/* {
          menuObject && menuObject.map((menu) => (
            <li 
              className="MenuContainerItem"
              key={menu.id}
            >
              <a href="#">
                <i>{menu.icon}</i>
                <span>{menu.name}</span>
              </a>
            </li>
          ))
        } */}
        <li className="MenuContainerItem">
          <a href="#">
            <i><BsFillHouseFill/></i>
            <span>Home</span>
          </a>
        </li>
        <li className="MenuContainerItem">
          <a href="#">
            <i><BiPulse/></i>
            <span>Trends</span>
          </a>
        </li>
        <li className="MenuContainerItem">
          <a href="#">
            <i><FaBroadcastTower/></i>
            <span>Radio</span>
          </a>
        </li>
        <li className="MenuContainerItem">
          <a href="#">
            <i> <FaMicrophoneAlt/></i>
            <span>Artist</span>
          </a>
        </li>
        <li className="MenuContainerItem">
          <a href="#">
            <i><BsJournalAlbum/></i>
            <span>Albums</span>
          </a>
        </li>
        <li className="MenuContainerItem">
          <a href="#">
            <i><FaPodcast/></i>
            <span>Podcast</span>
          </a>
        </li>
      </ul>
    </div>
  )
}

export  {Menu}