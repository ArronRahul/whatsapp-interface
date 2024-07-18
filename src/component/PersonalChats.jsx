import React from 'react'
import './PersonalChats.css'

function PersonalChats() {
  return (
    <div className='PersonalChat'>
      <div className='chat-navbar'>
        <div className='navbar-profile'>
            <img src=''></img>
        </div>
        <div className='navbar-name'>
          <p>Arun</p>
        </div>
        <div className='navbar-end'>
          <div className='navbar-end1'>
          <img src='src/assets/icons8-video-call-24.png'></img>
          </div>
          <img src='src/assets/icons8-search-24.png'></img>
          <img src='src/assets/icons8-menu-vertical-24.png'></img>
        </div>
      </div>
      <div className='chat-body'>
  
      </div>
      <div className='chat-botbar'>
        <div className='chat-botimg'>
        <img src='src/assets/icons8-smile-26 (1).png'></img>
        <img src='src/assets/icons8-plus-24.png'></img>
        </div>
        <input className='search-bar1' type='text' placeholder='Search' />
        <img src='src/assets/icons8-mute-unmute-40.png'></img>
      </div>
    </div>
  )
}

export default PersonalChats