import React from 'react'
import './MainChats.css'
const Personchats=()=> {
  return (

    <div className='person-chats'>
      <div className='search-bar2'>
        <div className='profile-pic'>
          <img src='src/assets/myphoto.jpeg'></img>
        </div>
        <div className='chat-des'>
          <div className='chat-name-time'>
            <div className='chat-name'>John Doe</div>
            <div className='chat-time'>10:00 AM</div>
          </div>
          <div className='chat-message-count'>
            <div className='chat-message'>Hello</div>
            <div className='chat-count'>1</div>
          </div>
        </div>
      </div>

    </div>

  )
}

export default Personchats