import React, { useState } from 'react';
import './MainChats.css';
import Personchats from './Personchats';

const MainChats = ({ chats }) => {
  const [selected, setSelected] = useState(null); // State to track the selected option

  const handleClick = (index) => {
    setSelected(index); // Update the selected index
  };

  return (
    <div className='MainChat'>
      <div className='MainChat-sticky'>
        <div className='navbar'>
          <div className='navbar-profile'>
            <span></span>
          </div>
          <div className='navbar-imgs'>
            <img src='src/assets/icons8-community-24.png' alt="Community" />
            <img src='src/assets/icons8-loading-24.png' alt="Loading" />
            <img src='src/assets/icons8-message-24.png' alt="Message" />
            <img src='src/assets/icons8-add-24.png' alt="Add" />
            <img src='src/assets/icons8-menu-vertical-24.png' alt="Menu" />
          </div>
        </div>
        <div className='input-box'>
          <div className='search-bar'>
            <img src='src/assets/icons8-search-24.png' alt="Search" />
            <input className='search-bar1' type='text' placeholder='Search' />
          </div>
        </div>
        <div className='sort-options'>
          {['All', 'Unread', 'Group'].map((option, index) => (
            <span
              key={index}
              className={selected === index ? 'clicked' : ''}
              onClick={() => handleClick(index)}
            >
              {option}
            </span>
          ))}
        </div>
      </div>
      <div className='person-chats-container'>
        {chats.map((chat,index)=>(
          <Personchats key={index} chat={chat}/>
        ))}
      </div>
    </div>
  );
}

export default MainChats;
