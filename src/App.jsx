
import './App.css'
import MainChats from './component/MainChats'
import PersonalChats from './component/PersonalChats'

function App() {

  return (
    <>
      <div className='main-page'>
        <MainChats />
        <PersonalChats />
      </div>
    </>
  )
}

export default App
