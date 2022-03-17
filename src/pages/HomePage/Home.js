import React from 'react'

import './Home.css'
import {LeftMenu} from '../../components/LeftMenu/LeftMenu'
import {MainContainer} from '../../components/MainContainer/MainContainer.js'
import {RightMenu} from '../../components/RightMenu/RightMenu.js'

function Home() {
  return (
    <div className="home">
        <LeftMenu/>
        <MainContainer/>
        <RightMenu/>
    </div>
  )
}

export default Home