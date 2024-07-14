import React, { useState } from 'react'
import './MainChats.css'

const MainChats=()=> {

  return (
    <div className='MainChat'>
        <div className='navbar'>
            <div className='navbar-profile'>
                <span></span>
            </div>
            <div className='navbar-imgs'>
                <img src='src/assets/icons8-community-24.png'></img>
                <img src='src/assets/icons8-loading-24.png'></img>
                <img src='src/assets/icons8-message-24.png'></img>
                <img src='src/assets/icons8-add-24.png'></img>
                <img src='src/assets/icons8-menu-vertical-24.png'></img>
            </div>
        </div>
        <div className='input-box'>
            <div className='search-bar'>
                <img src='src/assets/icons8-search-24.png'></img>
                <input className='search-bar1' type='text' placeholder='Search'></input>
            </div>
        </div>

    </div>
  )
}

export default MainChats