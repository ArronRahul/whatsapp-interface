import React from 'react'
import './MainChats.css'
const Personchats=({chat,index})=> {
  return (

    <div className='person-chats'>
      <div className='search-bar2'>
        <div className='profile-pic'>
          <img src={chat.profilePicture}></img>
        </div>
        <div className='chat-des'>
          <div className='chat-name-time'>
            <div className='chat-name'>{chat.name}</div>
            <div className='chat-time'>{chat.messages.length > 0 ? chat.messages[chat.messages.length - 1].time: ''}</div>
          </div>
          <div className='chat-message-count'>
            <div className='chat-message'>{chat.messages.length > 0 ? chat.messages[chat.messages.length - 1].content : 'No messages'}</div>
            <div className='chat-count'>1</div>
          </div>
        </div>
      </div>

    </div>

  )
}

export default Personchats