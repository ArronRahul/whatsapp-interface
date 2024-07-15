
import './App.css'
import MainChats from './component/MainChats'
import PersonalChats from './component/PersonalChats'
import { useEffect, useState } from 'react';

function App() {

  const myarray = [
    {
      profilePicture: 'src/assets/images/istockphoto-1476170969-1024x1024.jpg',
      name: 'John Doe',
      verified: true,
      messages: [
        { content: 'Hello there!', time: '10 AM', Date:'' },
        { content: 'How are you?', time: '11 AM', Date:''  }
      ]
    },
    {
      profilePicture: 'src/assets/images/istockphoto-619379486-1024x1024.jpg',
      name: 'Arun',
      verified: false,
      messages: [
        { content: 'Good morning!', time: '10 AM', Date:'' },
        { content: 'Let’s catch up later.', time: '11 AM', Date:''}
      ]
    }
  ];
  
    const [chats, setChats] = useState([]);
  
    useEffect(() => {
      const storedChats = localStorage.getItem('chatData');
      if (!storedChats) {
        localStorage.setItem('chatData', JSON.stringify(myarray));
        setChats(myarray);
      } else {
        setChats(JSON.parse(storedChats));
      }
    }, [chats]);

  return (
    <>
    
      <div className='main-page'>
        <MainChats chats={chats}/>
        <PersonalChats />
      </div>
    </>
  )
}


export default App
