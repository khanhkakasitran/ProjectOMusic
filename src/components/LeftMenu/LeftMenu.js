import React from 'react'
import { FaMusic } from "react-icons/fa";

import './LeftMenu.css'
import {Menu} from '../Menu/Menu'
import {MenuPlaylist} from '../MenuPlayList/MenuPlaylist'
import {TrackList} from '../TrackList/TrackList'
function LeftMenu() {
  return (
    <div className="leftMenu">
      <div className="logoContainer">
        <i>
          <FaMusic/>
        </i>
       <h2>OMusic</h2>
      </div>

      <Menu title={'Menu'} />

      <MenuPlaylist/>

      <TrackList/>
    </div>
  )
}

export  {LeftMenu}